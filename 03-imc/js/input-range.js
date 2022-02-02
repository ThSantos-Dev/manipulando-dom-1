'use strict';

// Criando função para atualizar valor
const iniciarRange = (idRange, idSpanRange) => {
    const atualizarValor = () => document.getElementById(idSpanRange).textContent = document.getElementById(idRange).value;
    document.getElementById(idRange).addEventListener('input', atualizarValor);
}

export { iniciarRange }