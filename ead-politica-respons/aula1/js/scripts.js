document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');

    const carouselData = [
        {
            text: 'A TV é mais popular entre os maiores de 65 anos (73% assistem todos os dias), entre as mulheres e entre as pessoas que realizam atividades domésticas.'
        },
        {
            text: 'Mulheres costumam assistir mais televisão do que homens: nos dias de semana, elas passam, em média, três horas e 47 minutos ligadas na programação; eles, três horas e dez minutos.'
        },
        {
            text: 'Programas de notícias e jornalismo são citados por 80% das pessoas quando questionadas sobre o que assistem na TV; as novelas, por 48%. No fim de semana, porém, os programas de auditório assumem a liderança: são lembrados por 79%.'
        },
        {
            text: 'A média de intensidade de uso da televisão é de três horas e 29 minutos. Goiás (cinco horas e 22 minutos) e Tocantins (quatro horas e 28 minutos) são os estados com maior intensidade de uso da TV.'
        }
    ];

    carouselData.forEach(data => {
        const div = document.createElement('div');
        div.className = 'carousel-item';
        div.textContent = data.text;
        carousel.appendChild(div);
    });
});
