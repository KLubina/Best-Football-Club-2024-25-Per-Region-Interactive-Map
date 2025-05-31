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

        // Search functionality
        this.initSearch();

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

    initSearch() {
        const searchInput = document.getElementById('clubSearch');
        const suggestionsContainer = document.getElementById('searchSuggestions');
        let currentSelection = -1;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length < 2) {
                this.hideSuggestions();
                return;
            }
            this.showSuggestions(query);
        });

        searchInput.addEventListener('keydown', (e) => {
            const suggestions = suggestionsContainer.querySelectorAll('.search-suggestion');
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                currentSelection = Math.min(currentSelection + 1, suggestions.length - 1);
                this.highlightSuggestion(suggestions, currentSelection);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                currentSelection = Math.max(currentSelection - 1, -1);
                this.highlightSuggestion(suggestions, currentSelection);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (currentSelection >= 0 && suggestions[currentSelection]) {
                    const clubId = suggestions[currentSelection].dataset.clubId;
                    this.selectClub(parseInt(clubId));
                }
            } else if (e.key === 'Escape') {
                this.hideSuggestions();
                searchInput.blur();
            }
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
                this.hideSuggestions();
            }
        });
    }

    showSuggestions(query) {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        const matches = this.searchClubs(query);
        
        if (matches.length === 0) {
            this.hideSuggestions();
            return;
        }

        suggestionsContainer.innerHTML = '';
        matches.forEach((club, index) => {
            const suggestion = document.createElement('div');
            suggestion.className = 'search-suggestion';
            suggestion.dataset.clubId = club.rank; // Using rank as unique identifier
            
            suggestion.innerHTML = `
                <div class="suggestion-name">${club.name}</div>
                <div class="suggestion-details">
                    <span class="suggestion-rank">#${club.rank}</span> • ${club.country}
                </div>
            `;

            suggestion.addEventListener('click', () => {
                this.selectClub(club.rank);
            });

            suggestionsContainer.appendChild(suggestion);
        });

        suggestionsContainer.style.display = 'block';
    }

    hideSuggestions() {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        suggestionsContainer.style.display = 'none';
    }

    highlightSuggestion(suggestions, index) {
        suggestions.forEach((suggestion, i) => {
            suggestion.classList.toggle('highlighted', i === index);
        });
    }

    searchClubs(query) {
        const queryLower = query.toLowerCase();
        const matches = this.clubs.filter(club => 
            club.name.toLowerCase().includes(queryLower) ||
            club.country.toLowerCase().includes(queryLower)
        );

        // Sort by relevance: exact matches first, then by rank
        return matches
            .sort((a, b) => {
                const aNameLower = a.name.toLowerCase();
                const bNameLower = b.name.toLowerCase();
                
                // Exact name matches first
                if (aNameLower === queryLower && bNameLower !== queryLower) return -1;
                if (bNameLower === queryLower && aNameLower !== queryLower) return 1;
                
                // Name starts with query
                if (aNameLower.startsWith(queryLower) && !bNameLower.startsWith(queryLower)) return -1;
                if (bNameLower.startsWith(queryLower) && !aNameLower.startsWith(queryLower)) return 1;
                
                // Finally sort by rank (better rank = lower number)
                return a.rank - b.rank;
            })
            .slice(0, 8); // Limit to 8 suggestions
    }

    selectClub(clubRank) {
        const club = this.clubs.find(c => c.rank === clubRank);
        if (!club) return;

        // Hide suggestions and clear search
        this.hideSuggestions();
        document.getElementById('clubSearch').value = club.name;

        // Navigate to club
        this.navigateToClub(club);
    }

    navigateToClub(club) {
        // Zoom to club location
        this.map.setView([club.lat, club.lng], Math.max(this.map.getZoom(), 8));
        
        // Show selected club circle
        this.showSelectedClubCircle(club);
        
        // Ensure the club is visible by filtering
        this.filterAndDisplayClubs();
        
        // Find the marker for this club and open its popup
        setTimeout(() => {
            const marker = this.markers.find(m => {
                const markerLatLng = m.getLatLng();
                return Math.abs(markerLatLng.lat - club.lat) < 0.001 && 
                       Math.abs(markerLatLng.lng - club.lng) < 0.001;
            });
            
            if (marker) {
                marker.openPopup();
            }
        }, 500);
    }

    loadDemoData() {
        // Assume CLUBS_DATA is a global array (from clubs-data.js) with objects like:
        // { id, name, lat, lng, rank, country, ... }
        if (typeof CLUBS_DATA !== 'undefined' && Array.isArray(CLUBS_DATA)) {
            this.clubs = CLUBS_DATA.map(c => ({
                id: c.id,
                name: c.name,
                lat: c.lat,
                lng: c.lng,
                rank: c.rank,
                country: c.country || '',
                hidden: false
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

    getClubTier(rank) {
        if (rank <= 3) {
            return {
                name: 'Elite (Top 3)',
                radius: 12,
                fillColor: '#FFD700',      // Pure Gold
                borderColor: '#FFA500',    // Orange border
                borderWeight: 3,
                fillOpacity: 0.9
            };
        } else if (rank <= 10) {
            return {
                name: 'World Class (Top 10)',
                radius: 10,
                fillColor: '#FF8C00',      // Dark Orange
                borderColor: '#FF6347',    // Tomato border
                borderWeight: 3,
                fillOpacity: 0.85
            };
        } else if (rank <= 25) {
            return {
                name: 'Elite National (Top 25)',
                radius: 8,
                fillColor: '#FF6B35',      // Red Orange
                borderColor: '#FF4500',    // Orange Red border
                borderWeight: 2,
                fillOpacity: 0.8
            };
        } else if (rank <= 50) {
            return {
                name: 'Top National (Top 50)',
                radius: 7,
                fillColor: '#FF4500',      // Orange Red
                borderColor: '#DC143C',    // Crimson border
                borderWeight: 2,
                fillOpacity: 0.75
            };
        } else if (rank <= 100) {
            return {
                name: 'Strong National (Top 100)',
                radius: 6,
                fillColor: '#DC143C',      // Crimson
                borderColor: '#B22222',    // Fire Brick border
                borderWeight: 2,
                fillOpacity: 0.7
            };
        } else if (rank <= 250) {
            return {
                name: 'Professional (Top 250)',
                radius: 5,
                fillColor: '#B22222',      // Fire Brick
                borderColor: '#8B0000',    // Dark Red border
                borderWeight: 1,
                fillOpacity: 0.65
            };
        } else if (rank <= 500) {
            return {
                name: 'Regional (Top 500)',
                radius: 4,
                fillColor: '#8B0000',      // Dark Red
                borderColor: '#696969',    // Dim Gray border
                borderWeight: 1,
                fillOpacity: 0.6
            };
        } else if (rank <= 1000) {
            return {
                name: 'Lower League (Top 1000)',
                radius: 3,
                fillColor: '#696969',      // Dim Gray
                borderColor: '#2F4F4F',    // Dark Slate Gray border
                borderWeight: 1,
                fillOpacity: 0.55
            };
        } else {
            return {
                name: 'Amateur/Semi-Pro (1000+)',
                radius: 2,
                fillColor: '#2F4F4F',      // Dark Slate Gray
                borderColor: '#000000',    // Black border
                borderWeight: 1,
                fillOpacity: 0.5
            };
        }
    }

    addClubMarker(club) {
        // Determine club tier and styling based on rank
        const clubTier = this.getClubTier(club.rank);

        const marker = L.circleMarker([club.lat, club.lng], {
            radius: clubTier.radius,
            fillColor: clubTier.fillColor,
            color: clubTier.borderColor,
            weight: clubTier.borderWeight,
            opacity: 1,
            fillOpacity: clubTier.fillOpacity
        });

        const popupContent = `
        <div style="text-align: center;">
            <h3 style="margin: 0 0 5px 0;">${club.name}</h3>
            <p style="margin: 0;"><strong>Rank:</strong> #${club.rank}</p>
            <p style="margin: 0;"><strong>Country:</strong> ${club.country}</p>
            <p style="margin: 0;"><strong>Tier:</strong> ${clubTier.name}</p>
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
        // Get club tier for consistent styling
        const clubTier = this.getClubTier(club.rank);

        // Circle styling based on tier
        let circleOpacity = 0.4;
        let fillOpacity = 0.08;
        let weight = 1;

        if (club.rank <= 3) {
            fillOpacity = 0.15;
            weight = 3;
            circleOpacity = 0.6;
        } else if (club.rank <= 10) {
            fillOpacity = 0.12;
            weight = 2;
            circleOpacity = 0.5;
        } else if (club.rank <= 50) {
            fillOpacity = 0.10;
            weight = 2;
            circleOpacity = 0.4;
        } else if (club.rank <= 250) {
            fillOpacity = 0.08;
            weight = 1;
            circleOpacity = 0.3;
        } else {
            fillOpacity = 0.05;
            weight = 1;
            circleOpacity = 0.25;
        }

        const circle = L.circle([club.lat, club.lng], {
            color: clubTier.fillColor,
            fillColor: clubTier.fillColor,
            fillOpacity: fillOpacity,
            radius: this.currentRadius * 1000, // km → meters
            weight: weight,
            opacity: circleOpacity
        });

        const popupContent = `
        <div style="text-align: center;">
            <h3 style="margin: 0 0 5px 0;">${club.name}</h3>
            <p style="margin: 0;"><strong>Rank:</strong> #${club.rank}</p>
            <p style="margin: 0;"><strong>Country:</strong> ${club.country}</p>
            <p style="margin: 0;"><strong>Tier:</strong> ${this.getClubTier(club.rank).name}</p>
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
            color: '#e74c3c',
            fillColor: '#e74c3c',
            fillOpacity: 0.20,
            radius: this.currentRadius * 1000,
            weight: 3,
            opacity: 0.8,
            dashArray: '10, 10'
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