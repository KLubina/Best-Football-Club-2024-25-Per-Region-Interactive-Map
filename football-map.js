class FootballClubMap {
    constructor() {
        this.map = null;
        this.clubs = [];
        this.markers = [];
        this.radiusCircles = [];
        this.selectedClubCircle = null;
        this.currentRadius = 50;
        this.showRadiusCircles = true;
        this.init();
        this.loadDemoData();
    }
    
    init() {
        // Initialize map
        this.map = L.map('map').setView([20, 0], 2);
        
        // OpenStreetMap Tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(this.map);
        
        // Event Listeners
        document.getElementById('radius').addEventListener('input', (e) => {
            this.updateRadius(parseInt(e.target.value));
        });
        
        document.getElementById('radiusInput').addEventListener('input', (e) => {
            const value = parseInt(e.target.value) || 3;
            this.updateRadius(value);
        });
        
        document.getElementById('showCircles').addEventListener('change', (e) => {
            this.showRadiusCircles = e.target.checked;
            this.filterAndDisplayClubs();
        });
        
        this.map.on('zoomend', () => {
            this.updateStats();
        });
        
        this.map.on('moveend', () => {
            this.filterAndDisplayClubs();
        });
        
        // Clear selected club circle when clicking on map
        this.map.on('click', () => {
            this.clearSelectedClubCircle();
        });
    }
    
    loadDemoData() {
        this.clubs = [...CLUBS_DATA];
        this.filterAndDisplayClubs();
        this.updateStats();
    }
    
    updateRadius(newRadius) {
        // Clamp value to valid range
        newRadius = Math.max(3, Math.min(20000, newRadius));
        
        this.currentRadius = newRadius;
        let displayText;
        if (newRadius >= 20000) {
            displayText = "World";
        } else {
            displayText = `${newRadius} km`;
        }
        
        // Update both controls
        document.getElementById('radiusDisplay').textContent = displayText;
        document.getElementById('radius').value = newRadius;
        document.getElementById('radiusInput').value = newRadius;
        
        // Update selected club circle radius if one exists
        if (this.selectedClubCircle) {
            this.selectedClubCircle.setRadius(this.currentRadius * 1000);
        }
        
        this.filterAndDisplayClubs();
    }
    
    filterAndDisplayClubs() {
        // Current map bounds
        const bounds = this.map.getBounds();
        
        // Find clubs in visible area
        const visibleClubs = this.clubs.filter(club => 
            bounds.contains([club.lat, club.lng])
        );
        
        // Filter clubs by radius
        const filteredClubs = this.filterClubsByRadius(visibleClubs);
        
        // Remove old markers and circles
        this.clearMarkers();
        this.clearRadiusCircles();
        
        // Add new markers and circles
        filteredClubs.forEach(club => {
            this.addClubMarker(club);
            if (this.showRadiusCircles) {
                this.addRadiusCircle(club);
            }
        });
        
        this.updateStats();
    }
    
    filterClubsByRadius(clubs) {
        const result = [];
        const processed = new Set();
        
        // Sort clubs by rank (best first)
        clubs.sort((a, b) => a.rank - b.rank);
        
        clubs.forEach(club => {
            if (processed.has(club.rank)) return;
            
            // Check if other clubs are within radius
            let shouldAdd = true;
            clubs.forEach(otherClub => {
                if (club.rank === otherClub.rank) return;
                if (processed.has(otherClub.rank)) return;
                
                const distance = this.calculateDistance(
                    club.lat, club.lng, 
                    otherClub.lat, otherClub.lng
                );
                
                if (distance <= this.currentRadius) {
                    // Exclude weaker club
                    if (club.rank > otherClub.rank) {
                        shouldAdd = false;
                    } else {
                        processed.add(otherClub.rank);
                    }
                }
            });
            
            if (shouldAdd) {
                result.push(club);
                processed.add(club.rank);
            }
        });
        
        return result;
    }
    
    calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // Earth radius in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }
    
    addClubMarker(club) {
        const isTopClub = club.rank <= 10;
        
        const marker = L.circleMarker([club.lat, club.lng], {
            radius: isTopClub ? 8 : 6,
            fillColor: isTopClub ? '#ffd700' : '#ff6b35',
            color: 'white',
            weight: 2,
            opacity: 1,
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
        
        // Add click event to show individual club circle
        marker.on('click', () => {
            this.showSelectedClubCircle(club);
        });
        
        marker.addTo(this.map);
        this.markers.push(marker);
    }
    
    addRadiusCircle(club) {
        const isTopClub = club.rank <= 10;
        const isTop3 = club.rank <= 3;
        
        // Color based on club ranking
        let circleColor = '#ff6b35';
        let fillOpacity = 0.1;
        
        if (isTop3) {
            circleColor = '#ffd700';
            fillOpacity = 0.15;
        } else if (isTopClub) {
            circleColor = '#ff8c42';
            fillOpacity = 0.12;
        }
        
        const circle = L.circle([club.lat, club.lng], {
            color: circleColor,
            fillColor: circleColor,
            fillOpacity: fillOpacity,
            radius: this.currentRadius * 1000, // Convert km to meters
            weight: isTop3 ? 3 : (isTopClub ? 2 : 1),
            opacity: 0.6
        });
        
        // Add same popup and click functionality as marker
        const popupContent = `
            <div style="text-align: center;">
                <h3 style="margin: 0 0 5px 0;">${club.name}</h3>
                <p style="margin: 0;"><strong>Rank:</strong> #${club.rank}</p>
                <p style="margin: 0;"><strong>Country:</strong> ${club.country}</p>
                <p style="margin: 0;"><strong>Dominance Radius:</strong> ${this.currentRadius} km</p>
            </div>
        `;
        
        circle.bindPopup(popupContent);
        
        // Add click event to show individual club circle
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
        document.getElementById('totalClubs').textContent = this.clubs.length;
        document.getElementById('visibleClubs').textContent = this.markers.length;
        document.getElementById('zoomLevel').textContent = this.map.getZoom();
    }
    
    showSelectedClubCircle(club) {
        // Remove previous selected club circle
        this.clearSelectedClubCircle();
        
        // Create new circle for selected club
        this.selectedClubCircle = L.circle([club.lat, club.lng], {
            color: '#e74c3c',
            fillColor: '#e74c3c',
            fillOpacity: 0.2,
            radius: this.currentRadius * 1000, // Convert km to meters
            weight: 3,
            opacity: 0.8,
            dashArray: '10, 10' // Dashed line to distinguish from regular circles
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

// Start app
document.addEventListener('DOMContentLoaded', () => {
    new FootballClubMap();
});