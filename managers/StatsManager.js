// managers/StatsManager.js

class StatsManager {
    constructor(eventManager) {
        this.eventManager = eventManager;
        this.elements = {
            totalClubs: document.getElementById('totalClubs'),
            visibleClubs: document.getElementById('visibleClubs'),
            zoomLevel: document.getElementById('zoomLevel')
        };
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.eventManager.on('stats:update', (data) => {
            this.updateStats(data.totalClubs, data.visibleClubs, data.zoomLevel);
        });

        this.eventManager.on('map:zoomend', (zoomLevel) => {
            this.elements.zoomLevel.textContent = zoomLevel;
        });
    }

    updateStats(totalClubs, visibleClubs, zoomLevel) {
        this.elements.totalClubs.textContent = totalClubs;
        this.elements.visibleClubs.textContent = visibleClubs;
        this.elements.zoomLevel.textContent = zoomLevel;
    }
}

export default StatsManager;