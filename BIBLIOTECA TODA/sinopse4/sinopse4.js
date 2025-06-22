document.addEventListener('DOMContentLoaded', function() {
    // Efeito de hover nos botões
    const buttons = document.querySelectorAll('.amazon-btn, .back-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Efeito na capa do livro
    const bookCover = document.querySelector('.book-cover img');
    if (bookCover) {
        bookCover.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        bookCover.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Destaque para a categoria
    const category = document.querySelector('.category');
    if (category) {
        category.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    }
    
    // Atualização dinâmica do ano de copyright
    const copyright = document.querySelector('.rodape p');
    if (copyright) {
        const currentYear = new Date().getFullYear();
        copyright.textContent = `© ${currentYear} Biblioteca de Saúde Mental Masculina. Todos os direitos reservados.`;
    }
    
    // Efeito de carregamento suave
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});