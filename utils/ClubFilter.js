// utils/ClubFilter.js

import DistanceCalculator from './DistanceCalculator.js';

class ClubFilter {
    filterByBounds(clubs, bounds) {
        return clubs.filter(club =>
            bounds.contains([club.lat, club.lng])
        );
    }

    filterByRadius(clubsSubset, currentRadius) {
        // For each club A in clubsSubset, check if there is any stronger club B
        // (i.e. B.rank < A.rank) within currentRadius. If yes, exclude A.
        // Otherwise keep A.
        const result = [];

        clubsSubset.forEach(clubA => {
            let isDominated = false;

            for (let clubB of clubsSubset) {
                if (clubB.rank < clubA.rank) {
                    const dist = DistanceCalculator.calculateDistance(
                        clubA.lat, clubA.lng,
                        clubB.lat, clubB.lng
                    );
                    if (dist <= currentRadius) {
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

    searchClubs(clubs, query) {
        const queryLower = query.toLowerCase();
        const matches = clubs.filter(club => 
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
}

export default ClubFilter;