document.addEventListener('DOMContentLoaded', function() {
    const bookCover = document.querySelector('.book-cover img');
    const amazonBtn = document.querySelector('.amazon-btn');
    const category = document.querySelector('.category');
    const metaItems = document.querySelectorAll('.meta-item');
    const navLinks = document.querySelectorAll('.nav-link');
    const socialLink = document.querySelector('.social a');

    function gentleLoad() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.6s ease-out';
            document.body.style.opacity = '1';
        }, 100);
    }

    if (bookCover) {
        bookCover.addEventListener('mouseenter', () => {
            bookCover.style.transform = 'scale(1.03) rotate(1deg)';
            bookCover.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
            bookCover.style.transition = 'all 0.4s ease';
        });
        
        bookCover.addEventListener('mouseleave', () => {
            bookCover.style.transform = 'scale(1) rotate(0)';
            bookCover.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
    }

    if (amazonBtn) {
        amazonBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(255, 153, 0, 0.4)';
        });
        
        amazonBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
        });

        amazonBtn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px) scale(0.98)';
        });
        
        amazonBtn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    }

    if (category) {
        category.addEventListener('click', function() {
            this.style.animation = 'pulse 0.8s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 800);
        });
    }

    metaItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500);
    });

    const updateCopyrightYear = () => {
        const copyrightElement = document.querySelector('.rodape p');
        if (copyrightElement) {
            const currentYear = new Date().getFullYear();
            copyrightElement.textContent = `© ${currentYear} Biblioteca de Saúde Mental Masculina. Todos os direitos reservados.`;
        }
    };

    const addPulseAnimation = () => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 153, 0, 0.4); }
                70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 153, 0, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 153, 0, 0); }
            }
        `;
        document.head.appendChild(style);
    };

    if (socialLink) {
        const icon = socialLink.querySelector('i');
        
        socialLink.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.color = '#4fc3f7';
            icon.style.transition = 'all 0.3s ease';
        });
        
        socialLink.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1) rotate(0)';
            icon.style.color = 'white';
        });
    }

    navLinks.forEach(link => {
        if (link.classList.contains('active')) {
            link.style.color = '#4fc3f7';
        }
    });

    const addOrbitEffect = () => {
        const orbit = document.createElement('div');
        orbit.className = 'orbit-effect';
        orbit.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(255, 153, 0, 0.6);
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: -1;
        `;
        document.body.appendChild(orbit);
        
        document.addEventListener('mousemove', (e) => {
            orbit.style.left = `${e.pageX}px`;
            orbit.style.top = `${e.pageY}px`;
        });
        
        setTimeout(() => {
            orbit.style.transition = 'width 0.5s ease, height 0.5s ease, opacity 0.5s ease';
            orbit.style.width = '30px';
            orbit.style.height = '30px';
            orbit.style.opacity = '0';
            
            setTimeout(() => {
                orbit.remove();
            }, 500);
        }, 2000);
    };

    updateCopyrightYear();
    gentleLoad();
    addPulseAnimation();
    setTimeout(addOrbitEffect, 1000); 
});