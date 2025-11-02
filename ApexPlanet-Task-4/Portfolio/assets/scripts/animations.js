// Animation and interaction effects
export class AnimationManager {
    constructor() {
        this.initializeSpotlightCards();
        this.initializeScrollReveal();
    }

    initializeSpotlightCards() {
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouseX', `${x}px`);
                card.style.setProperty('--mouseY', `${y}px`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.removeProperty('--mouseX');
                card.style.removeProperty('--mouseY');
            });
        });
    }

    initializeScrollReveal() {
        const elements = document.querySelectorAll('.reveal:not(.observed)');
        if (!elements.length) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => {
            element.classList.add('observed');
            observer.observe(element);
        });
    }

    // Utility method to add reveal animation to dynamically created elements
    observeNewElements() {
        this.initializeScrollReveal();
    }
}





