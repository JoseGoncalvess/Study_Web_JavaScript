const result = document.getElementById('ress')
//Soma por função
function somar(a, b) {
    const res = a + b
    result.innerText = result.innerText = `O resultado é ${res}`
}

// soma por função presente em uma variavel

const annonymosFunction = function (a,b) {
    return a + b
}
document.getElementById("AnonymosSum").addEventListener("click",function () {
    result.innerText = `O resultado é ${annonymosFunction(5,8)}`
    
})

//ARROW fUNCTION
const arrowSum  =  (a,b) => {
    return a + b
}

document.getElementById("arrowSum").addEventListener("click",function () {
    result.innerText = `O resultado é ${arrowSum(12,8)}`
    
})

const subtract  = (a,b) => a - b
document.getElementById("subtratct").addEventListener("click",function () {
    result.innerText = `O resultado é ${subtract(50,18)}`
    
})

//inline function
const number =  41

document.getElementById("SumInLine").addEventListener("click",function () {
    result.innerText = `O resultado é ${(number * number)}`
    
})

const family = ["Mãe","Tio",'Anny', 'Maria', 'Guilherme', 'Matheus', 'Binho', 'Neeko',"Chico"]

const initofWord  = family.filter(mebro => mebro[0] =="M")

document.getElementById("filter").addEventListener("click",function () {
    result.innerText = `O resultado é ${initofWord}`
    
})