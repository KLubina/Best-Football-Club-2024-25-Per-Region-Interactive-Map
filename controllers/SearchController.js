// controllers/SearchController.js

import ClubFilter from '../utils/ClubFilter.js';

class SearchController {
    constructor(clubs, eventManager) {
        this.clubs = clubs;
        this.eventManager = eventManager;
        this.clubFilter = new ClubFilter();
        this.currentSelection = -1;
        this.initSearch();
    }

    initSearch() {
        const searchInput = document.getElementById('clubSearch');
        const suggestionsContainer = document.getElementById('searchSuggestions');

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
                this.currentSelection = Math.min(this.currentSelection + 1, suggestions.length - 1);
                this.highlightSuggestion(suggestions, this.currentSelection);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.currentSelection = Math.max(this.currentSelection - 1, -1);
                this.highlightSuggestion(suggestions, this.currentSelection);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (this.currentSelection >= 0 && suggestions[this.currentSelection]) {
                    const clubId = suggestions[this.currentSelection].dataset.clubId;
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
        const matches = this.clubFilter.searchClubs(this.clubs, query);
        
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

    selectClub(clubRank) {
        const club = this.clubs.find(c => c.rank === clubRank);
        if (!club) return;

        // Hide suggestions and clear search
        this.hideSuggestions();
        document.getElementById('clubSearch').value = club.name;

        // Emit event for navigation
        this.eventManager.emit('search:clubSelected', club);
    }

    updateClubs(clubs) {
        this.clubs = clubs;
    }
}

export default SearchController;