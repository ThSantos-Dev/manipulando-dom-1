'use strict'

const container = document.querySelector('main')

let numero = 1

function criarElementoInnerHTML() {
    container.innerHTML += `
        <div>
            ${numero}
        </div>
    `
    i++
}

function criarElementoAppendChild(numero) {
    // 1 - Criar
    const novaDiv = document.createElement('div')
    novaDiv.textContent = numero

    // 2 - Configurar
    novaDiv.id = "sete"
    novaDiv.classList.add('vermelho')

    // 3 - Inserir
    container.appendChild(novaDiv)
}

function criarElementoInsetBefore(numero) {
    // 1 - Criar
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5)')

    novaDiv.textContent = numero

    // 2 - Configurar
    novaDiv.id = "aaa"
    novaDiv.classList.add('azul')

    // 3 - Inserir
    container.insertBefore(novaDiv, quintaDiv)

}

function criarElementoReplaceChild(numero) {
    // 1 - Criar
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5)')

    novaDiv.textContent = numero

    // 2 - Configurar
    novaDiv.id = "aaa"
    novaDiv.classList.add('verde')

    // 3 - Inserir
    container.replaceChild(novaDiv, quintaDiv)

}

function criarElementoReplaceChildren(numero) {
    // 1 - Criar
    const novaDiv = document.createElement('div')

    novaDiv.textContent = numero

    // 2 - Configurar
    novaDiv.id = "aaa"
    novaDiv.classList.add('pink')

    // 3 - Inserir
    container.replaceChildren(novaDiv)

}


for(let i = 0; i <= 100; i++) {
    criarElementoAppendChild(i)
}