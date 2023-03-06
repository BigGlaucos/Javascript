let tipoMedia = prompt('Diga como será calculada a sua média, insira "A" para ser aritmétrica e "P" para ser em pesos')
let n1 = Number(prompt('Insira a primeira nota: '))
let n2 = Number(prompt('Insira a segunda nota: '))
let n3 = Number(prompt('Insira a terceira nota: '))
let result

function media(result1, result2){
    if(tipoMedia == 'A'){
        result1 = (n1+n2+n3) / 3

        document.getElementById(`info`).innerHTML = `A sua nota é: ${result1}`
        return
    }

    else if(tipoMedia == 'P'){
        result2 = (n1 * 5 + n2 * 3 + n3 * 2) / (5 + 3 + 2)
        document.getElementById(`info`).innerHTML = `A sua nota é: ${result2}`
        return
    }
} 

media(result)