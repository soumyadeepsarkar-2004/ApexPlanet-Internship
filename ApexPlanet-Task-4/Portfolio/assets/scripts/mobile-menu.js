// Mobile menu functionality
export class MobileMenuManager {
    constructor() {
        this.mobileMenuButton = null;
        this.mobileMenu = null;

        this.initialize();
    }

    async initialize() {
        try {
            const [button, menu] = await Promise.all([
                this.waitForElement('mobile-menu-button'),
                this.waitForElement('mobile-menu')
            ]);

            this.mobileMenuButton = button;
            this.mobileMenu = menu;

            this.initializeEventListeners();
        } catch (error) {
            console.error('MobileMenuManager initialization failed:', error);
        }
    }

    waitForElement(id) {
        return new Promise((resolve) => {
            const existingElement = document.getElementById(id);
            if (existingElement) {
                return resolve(existingElement);
            }

            const observer = new MutationObserver(() => {
                const element = document.getElementById(id);
                if (element) {
                    observer.disconnect();
                    resolve(element);
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });
        });
    }

    initializeEventListeners() {
        if (!this.mobileMenuButton || !this.mobileMenu) {
            console.warn('MobileMenuManager listeners skipped: target elements missing');
            return;
        }

        this.mobileMenuButton.addEventListener('click', () => {
            this.mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.mobileMenuButton.contains(e.target) && 
                !this.mobileMenu.contains(e.target)) {
                this.mobileMenu.classList.add('hidden');
            }
        });

        // Close mobile menu when pressing escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.mobileMenu.classList.add('hidden');
            }
        });
    }
}





