// managers/RadiusManager.js

class RadiusManager {
    constructor(mapManager, eventManager) {
        this.mapManager = mapManager;
        this.eventManager = eventManager;
        this.circles = [];
        this.selectedClubCircle = null;
        this.currentRadius = 0;
        this.showRadiusCircles = true;
        this.setupEventListeners();
    }

    setupEventListeners() {
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
            this.eventManager.emit('radius:toggleCircles', this.showRadiusCircles);
        });

        // Listen for map clicks to clear selected circle
        this.eventManager.on('map:click', () => {
            this.clearSelectedClubCircle();
        });
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

        this.eventManager.emit('radius:changed', this.currentRadius);
    }

    createRadiusCircle(club, clubTier) {
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
            <p style="margin: 0;"><strong>Tier:</strong> ${clubTier.name}</p>
            <p style="margin: 0;"><strong>Dominance Radius:</strong> ${this.currentRadius} km</p>
        </div>
        `;

        circle.bindPopup(popupContent);
        circle.on('click', () => {
            this.showSelectedClubCircle(club);
        });

        this.mapManager.addLayer(circle);
        this.circles.push(circle);
        return circle;
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

        this.mapManager.addLayer(this.selectedClubCircle);
    }

    clearSelectedClubCircle() {
        if (this.selectedClubCircle) {
            this.mapManager.removeLayer(this.selectedClubCircle);
            this.selectedClubCircle = null;
        }
    }

    clearCircles() {
        this.circles.forEach(circle => {
            this.mapManager.removeLayer(circle);
        });
        this.circles = [];
    }

    getCurrentRadius() {
        return this.currentRadius;
    }

    shouldShowCircles() {
        return this.showRadiusCircles;
    }
}

export default RadiusManager;