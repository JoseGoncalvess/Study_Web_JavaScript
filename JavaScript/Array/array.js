const listaDeCompras =["Arroz","Cuscuz", 8];
console.log(listaDeCompras)
listaDeCompras[1] = "Banada";
listaDeCompras[4] = "Laranja";
listaDeCompras[3] = "Requeijão";


//TRABALHANDO COM ARRAY PT 1
const arr = ['Bobby', 'Sam', 'Dea','Castiel'] 

//  ADICONAR ELEMENTD NA LISTA 
arr.push('Metatrom')

// adicinal ao finla do array
arr.unshift("Lucifer")


// Remove o ultipo elemento

arr.pop()


// Remover do começo do array 

arr.shift()

//PEsquisar por um elemento 
arr.includes('Dea')
arr.includes('Crowley')

//PEsquisar por o index do elemento 
arr.indexOf('Dea')


//Cortar parte do array subarray
const newarr = arr.slice(0,4)

// Como juntar array

const sumarray = arr.concat(newarr)


// Subistituição dos elementos ele tambem devolve o elemento que vai ser removido
sumarray.splice(2,1,'Charlie')


// interar sobre os elementos 
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element + "Se encontra na posição" + index)
    
}