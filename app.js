// app.js

import EventManager from './utils/EventManager.js';
import ClubFilter from './utils/ClubFilter.js';
import MapManager from './managers/MapManager.js';
import RadiusManager from './managers/RadiusManager.js';
import StatsManager from './managers/StatsManager.js';
import SearchController from './controllers/SearchController.js';
import ClubRenderer from './renderers/ClubRenderer.js';

/**
 * Main application class for the Best Football Club Per Region Interactive Map.
 * Manages initialization, event handling, data loading, filtering, rendering, and navigation.
 *
 * @class
 * @classdesc
 * Handles the orchestration of map display, club filtering, search, and UI interactions.
 *
 * @property {EventManager} eventManager - Handles custom events throughout the app.
 * @property {MapManager} mapManager - Manages the Leaflet map instance and map-related actions.
 * @property {RadiusManager} radiusManager - Manages radius-based filtering and display.
 * @property {StatsManager} statsManager - Handles statistics display and updates.
 * @property {ClubRenderer} clubRenderer - Responsible for rendering clubs on the map.
 * @property {ClubFilter} clubFilter - Provides filtering logic for clubs.
 * @property {SearchController|null} searchController - Manages club search functionality.
 * @property {Array<Object>} clubs - Array of club data objects.
 *
 * @constructor
 */
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

    /**
     * Initializes the application by setting up event listeners, loading demo data,
     * and configuring mobile navigation.
     */
    init() {
        this.setupEventListeners();
        this.loadDemoData();
        this.setupMobileNavigation();
    }

    /**
     * Sets up event listeners for various application events.
     * 
     * Listens for:
     * - 'radius:changed': Updates the display when the radius changes.
     * - 'radius:toggleCircles': Updates the display when circle visibility is toggled.
     * - 'map:moveend': Updates the display when the map movement ends.
     * - 'search:clubSelected': Navigates to the selected club from the search.
     */
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

    /**
     * Loads demo club data from the global CLUBS_DATA array, initializes the search controller,
     * updates the total clubs count in the renderer, and triggers the initial rendering and statistics update.
     * Assumes CLUBS_DATA is an array of club objects with properties such as id, name, lat, lng, rank, and country.
     */
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

    /**
     * Filters and displays football clubs on the map based on current map bounds and a radius filter.
     *
     * Steps:
     * 1. Determines which clubs are within the current map bounds.
     * 2. Applies a radius-based filter to the visible clubs.
     * 3. Renders the filtered clubs on the map.
     *
     * @returns {void}
     */
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

    /**
     * Navigates the map to the specified club's location, highlights the club,
     * ensures it is visible by applying filters, and opens the club's marker popup.
     *
     * @param {Object} club - The club object containing location and identifying information.
     * @param {number} club.lat - The latitude of the club's location.
     * @param {number} club.lng - The longitude of the club's location.
     */
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

    /**
     * Sets up mobile navigation by toggling the visibility of navigation controls
     * when the navigation toggle button is clicked. This function adds a click event
     * listener to the element with the class 'nav-toggle', which toggles the 'open'
     * class on the element with the class 'controls'.
     */
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