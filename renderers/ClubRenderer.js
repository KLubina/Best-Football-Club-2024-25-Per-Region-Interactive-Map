// renderers/ClubRenderer.js

class ClubRenderer {
    constructor(mapManager, radiusManager, eventManager) {
        this.mapManager = mapManager;
        this.radiusManager = radiusManager;
        this.eventManager = eventManager;
        this.markers = [];
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

    createPopupContent(club, clubTier) {
        return `
        <div style="text-align: center;">
            <h3 style="margin: 0 0 5px 0;">${club.name}</h3>
            <p style="margin: 0;"><strong>Rank:</strong> #${club.rank}</p>
            <p style="margin: 0;"><strong>Country:</strong> ${club.country}</p>
            <p style="margin: 0;"><strong>Tier:</strong> ${clubTier.name}</p>
            <p style="margin: 0;"><strong>Dominance Radius:</strong> ${this.radiusManager.getCurrentRadius()} km</p>
        </div>
        `;
    }

    createMarker(club) {
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

        const popupContent = this.createPopupContent(club, clubTier);
        marker.bindPopup(popupContent);

        // Clicking a marker shows a dashed circle around that specific club
        marker.on('click', () => {
            this.radiusManager.showSelectedClubCircle(club);
        });

        this.mapManager.addLayer(marker);
        this.markers.push(marker);

        return { marker, clubTier };
    }

    renderClubs(clubs) {
        // Clear existing markers
        this.clearMarkers();

        // Add marker + optional circle for each club
        clubs.forEach(club => {
            const { marker, clubTier } = this.createMarker(club);
            
            if (this.radiusManager.shouldShowCircles()) {
                this.radiusManager.createRadiusCircle(club, clubTier);
            }
        });

        // Emit stats update
        this.eventManager.emit('stats:update', {
            totalClubs: this.getTotalClubsCount(),
            visibleClubs: this.markers.length,
            zoomLevel: this.mapManager.getZoom()
        });
    }

    clearMarkers() {
        this.markers.forEach(marker => {
            this.mapManager.removeLayer(marker);
        });
        this.markers = [];
        this.radiusManager.clearCircles();
    }

    findMarkerForClub(club) {
        return this.markers.find(m => {
            const markerLatLng = m.getLatLng();
            return Math.abs(markerLatLng.lat - club.lat) < 0.001 && 
                   Math.abs(markerLatLng.lng - club.lng) < 0.001;
        });
    }

    getTotalClubsCount() {
        // This will be set by the main app
        return this.totalClubsCount || 0;
    }

    setTotalClubsCount(count) {
        this.totalClubsCount = count;
    }
}

export default ClubRenderer;