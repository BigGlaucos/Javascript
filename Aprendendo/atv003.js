let nome = prompt('Insira o seu nome:');
let gen = prompt('Insira seu gênero: ');
let idade = parseInt(prompt('Insira a sua idade:')); 
console.log(typeof idade)
let tempoEmpresa = parseInt(prompt('Quantos anos você contribuiu para a sua empresa?'));

if(gen == "masculino" && idade >= 65 && tempoEmpresa >= 35){
    document.getElementById('info').innerHTML = `O senhor ${nome}, já pode se aposentar!`
}
else if(gen == "feminino" && idade >= 62 && tempoEmpresa >= 30){
    document.getElementById('info').innerHTML = `A senhora ${nome}, pode se aposentar!`
}
else{
    document.getElementById('info').innerHTML = `Infelizmente ainda não está na sua hora de se aposentar`
}