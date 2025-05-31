// football-map.js

class FootballClubMap {
    constructor() {
        this.map = null;
        this.clubs = [];
        this.markers = [];
        this.radiusCircles = [];
        this.selectedClubCircle = null;
        this.currentRadius = 0;
        this.showRadiusCircles = true;
        this.init();
        this.loadDemoData();
    }
    
    init() {
        // Initialize Leaflet map
        this.map = L.map('map').setView([20, 0], 2);
        
        // OpenStreetMap Tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(this.map);
        
        // Event Listeners for Radius Slider and Input
        document.getElementById('radius').addEventListener('input', (e) => {
            this.updateRadius(parseInt(e.target.value));
        });
        
        document.getElementById('radiusInput').addEventListener('input', (e) => {
            const value = parseInt(e.target.value) || 0;
            this.updateRadius(value);
        });
        
        // Event Listener for "Show Circles" Checkbox
        document.getElementById('showCircles').addEventListener('change', (e) => {
            this.showRadiusCircles = e.target.checked;
            this.filterAndDisplayClubs();
        });
        
        // When zooming or panning, update the visible clubs
        this.map.on('zoomend', () => {
            this.updateStats();
        });
        
        this.map.on('moveend', () => {
            this.filterAndDisplayClubs();
        });
        
        // Clear selected club circle when clicking on empty map space
        this.map.on('click', () => {
            this.clearSelectedClubCircle();
        });
    }
    
    loadDemoData() {
        // Assume CLUBS_DATA is a global array (from clubs-data.js) with objects like:
        // { id, name, lat, lng, rank, country, ... }
        if (typeof CLUBS_DATA !== 'undefined' && Array.isArray(CLUBS_DATA)) {
            this.clubs = CLUBS_DATA.map(c => ({
                id:      c.id,
                name:    c.name,
                lat:     c.lat,
                lng:     c.lng,
                rank:    c.rank,
                country: c.country || '',
                hidden:  false
            }));
        }
        
        // Initial rendering & stats
        this.filterAndDisplayClubs();
        this.updateStats();
    }
    
    updateRadius(newRadius) {
        // Clamp to [0, 20000] km
        newRadius = Math.max(0, Math.min(20000, newRadius));
        this.currentRadius = newRadius;
        
        // Display text (e.g., "500 km" or "World")
        let displayText;
        if (newRadius >= 20000) {
            displayText = "World";
        } else {
            displayText = `${newRadius} km`;
        }
        
        // Update both slider and number input
        document.getElementById('radiusDisplay').textContent = displayText;
        document.getElementById('radius').value = newRadius;
        document.getElementById('radiusInput').value = newRadius;
        
        // If a club is selected (red dashed circle), update its radius circle
        if (this.selectedClubCircle) {
            this.selectedClubCircle.setRadius(this.currentRadius * 1000);
        }
        
        this.filterAndDisplayClubs();
    }
    
    filterAndDisplayClubs() {
        // 1. Determine which clubs are inside the current map bounds
        const bounds = this.map.getBounds();
        const visibleClubs = this.clubs.filter(club =>
            bounds.contains([club.lat, club.lng])
        );
        
        // 2. Apply the new radius‐based filter (parallel check against all stronger clubs)
        const filteredClubs = this.filterClubsByRadius(visibleClubs);
        
        // 3. Clear existing markers & radius circles
        this.clearMarkers();
        this.clearRadiusCircles();
        
        // 4. Add marker + optional circle for each filtered club
        filteredClubs.forEach(club => {
            this.addClubMarker(club);
            if (this.showRadiusCircles) {
                this.addRadiusCircle(club);
            }
        });
        
        // 5. Update statistics (total vs. visible, zoom level, etc.)
        this.updateStats();
    }
    
    filterClubsByRadius(clubsSubset) {
        // For each club A in clubsSubset, check if there is any stronger club B
        // (i.e. B.rank < A.rank) within currentRadius. If yes, exclude A.
        // Otherwise keep A.
        const result = [];
        
        clubsSubset.forEach(clubA => {
            let isDominated = false;
            
            for (let clubB of clubsSubset) {
                if (clubB.rank < clubA.rank) {
                    const dist = this.calculateDistance(
                        clubA.lat, clubA.lng,
                        clubB.lat, clubB.lng
                    );
                    if (dist <= this.currentRadius) {
                        isDominated = true;
                        break;
                    }
                }
            }
            
            if (!isDominated) {
                result.push(clubA);
            }
        });
        
        return result;
    }
    
