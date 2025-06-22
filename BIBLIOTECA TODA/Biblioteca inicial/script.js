document.addEventListener('DOMContentLoaded', function() {
    const carrosseis = document.querySelectorAll('.carrossel');
    const botoesAnterior = document.querySelectorAll('.anterior');
    const botoesProximo = document.querySelectorAll('.proximo');

    carrosseis.forEach((carrossel, index) => {
        const larguraItem = 180; // Largura aproximada de cada item do carrossel
        const scrollAmount = larguraItem * 3; // Quantidade de rolagem (3 itens)

        botoesProximo[index].addEventListener('click', () => {
            carrossel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        botoesAnterior[index].addEventListener('click', () => {
            carrossel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        carrossel.addEventListener('scroll', () => {
            const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
            
            botoesAnterior[index].style.visibility = carrossel.scrollLeft <= 0 ? 'hidden' : 'visible';
            botoesProximo[index].style.visibility = carrossel.scrollLeft >= maxScroll ? 'hidden' : 'visible';
        });

        botoesAnterior[index].style.visibility = 'hidden';
        if (carrossel.scrollWidth <= carrossel.clientWidth) {
            botoesProximo[index].style.visibility = 'hidden';
        }
    });
});