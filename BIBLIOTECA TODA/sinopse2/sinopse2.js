document.addEventListener('DOMContentLoaded', function() {
    // Efeitos interativos
    const bookCover = document.querySelector('.book-cover img');
    const buttons = document.querySelectorAll('.amazon-btn, .back-btn');
    const category = document.querySelector('.category');
    
    // Efeito na capa do livro
    if (bookCover) {
        bookCover.addEventListener('mouseenter', () => {
            bookCover.style.transform = 'scale(1.05)';
            bookCover.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        bookCover.addEventListener('mouseleave', () => {
            bookCover.style.transform = 'scale(1)';
            bookCover.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
    }
    
    // Efeitos nos botões
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            if (this.classList.contains('amazon-btn')) {
                this.style.boxShadow = '0 8px 15px rgba(255, 158, 27, 0.4)';
            } else {
                this.style.boxShadow = '0 8px 15px rgba(44, 62, 80, 0.3)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        // Efeito de clique
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
    });
    
    // Efeito na categoria
    if (category) {
        category.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    }
    
    // Atualização dinâmica do ano de copyright
    const updateCopyrightYear = () => {
        const copyrightElement = document.querySelector('.rodape p');
        if (copyrightElement) {
            const currentYear = new Date().getFullYear();
            copyrightElement.textContent = `© ${currentYear} Biblioteca de Saúde Mental Masculina. Todos os direitos reservados.`;
        }
    };
    
    // Carregamento suave da página
    const fadeInPage = () => {
        document.body.style.opacity = '0';
        document.body.style.display = 'block';
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.8s ease-out';
            document.body.style.opacity = '1';
        }, 50);
    };
    
    // Adicionando animação de pulso via JavaScript
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.4); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(46, 125, 50, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(46, 125, 50, 0); }
        }
    `;
    document.head.appendChild(style);
    
    // Efeito de meditação (para combinar com o tema do livro)
    const addMeditationEffect = () => {
        const meditationEffect = document.createElement('div');
        meditationEffect.className = 'meditation-effect';
        document.body.appendChild(meditationEffect);
        
        setTimeout(() => {
            meditationEffect.style.width = '100%';
            meditationEffect.style.height = '100%';
            meditationEffect.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            meditationEffect.remove();
        }, 1000);
    };
    
    // Inicialização
    updateCopyrightYear();
    fadeInPage();
    
    // Efeito especial ao carregar a página (combina com o tema "O Poder do Agora")
    setTimeout(addMeditationEffect, 500);
    
    // Feedback visual para links sociais
    const socialLinks = document.querySelectorAll('.social a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.color = '#4fc3f7';
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
    
    // Efeito de respiração para o container principal (inspirado no tema mindfulness)
    const bookContainer = document.querySelector('.book-detail-container');
    if (bookContainer) {
        setInterval(() => {
            bookContainer.style.transform = 'scale(1.005)';
            setTimeout(() => {
                bookContainer.style.transform = 'scale(1)';
            }, 1000);
        }, 3000);
    }
});