    calculateDistance(lat1, lng1, lat2, lng2) {
        // Haversine formula (returns distance in kilometers)
        const R = 6371; // Earth radius in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    
    addClubMarker(club) {
        // Top 10 clubs in gold, others in orange
        const isTopClub = club.rank <= 10;
        
        const marker = L.circleMarker([club.lat, club.lng], {
            radius:      isTopClub ? 8 : 6,
            fillColor:   isTopClub ? '#ffd700' : '#ff6b35',
            color:       'white',
            weight:      2,
            opacity:     1,
            fillOpacity: 0.8
        });
        
        const popupContent = `
            <div style="text-align: center;">
                <h3 style="margin: 0 0 5px 0;">${club.name}</h3>
                <p style="margin: 0;"><strong>Rank:</strong> #${club.rank}</p>
                <p style="margin: 0;"><strong>Country:</strong> ${club.country}</p>
                <p style="margin: 0;"><strong>Dominance Radius:</strong> ${this.currentRadius} km</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        
        // Clicking a marker shows a dashed circle around that specific club
        marker.on('click', () => {
            this.showSelectedClubCircle(club);
        });
        
        marker.addTo(this.map);
        this.markers.push(marker);
    }
    
    addRadiusCircle(club) {
        // Color & thickness based on rank tier
        const isTop3 = club.rank <= 3;
        const isTop10 = club.rank <= 10;
        
        let circleColor = '#ff6b35';     // Default orange
        let fillOpacity = 0.10;
        let weight = 1;
        
        if (isTop3) {
            circleColor = '#ffd700';     // Gold for top 3
            fillOpacity = 0.15;
            weight = 3;
        } else if (isTop10) {
            circleColor = '#ff8c42';     // Light orange for top 10
            fillOpacity = 0.12;
            weight = 2;
        }
        
        const circle = L.circle([club.lat, club.lng], {
            color:      circleColor,
            fillColor:  circleColor,
            fillOpacity: fillOpacity,
            radius:     this.currentRadius * 1000, // km → meters
            weight:     weight,
            opacity:    0.6
        });
        
        const popupContent = `
            <div style="text-align: center;">
                <h3 style="margin: 0 0 5px 0;">${club.name}</h3>
                <p style="margin: 0;"><strong>Rank:</strong> #${club.rank}</p>
                <p style="margin: 0;"><strong>Country:</strong> ${club.country}</p>
                <p style="margin: 0;"><strong>Dominance Radius:</strong> ${this.currentRadius} km</p>
            </div>
        `;
        
        circle.bindPopup(popupContent);
        circle.on('click', () => {
            this.showSelectedClubCircle(club);
        });
        
        circle.addTo(this.map);
        this.radiusCircles.push(circle);
    }
    
    clearMarkers() {
        this.markers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.markers = [];
    }
    
    clearRadiusCircles() {
        this.radiusCircles.forEach(circle => {
            this.map.removeLayer(circle);
        });
        this.radiusCircles = [];
    }
    
    updateStats() {
        // Total clubs in data vs. currently visible markers
        document.getElementById('totalClubs').textContent = this.clubs.length;
        document.getElementById('visibleClubs').textContent = this.markers.length;
        document.getElementById('zoomLevel').textContent = this.map.getZoom();
    }
    
    showSelectedClubCircle(club) {
        // Remove any previous dashed circle
        this.clearSelectedClubCircle();
        
        this.selectedClubCircle = L.circle([club.lat, club.lng], {
            color:      '#e74c3c',
            fillColor:  '#e74c3c',
            fillOpacity: 0.20,
            radius:     this.currentRadius * 1000,
            weight:     3,
            opacity:    0.8,
            dashArray:  '10, 10'
        });
        
        this.selectedClubCircle.addTo(this.map);
    }
    
    clearSelectedClubCircle() {
        if (this.selectedClubCircle) {
            this.map.removeLayer(this.selectedClubCircle);
            this.selectedClubCircle = null;
        }
    }
}

// Instantiate the map once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new FootballClubMap();
});
