let numberOne = Number(prompt("Insira um numero"))
let numberTwo = Number(prompt("Insira outro numero"))

let soma = numberOne + numberTwo
let subtrair = numberOne - numberTwo
let multiplicar = numberOne * numberTwo
let dividir = numberOne / numberTwo
let resto = numberOne % numberTwo
let par = resto % 2


alert(`A soma dos numeros é ${soma}`)
alert(`A subtração dos numeros é ${subtrair}`)
alert(`A multiplicação dos numeros é ${multiplicar}`)
alert(`A divisão dos numeros é ${dividir}`)
alert(`O resto dos numeros é ${resto}`)

if(par == 0) {
    alert(`A soma dos numeros é par ${soma}`)
}else{
    alert(`A soma dos numeros é impar ${soma}`)
}

if(numberOne == numberTwo) {
    alert("Os numeros inseridos são iguais")
}else{
    alert("Os numeros inseridos são diferentes")
}