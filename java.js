document.getElementById('button').addEventListener('click', () => {



    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value

    const res = document.querySelector('.res');
    const erro = document.querySelector('.erro');
    const aviso = document.querySelector('.aviso');

    erro.innerHTML = '';
    aviso.innerHTML = '';

    if (peso && altura && nome) {
        const imc = peso / Math.pow(altura, 2)

        if (imc < 18.5) {
            res.innerHTML = `Cuidado, ${nome}, seu peso está abaixo do ideal para uma vida saudável!`;
            res.classList.add('normal');
            res.classList.remove('medo');
            res.classList.remove('pesado');
        } else if (imc >= 18.5 && imc < 25) {
            res.innerHTML = `Parabéns, ${nome}, você está no peso ideal para uma vida saudável!`;
            res.classList.add('normal');
            res.classList.remove('medo');
            res.classList.remove('pesado');
        } else if (imc >= 25 && imc < 30) {
            res.innerHTML = `Hora de se cuidar, ${nome}, vamos juntos nessa jornada para uma vida mais saudável!`;
            res.classList.add('medo');
            res.classList.remove('normal');
            res.classList.remove('pesado');
        } else if (imc >= 30 && imc < 40) {
            res.innerHTML = `Atenção!, ${nome}, é hora de procurar ajuda e cuidar da sua saúde!`;
            res.classList.add('pesado');
            res.classList.remove('medo');
            res.classList.remove('normal');
        } else {
            res.innerHTML = `Urgente!!! ${nome}, procure ajuda médica imediatamente para tratar sua obesidade grave.`;
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
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const nome = document.getElementById('nome');
    const aviso = document.querySelector('.aviso');
    const idade = document.getElementById('idade');
    const res = document.querySelector('.res');
    const erro = document.querySelector('.erro');

    if (peso.value === '' && altura.value === '' && nome.value === '') {
        aviso.innerHTML = 'Nada para limpar ! '
        aviso.classList.add('pesado');
        aviso.style.marginTop = '10px';
    } else {
        peso.value = '';
        altura.value = '';
        nome.value = '';
        idade.value = '';
        res.innerHTML = '';

    }

})

document.querySelector('.imc').addEventListener('click', () => {
    var txt = document.querySelector('.texto');
    if (txt.style.display === "block") {
        txt.style.display = 'none'
    } else {
        txt.style.display = 'block'
    }
})


const btnMasculino = document.querySelector('.masc');
const btnFeminino = document.querySelector('.fem');

btnMasculino.addEventListener('click', () => {
    btnMasculino.classList.add('selecionadoM');
    btnFeminino.classList.remove('selecionadoF');
});

btnFeminino.addEventListener('click', () => {
    btnFeminino.classList.add('selecionadoF');
    btnMasculino.classList.remove('selecionadoM');
});
