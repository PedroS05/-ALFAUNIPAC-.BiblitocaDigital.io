document.addEventListener('DOMContentLoaded', function() {
    // 1. Efeitos de Calma e Controle para o tema de Ansiedade
    const bookCover = document.querySelector('.book-cover img');
    const buttons = document.querySelectorAll('.amazon-btn, .back-btn');
    const category = document.querySelector('.category');
    const synopsisText = document.querySelector('.synopsis p');
    const bookContainer = document.querySelector('.book-detail-container');

    // 2. Efeito de respiração controlada (inspirado em técnicas para ansiedade)
    function breathingEffect() {
        if (bookContainer) {
            bookContainer.style.transition = 'transform 5s ease-in-out';
            bookContainer.style.transform = 'scale(0.99)';
            
            setTimeout(() => {
                bookContainer.style.transform = 'scale(1)';
            }, 5000);
        }
    }
    
    // Executa a cada 10 segundos
    setInterval(breathingEffect, 10000);
    breathingEffect(); // Inicia imediatamente

    // 3. Efeitos interativos na capa do livro
    if (bookCover) {
        bookCover.addEventListener('mouseenter', () => {
            bookCover.style.transform = 'scale(1.03)';
            bookCover.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
            bookCover.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        bookCover.addEventListener('mouseleave', () => {
            bookCover.style.transform = 'scale(1)';
            bookCover.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    }

    // 4. Efeitos nos botões com feedback visual suave
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.transition = 'all 0.3s ease';
            
            if (this.classList.contains('amazon-btn')) {
                this.style.boxShadow = '0 5px 15px rgba(255, 158, 27, 0.3)';
            } else {
                this.style.boxShadow = '0 5px 15px rgba(26, 62, 114, 0.2)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });

        // Efeito ao clicar
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
    });

    // 5. Efeito na categoria (saúde mental)
    if (category) {
        category.addEventListener('click', function() {
            this.style.animation = 'pulse 0.8s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 800);
        });
    }

    // 6. Atualização dinâmica do ano de copyright
    const updateCopyrightYear = () => {
        const copyrightElement = document.querySelector('.rodape p');
        if (copyrightElement) {
            const currentYear = new Date().getFullYear();
            copyrightElement.textContent = `© ${currentYear} Biblioteca de Saúde Mental Masculina. Todos os direitos reservados.`;
        }
    };

    // 7. Carregamento suave da página com efeito calmante
    const calmPageLoad = () => {
        document.body.style.opacity = '0';
        document.body.style.display = 'block';
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 1s ease-out';
            document.body.style.opacity = '1';
        }, 100);
    };

    // 8. Adicionando animação de pulso via JavaScript
    const addPulseAnimation = () => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    };

    // 9. Efeito de destaque progressivo no texto da sinopse
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

    // 10. Efeito especial para o link do Instagram
    const socialLink = document.querySelector('.social a');
    if (socialLink) {
        const icon = socialLink.querySelector('i');
        
        socialLink.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.2)';
            icon.style.color = '#4fc3f7';
            icon.style.transition = 'all 0.3s ease';
        });
        
        socialLink.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1)';
            icon.style.color = 'white';
        });
    }

    // Inicialização
    updateCopyrightYear();
    calmPageLoad();
    addPulseAnimation();
});