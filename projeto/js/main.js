'use strict'

const lampada = document.getElementById('lampada')
const btnLigar = document.getElementById('ligar')
const btnDesligar = document.getElementById('desligar')
const btnPiscar = document.getElementById('piscar')

let idPiscar = null;
let spanDataHora = document.getElementById('data-hora')

const lampadaQuebrada = () => lampada.src.includes('quebrada')
const lampadaDesligada = () => lampada.src.includes('desligada')

const ligarLampada = () => !lampadaQuebrada() ? lampada.src = './img/ligada.jpg' : false ; 

const desligarLampada = () => !lampadaQuebrada() ? lampada.src = './img/desligada.jpg' : false;

const quebrarLampada = () => lampada.src = './img/quebrada.jpg'

const ligarDesliga = () => {
    if(lampadaDesligada())
        ligarLampada()
    else
        desligarLampada()
}

const  piscarLampada = () => {
    if(idPiscar == null){
        idPiscar = setInterval(ligarDesliga, 400)
        btnPiscar.textContent = 'Parar'
    }
    else {
        clearInterval(idPiscar)
        piscar.textContent = 'Piscar'
        idPiscar = null
    }
}

// const reconstruirLampada = () => lampada.src = './img/desligada.jpg'

btnLigar.addEventListener('click', ligarLampada)
btnDesligar.addEventListener('click', desligarLampada)
btnPiscar.addEventListener('click', piscarLampada)
lampada.addEventListener('dblclick', quebrarLampada)


const atualizaDataHora = () => {
    let data = new Date();
    spanDataHora.textContent = data.getSeconds()
}

setInterval(atualizaDataHora, 1000)
// lampada.addEventListener('click', reconstruirLampada)
 