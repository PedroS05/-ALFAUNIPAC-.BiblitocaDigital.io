document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('book-container');
    const bookItems = document.querySelectorAll('.book-item');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categoryFilter = document.getElementById('category-filter');
    const navLinks = document.querySelectorAll('.nav-link');


const booksData = {
    1: {
        title: "Homens são de Marte, Mulheres são de Vênus",
        author: "John Gray",
        category: "Relacionamentos",
        cover: "https://m.media-amazon.com/images/I/712ybwJH-XL._SL1500_.jpg",
        synopsis: "Este clássico explora as diferenças fundamentais entre homens e mulheres...",
        publisher: "Ediouro",
        publishDate: "01/01/1992",
        releaseDate: "15/05/1993",
        pages: 286,
        readingTime: "6-8 horas",
        amazonLink: "https://www.amazon.com.br/Homens-s%C3%A3o-Marte-Mulheres-V%C3%AAnus/dp/8500015941"
    },
    2: {
        title: "A Coragem de Ser Imperfeito",
        author: "Brené Brown",
        category: "Autoajuda",
        cover: "https://m.media-amazon.com/images/I/61rRRbfINJL._SL1006_.jpg",
        synopsis: "Brené Brown explora o conceito de vulnerabilidade como fonte de força...",
        publisher: "Sextante",
        publishDate: "2012",
        pages: 208,
        readingTime: "4-6 horas",
        amazonLink: "https://www.amazon.com.br/Coragem-Ser-Imperfeito-Bren%C3%A9-Brown/dp/8543102639"
    },
    3: {
        title: "O Poder do Agora",
        author: "Eckhart Tolle",
        category: "Desenvolvimento Pessoal",
        cover: "https://m.media-amazon.com/images/I/71sh8JtiZbL._SY466_.jpg",
        synopsis: "Eckhart Tolle oferece um guia transformador para o despertar espiritual...",
        publisher: "Sextante",
        publishDate: "1997",
        pages: 224,
        readingTime: "5-7 horas",
        amazonLink: "https://www.amazon.com.br/Poder-Agora-Eckhart-Tolle/dp/8543102396"
    },
    4: {
        title: "Ansiedade - Como Enfrentar o Mal do Século",
        author: "Augusto Cury",
        category: "Saúde Mental",
        cover: "https://m.media-amazon.com/images/I/51MZJMQhzIL.jpg",
        synopsis: "Neste livro, Augusto Cury aborda um dos maiores desafios da atualidade...",
        publisher: "Sextante",
        publishDate: "01/01/2013",
        pages: 192,
        readingTime: "4-6 horas",
        amazonLink: "https://www.amazon.com.br/Ansiedade-como-enfrentar-mal-s%C3%A9culo/dp/8543103821"
    },
    5: {
        title: "O Homem em Busca de Sentido",
        author: "Viktor Frankl",
        category: "Psicologia",
        cover: "https://m.media-amazon.com/images/I/51c+CkGCk7L.jpg",
        synopsis: "Neste clássico da psicologia, Viktor Frankl narra sua experiência nos campos...",
        publisher: "Editora Vozes",
        publishDate: "1946",
        pages: 176,
        readingTime: "5-7 horas",
        amazonLink: "https://www.amazon.com.br/Homem-Busca-Sentido-Viktor-Frankl/dp/8532609563"
    },
    6: {
        title: "Mindset: A Nova Psicologia do Sucesso",
        author: "Carol Dweck",
        category: "Desenvolvimento Pessoal",
        cover: "https://m.media-amazon.com/images/I/71Ils+Co9fL._SL1500_.jpg",
        synopsis: "Carol Dweck revoluciona nossa compreensão sobre motivação e realização...",
        publisher: "Objetiva",
        publishDate: "2006",
        pages: 312,
        readingTime: "6-8 horas",
        amazonLink: "https://www.amazon.com.br/Mindset-psicologia-sucesso-Carol-Dweck/dp/8547000244"
    }
};

function loadBookData() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    const bookData = booksData[bookId];

    if (bookData) {
        document.title = `Sinopse - ${bookData.title}`;
        
        document.querySelector('.book-cover img').src = bookData.cover;
        document.querySelector('.book-cover img').alt = `Capa do livro ${bookData.title}`;
        document.querySelector('h1').textContent = bookData.title;
        document.querySelector('h2').textContent = bookData.author;
        document.querySelector('.category').textContent = bookData.category;
        document.querySelector('.synopsis p').textContent = bookData.synopsis;
        document.querySelector('.amazon-btn').href = bookData.amazonLink;
        
        document.querySelector('.meta-item:nth-child(1) span:last-child').textContent = bookData.publisher;
        document.querySelector('.meta-item:nth-child(2) span:last-child').textContent = bookData.publishDate;
        if (bookData.releaseDate) {
            document.querySelector('.meta-item:nth-child(3) span:last-child').textContent = bookData.releaseDate;
        }
        document.querySelector('.meta-item:nth-child(4) span:last-child').textContent = bookData.pages;
        document.querySelector('.meta-item:nth-child(5) span:last-child').textContent = bookData.readingTime;
    }
}

if (window.location.pathname.includes('sinopse.html')) {
    loadBookData();
}
localStorage.setItem('booksData', JSON.stringify(booksData));
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        
        bookItems.forEach(book => {
            const title = book.dataset.title.toLowerCase();
            const author = book.dataset.author.toLowerCase();
            const category = book.dataset.category;
            
            const matchesSearch = title.includes(searchTerm) || author.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            
            if (matchesSearch && matchesCategory) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    }

    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop();
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    searchBtn.addEventListener('click', filterBooks);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') filterBooks();
    });
    categoryFilter.addEventListener('change', filterBooks);

    setActiveNavLink();

    localStorage.setItem('booksData', JSON.stringify(booksData));
});