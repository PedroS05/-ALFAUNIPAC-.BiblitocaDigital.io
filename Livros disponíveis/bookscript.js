document.addEventListener('DOMContentLoaded', function() {
    // Dados dos livros
    const livros = [
        {
            titulo: "Homem em Reconstrução",
            autor: "Ricardo Piovan",
            categoria: "Masculinidade",
            capa: "https://m.media-amazon.com/images/I/41yI8WawOIL._SY425_.jpg"
        },
        {
            titulo: "O Demônio do Meio-Dia",
            autor: "Andrew Solomon",
            categoria: "Depressão",
            capa: "https://m.media-amazon.com/images/I/41XWr5lY2GL._SY425_.jpg"
        },
        {
            titulo: "No More Mr. Nice Guy",
            autor: "Autor numero 2",
            categoria: "Autoconhecimento",
            capa: " "
        },
        {
            titulo: "Ressignificando a Masculinidade",
            autor: "Autor numeri 4",
            categoria: "Masculinidade",
            capa: "https://m.media-amazon.com/images/I/51QnXEK3mLL._SY425_.jpg"
        },
        {
            titulo: "A Coragem de Ser Imperfeito",
            autor: "Autor numero 5",
            categoria: "Autoconhecimento",
            capa: "https://m.media-amazon.com/images/I/51K5F+MKM-L._SY425_.jpg"
        }
    ];

    const gridLivros = document.getElementById('grid-livros');
    const inputBusca = document.getElementById('busca');
    const selectCategoria = document.getElementById('categoria');

    function renderizarLivros(booklist) {
        gridLivros.innerHTML = '';
        listaLivros.forEach(book => {
            gridLivros.innerHTML += `
                <div class="card-livro">
                    <img src="${livro.capa}" alt="${livro.titulo}">
                    <div class="info-livro">
                        <h3>${livro.titulo}</h3>
                        <p class="autor">${livro.autor}</p>
                        <span class="categoria">${livro.categoria}</span>
                        <a href="#" class="btn" onclick="reservarLivro('${livro.titulo}')">Reservar</a>
                    </div>
                </div>
            `;
        });
    }

    // Filtros
    inputBusca.addEventListener('input', filtrarLivros);
    selectCategoria.addEventListener('change', filtrarLivros);

    function filtrarLivros() {
        const termoBusca = inputBusca.value.toLowerCase();
        const categoriaSelecionada = selectCategoria.value;

        const livrosFiltrados = livros.filter(livro => {
            const correspondeBusca = livro.titulo.toLowerCase().includes(termoBusca) || 
                                   livro.autor.toLowerCase().includes(termoBusca);
            const correspondeCategoria = categoriaSelecionada === 'todos' || 
                                        livro.categoria === categoriaSelecionada;
            
            return correspondeBusca && correspondeCategoria;
        });

        renderizarLivros(livrosFiltrados);
    }

    window.reservarLivro = function(titulo) {
        alert(`Livro "${titulo}" reservado com sucesso!`);
    };

    renderizarLivros(livros);
});