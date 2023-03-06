let sal = parseFloat(prompt('Insira o seu salário:'));
let aumento = 0.3

if(sal<= 500){
    sal =  (sal * aumento) + sal
    
    document.getElementById('info').innerHTML = `O seu novo salário é de R$ ${sal}`
}
else{
    document.getElementById('info').innerHTML = `Infelizmente você ainda não tem direito a um aumento.`
}