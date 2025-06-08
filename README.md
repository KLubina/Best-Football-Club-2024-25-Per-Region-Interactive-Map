# ⚽ Best Football Club Per Region - Interactive Map

An interactive world map that visualizes the best football clubs per region and displays their dominance areas.

## Dominance Areas View
![Dominance areas with radius circles](0-README-components\football-map-radius-preview.png)
*Shows club dominance areas with configurable radius (here: 169km)*

## Global Overview
![All clubs worldwide](0-README-components\football-map-general-preview.png)
*Complete world map with 2999 clubs without dominance circles*

## 🚀 Live Demo

```
https://raw.githack.com/KLubina/Best-Football-Club-Per-Region-Interactive-Map/main/index.html
```

## 🛠️ Technical Implementation

### Architecture
```
├── app.js                 # Main App Controller
├── index.html            # Entry Point
├── controllers/
│   └── SearchController.js    # Search Functionality
├── data/
│   └── clubs-data.js         # Club Database
├── managers/
│   ├── MapManager.js         # Leaflet Map Management
│   ├── RadiusManager.js      # Dominance Circle Logic
│   └── StatsManager.js       # Statistics Updates
├── renderers/
│   └── ClubRenderer.js       # Club Marker Rendering
├── styles/                   # CSS Styling
└── utils/                    # Utility Functions
```

### Technologies Used
- **Leaflet.js** - Interactive mapping library
- **ES6 Modules** - Modular JavaScript architecture
- **Responsive CSS** - Mobile-first design
- **OpenStreetMap** - Map data
- **Event-Driven Architecture** - Loosely coupled components

## 📊 Data Structure

The club data follows this schema:
```javascript
{
  id: "unique_id",
  name: "Club Name",
  lat: 52.5200,      // Latitude
  lng: 13.4050,      // Longitude
  rank: 1,           // World ranking
  country: "Germany",
  tier: "top3"       // Calculated tier
}
```

## 🔧 Configuration

### Radius Settings
```javascript
// Configurable in RadiusManager.js
const DEFAULT_RADIUS = 0;        // Default radius
const MAX_RADIUS = 20000;        // Maximum radius (km)
const RADIUS_STEP = 1;           // Slider steps
```

### Map Configuration
```javascript
// In MapManager.js
const DEFAULT_CENTER = [20, 0];  // World center
const DEFAULT_ZOOM = 2;          // Start zoom
const MAX_ZOOM = 18;             // Maximum zoom
```