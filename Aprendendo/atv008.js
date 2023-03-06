let num = parseInt(prompt('Insira um número: '))

function positiveOrNegative(n1){
    if(n1>=1){
        document.getElementById(`info`).innerHTML = `1`
        return
    } 
    else{
        document.getElementById(`info`).innerHTML = `0`
        return
    }
}

positiveOrNegative(num)