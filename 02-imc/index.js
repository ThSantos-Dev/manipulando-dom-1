'use strict';

// function camposValidos() {
//     //utilizamos ".reportValidity()" como uma espécie de validação, verificando as restrições descritas no html.
//     return document.getElementById('formulario').reportValidity();
// }

const camposValidos = () => document.getElementById('formulario').reportValidity();

const calcularImc = (altura, peso) => peso / (altura * altura);


const estado = (imc)  => {
    let texto = "";

    if (imc < 18.5) {
        texto = " e você está abaixo do peso.";
    } else if (imc > 18.5 && imc < 24.9) {
        texto = ' e você está no peso ideal.<span id="span-parabens">Parabéns!</span>';
    } else if (imc > 25 && imc < 29.9) {
        texto = ' e você está acima do peso.<span id="span-cuidado">Cuidado!</span>';
    } else if (imc > 30 && imc < 34.9) {
        texto = " e você está com obesidade grau I.";
    } else if (imc > 35 && imc < 39.9) {
        texto = " e você está com obesidade grau II.";
    } else {
        texto = " e você está com  obesidade severa.";
    }

    return texto;
}

function exibirResultados() {
    //assim atribuímos o valor do elemento html à variável e capturamos o valor inserido na caixa de texto através do '.value'
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    /* se os campos forem válidos definimos que a variável imc recebe o método calcularImc, e a variável texto recebe, consequentemente, 
        o estado  setado no método de mesmo nome e por fim, atribuirá os valores na caixa de texto que exibe os resultados*/
    if (camposValidos()) {
        const imc = calcularImc(altura, peso);

        let texto = estado(imc);
        //'.toFixed()' para definir a quantidade de casas decimais 
        resultado.innerHTML = `${nome} seu IMC é ${imc.toFixed(2)}${texto}`;
        verificaPalavra(resultado);
    } else {
        resultado.innerHTML = "Preencha todos os campos!";
    }
}

/*para capturarmos o botão, do qual a primeira parte antes do primeiro ponto 
    representa o elemento html "botão", em seguida definimos a captura do "click" no botão através do método de listener.
    callBack seria uma função do qual podemos criar/ser existente, representada pelo "exibirResultados".*/
document.getElementById('calcular').addEventListener('click', /*callBack*/ exibirResultados);