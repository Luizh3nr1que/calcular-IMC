document.getElementById('button').addEventListener('click', () => {



    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const nome = document.getElementById('nome').value;

    const res = document.querySelector('.res');
    const erro = document.querySelector('.erro');

    erro.innerHTML = '';

    if (peso && altura && nome) {
        const imc = peso / Math.pow(altura, 2)

        if (imc < 18.5) {
            res.innerHTML = `${nome} Está Abaixo do peso`;
            res.classList.add('normal');
            res.classList.remove('medo');
            res.classList.remove('pesado');
        } else if (imc >= 18.5 && imc < 25) {
            res.innerHTML = `${nome} Está com peso padrão`;
            res.classList.add('normal');
            res.classList.remove('medo');
            res.classList.remove('pesado');
        } else if (imc >= 25 && imc < 30) {
            res.innerHTML = `${nome} está acima do peso`;
            res.classList.add('medo');
            res.classList.remove('normal');
            res.classList.remove('pesado');
        } else if (imc >= 30 && imc < 40) {
            res.innerHTML = `${nome} está Obeso`;
            res.classList.add('pesado');
            res.classList.remove('medo');
            res.classList.remove('normal');
        } else {
            res.innerHTML = `${nome} está com Obesidade grave`;
            res.classList.add('pesado');
            res.classList.remove('medo');
            res.classList.remove('normal');
        }
    } else {
        erro.innerHTML = 'Preencha  Todos os campos por favor!'
        erro.classList.add('pesado');
    }
});

document.getElementById('limpar').addEventListener('click', () => {
    location.reload(5000);
})

document.querySelector('.imc').addEventListener('click', () => {
    var txt = document.querySelector('.texto');
    if (txt.style.display === "block") {
        txt.style.display = 'none'
    } else {
        txt.style.display = 'block'
    }
})