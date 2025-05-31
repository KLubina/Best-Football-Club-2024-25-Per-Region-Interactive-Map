// utils/EventManager.js

class EventManager {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    off(event, callback) {
        if (!this.events[event]) return;
        
        this.events[event] = this.events[event].filter(cb => cb !== callback);
        if (this.events[event].length === 0) {
            delete this.events[event];
        }
    }

    emit(event, data) {
        if (!this.events[event]) return;
        
        this.events[event].forEach(callback => {
            try {
                callback(data);
            } catch (error) {
                console.error(`Error in event handler for ${event}:`, error);
            }
        });
    }
}

export default EventManager;