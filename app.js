// app.js

import EventManager from './utils/EventManager.js';
import ClubFilter from './utils/ClubFilter.js';
import MapManager from './managers/MapManager.js';
import RadiusManager from './managers/RadiusManager.js';
import StatsManager from './managers/StatsManager.js';
import SearchController from './controllers/SearchController.js';
import ClubRenderer from './renderers/ClubRenderer.js';

class FootballClubApp {
    constructor() {
        this.eventManager = new EventManager();
        this.mapManager = new MapManager('map', [20, 0], 2, this.eventManager);
        this.radiusManager = new RadiusManager(this.mapManager, this.eventManager);
        this.statsManager = new StatsManager(this.eventManager);
        this.clubRenderer = new ClubRenderer(this.mapManager, this.radiusManager, this.eventManager);
        this.clubFilter = new ClubFilter();
        this.searchController = null; // Will be initialized after loading data
        
        this.clubs = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadDemoData();
        this.setupMobileNavigation();
    }

    setupEventListeners() {
        // Listen for radius changes to update display
        this.eventManager.on('radius:changed', (newRadius) => {
            this.filterAndDisplayClubs();
        });

        // Listen for circle toggle
        this.eventManager.on('radius:toggleCircles', (showCircles) => {
            this.filterAndDisplayClubs();
        });

        // Listen for map movements to update display
        this.eventManager.on('map:moveend', (bounds) => {
            this.filterAndDisplayClubs();
        });

        // Listen for club selection from search
        this.eventManager.on('search:clubSelected', (club) => {
            this.navigateToClub(club);
        });
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

        // Initialize search controller now that we have clubs
        this.searchController = new SearchController(this.clubs, this.eventManager);
        
        // Set total clubs count in renderer
        this.clubRenderer.setTotalClubsCount(this.clubs.length);

        // Initial rendering & stats
        this.filterAndDisplayClubs();
    }

    filterAndDisplayClubs() {
        // 1. Determine which clubs are inside the current map bounds
        const bounds = this.mapManager.getBounds();
        const visibleClubs = this.clubFilter.filterByBounds(this.clubs, bounds);

        // 2. Apply the radius-based filter
        const currentRadius = this.radiusManager.getCurrentRadius();
        const filteredClubs = this.clubFilter.filterByRadius(visibleClubs, currentRadius);

        // 3. Render clubs
        this.clubRenderer.renderClubs(filteredClubs);
    }

    navigateToClub(club) {
        // Zoom to club location
        this.mapManager.setView(club.lat, club.lng, 8);
        
        // Show selected club circle
        this.radiusManager.showSelectedClubCircle(club);
        
        // Ensure the club is visible by filtering
        this.filterAndDisplayClubs();
        
        // Find the marker for this club and open its popup
        setTimeout(() => {
            const marker = this.clubRenderer.findMarkerForClub(club);
            if (marker) {
                marker.openPopup();
            }
        }, 500);
    }

    setupMobileNavigation() {
        // Toggle navigation on mobile
        const navToggle = document.querySelector('.nav-toggle');
        const controls = document.querySelector('.controls');
        
        if (navToggle && controls) {
            navToggle.addEventListener('click', () => {
                controls.classList.toggle('open');
            });
        }
    }
}

// Instantiate the app once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new FootballClubApp();
});