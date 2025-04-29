const result = document.getElementById('ress')




// FUNCTION DECLARETAION - DANDO UMA NOME A FUNCTON SENDO UAM UNIDADE SO E QUANDO ELA SOFRE HOINSTIN TODAS AS FUNÇÔES VÂO PARA O TOPO


//Soma por função
function somar(a, b) {
    const res = a + b
    result.innerText = result.innerText = `O resultado é ${res}`
}

// soma por função presente em uma variavel

const annonymosFunction = function (a, b) {
    return a + b
}
document.getElementById("AnonymosSum").addEventListener("click", function () {
    result.innerText = `O resultado é ${annonymosFunction(5, 8)}`

})

// FUNCRTION ATRIBUIT - A FUNCTION NÂO SOBRE O HOSTING
let fuctona = fucton(opa);
const fucton = function name(params) {
    console.log(params);

}

//ARROW fUNCTION
// DIFERENTIMENTE DA FUNCTION NORMAL A AROW FUNCTIO NÃO POSSI CONTEXTO ".THIS"
const arrowSum = (a, b) => {
    return a + b
}

document.getElementById("arrowSum").addEventListener("click", function () {
    result.innerText = `O resultado é ${arrowSum(12, 8)}`

})

const subtract = (a, b) => a - b
document.getElementById("subtratct").addEventListener("click", function () {
    result.innerText = `O resultado é ${subtract(50, 18)}`

})

//inline function
const number = 41

document.getElementById("SumInLine").addEventListener("click", function () {
    result.innerText = `O resultado é ${(number * number)}`

})

const family = ["Mãe", "Tio", 'Anny', 'Maria', 'Guilherme', 'Matheus', 'Binho', 'Neeko', "Chico"]

const initofWord = family.filter(mebro => mebro[0] == "M")

document.getElementById("filter").addEventListener("click", function () {
    result.innerText = `O resultado é ${initofWord}`

})