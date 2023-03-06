let celsius = window.prompt('Insira a temperatura em celsius');
let result = celsius * 1.8 + 32

document.getElementById('info').innerHTML = `${celsius}°c convertido para fahrenheit fica: ${result} fahrenheit`