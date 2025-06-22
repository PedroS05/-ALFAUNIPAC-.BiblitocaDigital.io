document.addEventListener('DOMContentLoaded', function() {
    const mindsetTest = document.createElement('div');
    mindsetTest.className = 'mindset-test';
    mindsetTest.innerHTML = `
        <h3>Qual é seu Mindset?</h3>
        <p>Quando você falha em algo importante, você:</p>
        <div class="options">
            <button data-type="fixed">Pensa "Eu não tenho talento para isso"</button>
            <button data-type="growth">Pensa "Preciso me esforçar mais da próxima vez"</button>
        </div>
        <div id="mindset-result"></div>
    `;
    document.querySelector('.book-meta').after(mindsetTest);

    document.querySelectorAll('.options button').forEach(button => {
        button.addEventListener('click', function() {
            const result = document.getElementById('mindset-result');
            if (this.dataset.type === 'fixed') {
                result.innerHTML = `
                    <p>Você parece ter um <strong>mindset fixo</strong>!</p>
                    <p>Segundo Carol Dweck, você pode desenvolver um <strong>mindset de crescimento</strong> com prática e consciência.</p>
                `;
            } else {
                result.innerHTML = `
                    <p>Você parece ter um <strong>mindset de crescimento</strong>!</p>
                    <p>Continue assim! Segundo a pesquisa de Dweck, essa mentalidade leva ao maior aprendizado e desenvolvimento.</p>
                `;
            }
            result.style.backgroundColor = '#ef233c';
            result.style.color = 'white';
            result.style.padding = '1rem';
            result.style.borderRadius = '8px';
            result.style.marginTop = '1rem';
        });
    });

    const bookCover = document.querySelector('.book-cover img');
    let scale = 1;
    let growing = true;
    
    setInterval(() => {
        if (growing) {
            scale += 0.005;
            if (scale >= 1.05) growing = false;
        } else {
            scale -= 0.005;
            if (scale <= 1) growing = true;
        }
        bookCover.style.transform = `scale(${scale})`;
    }, 100);

    const growthPhrases = [
        "O esforço faz você melhor, não apenas bom!",
        "Desafios são oportunidades para crescer, não ameaças.",
        "Nossas habilidades podem ser desenvolvidas através de dedicação."
    ];
    
    const randomPhrase = document.createElement('div');
    randomPhrase.className = 'growth-phrase';
    randomPhrase.innerHTML = `<p>"${growthPhrases[Math.floor(Math.random() * growthPhrases.length)]}"</p>`;
    document.querySelector('.synopsis').prepend(randomPhrase);
});