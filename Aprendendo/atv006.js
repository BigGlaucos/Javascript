let n2 = 0

for(let i = 0; i < 10; i++){
    let n1 = parseInt(prompt('Insira um número'));

    if(n1 > n2){
        n2 = n1
    }
}

    document.getElementById('info').innerHTML = `O maior número digitado é ${n2}`
