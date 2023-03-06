let peso = parseFloat(prompt('Insira o seu peso:'));
let altura = parseFloat(prompt('Insira a sua altura:'));
let result = peso/(altura*altura)

document.getElementById('info').innerHTML = `O seu imc é: ${result}`