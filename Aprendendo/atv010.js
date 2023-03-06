let num = []
let maiorNum = 0
let menorNum = 0

function maior(){
    for(let i=0; i < 5; i++){
        num[i] = parseInt(prompt("Insira um número"));

        if(menorNum == 0){
            menorNum = num[i]
        }

        else if(num[i] > maiorNum){
            maiorNum = num[i]
        }

        else if(num[i] < menorNum){
            menorNum = num[i]
        }
        
    }

    document.getElementById(`info`).innerHTML = `O maior número inserido é: ${maiorNum} e o menor é: ${menorNum}`
}

maior(num)