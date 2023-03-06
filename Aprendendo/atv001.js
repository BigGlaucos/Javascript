let ano = window.prompt('Insira o ano de seu nascimento:'), result
const dataAtual = new Date().getFullYear()
result = dataAtual - ano
console.log(dataAtual)

if(result >= 18 && result >= 16){
    document.getElementById('info').innerHTML = `Você tem ${result} anos, pode votar e  dirigir`
}

else if(result >= 16 && result < 18){
    document.getElementById('info').innerHTML = `Você tem ${result} anos, pode votar e não pode dirigir`
}
else{
    document.getElementById('info').innerHTML = `Você tem %{result} anos, não pode votar e nem dirigir`
}