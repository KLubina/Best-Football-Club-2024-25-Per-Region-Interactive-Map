// managers/MapManager.js

class MapManager {
    constructor(containerId, initialView, initialZoom, eventManager) {
        this.map = null;
        this.eventManager = eventManager;
        this.init(containerId, initialView, initialZoom);
        this.setupEventListeners();
    }

    init(containerId, initialView, initialZoom) {
        // Initialize Leaflet map
        this.map = L.map(containerId).setView(initialView, initialZoom);

        // OpenStreetMap Tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(this.map);
    }

    setupEventListeners() {
        // When zooming or panning, emit events
        this.map.on('zoomend', () => {
            this.eventManager.emit('map:zoomend', this.getZoom());
        });

        this.map.on('moveend', () => {
            this.eventManager.emit('map:moveend', this.getBounds());
        });

        // Clear selected club circle when clicking on empty map space
        this.map.on('click', () => {
            this.eventManager.emit('map:click');
        });
    }

    setView(lat, lng, zoom) {
        this.map.setView([lat, lng], Math.max(this.map.getZoom(), zoom || 8));
    }

    getBounds() {
        return this.map.getBounds();
    }

    getZoom() {
        return this.map.getZoom();
    }

    addLayer(layer) {
        layer.addTo(this.map);
    }

    removeLayer(layer) {
        this.map.removeLayer(layer);
    }
}

export default MapManager;