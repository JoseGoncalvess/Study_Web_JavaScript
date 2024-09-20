const str = 'Olá, Mundo!'
const array = [1,2,5,8]

console.log(str)
console.log(...str)




// USO APLICADO A ARRAY
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
console.log(towns)
console.log(...towns)


// APLICAÇÂO PARA MANIPULAR DADOS SEM AUTERAR A REFERENCIA

const newtowns = [...towns] // AQUI ESTOU CONANDO E NÂO REFERENICANO 
newtowns.push("ARCOVERDE")
console.log(newtowns)


// POSSO USAR PARA DESISTURTURAR OBJETO

const townsObjetct = {...towns}
townsObjetct.fill = true
console.log(townsObjetct)
