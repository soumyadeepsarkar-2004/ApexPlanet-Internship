// Navigation functionality
export class NavigationManager {
    constructor() {
        this.mainPage = document.getElementById('main-page');
        this.detailPage = null;
        this.detailContent = null;
        this.backButton = null;
        this.homeLink = null;

        this.initialize();
    }

    async initialize() {
        try {
            const [detailPage, detailContent, backButton, homeLink] = await Promise.all([
                this.waitForElement('detail-page'),
                this.waitForElement('detail-content'),
                this.waitForElement('back-button'),
                this.waitForElement('home-link')
            ]);

            this.detailPage = detailPage;
            this.detailContent = detailContent;
            this.backButton = backButton;
            this.homeLink = homeLink;

            this.initializeEventListeners();
        } catch (error) {
            console.error('NavigationManager initialization failed:', error);
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
        if (!this.backButton || !this.homeLink) {
            console.warn('NavigationManager listeners skipped: target elements missing');
            return;
        }

        this.backButton.addEventListener('click', () => this.hideDetail());
        this.homeLink.addEventListener('click', (e) => this.handleHomeLinkClick(e));
    }

    showDetail(type, key, detailsData) {
        if (!this.detailContent || !this.detailPage) {
            console.warn('Detail view is not ready yet');
            return;
        }

        const item = detailsData[type][key];
        if (!item) return;

        const tagsHtml = item.tags.map(tag => 
            `<span class="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">${tag}</span>`
        ).join(' ');

        this.detailContent.innerHTML = `
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl md:text-5xl font-extrabold text-white">${item.title}</h1>
                <p class="text-sky-400 mt-2 text-lg">${item.subtitle}</p>
                <div class="flex flex-wrap gap-2 my-6">${tagsHtml}</div>
                <div class="prose prose-invert prose-lg max-w-none text-gray-300 space-y-4">
                    ${item.content}
                </div>
            </div>
        `;

        this.mainPage.classList.add('hidden');
        this.detailPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    hideDetail() {
        this.detailPage.classList.add('hidden');
        this.mainPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    handleHomeLinkClick(e) {
        if (!this.mainPage.classList.contains('hidden')) {
            return;
        }
        e.preventDefault();
        this.hideDetail();
    }
}

// Make showDetail globally available for onclick handlers
window.showDetail = function(type, key) {
    // This will be initialized when the navigation manager is created
    if (window.navigationManager) {
        window.navigationManager.showDetail(type, key, window.detailsData);
    }
};





