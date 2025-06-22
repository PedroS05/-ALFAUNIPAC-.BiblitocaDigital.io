document.addEventListener('DOMContentLoaded', function() {
    const bookCover = document.querySelector('.book-cover img');
    const buttons = document.querySelectorAll('.amazon-btn, .back-btn');
    const category = document.querySelector('.category');
    const synopsisText = document.querySelector('.synopsis p');
    const bookContainer = document.querySelector('.book-detail-container');
    const navLinks = document.querySelectorAll('.nav-link');

    function gentlePageLoad() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.8s ease-out';
            document.body.style.opacity = '1';
        }, 100);
    }

    if (bookCover) {
        bookCover.addEventListener('mouseenter', () => {
            bookCover.style.transform = 'scale(1.03) rotate(0.5deg)';
            bookCover.style.boxShadow = '0 15px 30px rgba(109, 59, 71, 0.2)';
        });
        
        bookCover.addEventListener('mouseleave', () => {
            bookCover.style.transform = 'scale(1) rotate(0)';
            bookCover.style.boxShadow = '0 10px 25px rgba(109, 59, 71, 0.1)';
        });
    }

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            
            if (this.classList.contains('amazon-btn')) {
                this.style.boxShadow = '0 8px 15px rgba(232, 181, 181, 0.4)';
            } else {
                this.style.boxShadow = '0 8px 15px rgba(109, 59, 71, 0.3)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });

        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(2px) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
    });

    if (category) {
        category.addEventListener('click', function() {
            this.style.animation = 'pulse 0.8s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 800);
        });
    }

    if (synopsisText) {
        const words = synopsisText.textContent.split(' ');
        synopsisText.textContent = '';
        
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.opacity = '0';
            span.style.transition = `opacity 0.3s ease ${index * 0.05}s`;
            synopsisText.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
            }, 100);
        });
    }

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
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(232, 181, 181, 0.4); }
                70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(232, 181, 181, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(232, 181, 181, 0); }
            }
        `;
        document.head.appendChild(style);
    };

    const socialLinks = document.querySelectorAll('.social a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.color = '#e8b5b5';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
                icon.style.color = 'white';
            }
        });
    });

    navLinks.forEach(link => {
        if (link.classList.contains('active')) {
            link.style.color = '#e8b5b5';
        }
    });

    updateCopyrightYear();
    gentlePageLoad();
    addPulseAnimation();
});