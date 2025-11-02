// Main application entry point
import { NavigationManager } from './navigation.js';
import { MobileMenuManager } from './mobile-menu.js';
import { TimeClockManager } from './time-clock.js';
import { AnimationManager } from './animations.js';
import { detailsData } from '../../data/content.js';

// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Initialize application components
class PortfolioApp {
    constructor() {
        this.navigationManager = new NavigationManager();
        this.mobileMenuManager = new MobileMenuManager();
        this.timeClockManager = new TimeClockManager();
        this.animationManager = new AnimationManager();
        
        // Make data globally available for onclick handlers
        window.detailsData = detailsData;
        window.navigationManager = this.navigationManager;
        window.animationManager = this.animationManager;
        
        this.initializeApp();
    }

    initializeApp() {
        console.log('Portfolio application initialized successfully');
        
        // Add any additional initialization logic here
        this.setupGlobalEventListeners();
    }

    setupGlobalEventListeners() {
        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                // Page became visible, refresh any time-sensitive data
                if (this.timeClockManager) {
                    this.timeClockManager.updateTime();
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', this.debounce(() => {
            // Handle responsive adjustments if needed
            this.animationManager.observeNewElements();
        }, 250));
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Export for potential use in other modules
export { PortfolioApp };





