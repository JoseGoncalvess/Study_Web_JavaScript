// De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno, crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de *arrow functions* para calcular as operações abaixo.

const mediaMath  =  (...numbers) => {
    let medValue = numbers.reduce((accum, num) => accum + num, 0) / numbers.length
    return `A media entre [ ${numbers} ] é ${medValue.toFixed(2)}`
}

const mediaPondMath = (...objects) => {
    let pesoPod = objects.reduce((acum, obj)=> acum + obj.p, 0)
    let medpodValue = objects.reduce((acum, obj)=> acum + (obj.n * obj.p), 0) / pesoPod
    
    return `A Media Poderada dos numeros passados ${objects} é ${medpodValue.toFixed(2)}`
}

const mediaanaMath = (...numbers) => {
    let medianaValue = 0;
    if (numbers.length  % 2 != 0) {
        const position = (numbers.length + 1) / 2
        medianaValue = numbers[position]

        return `A Mediana dos numeros passados ${numbers} é ${medianaValue}`
    }else{
       
        const position = numbers.length  / 2
        medianaValue =  (numbers[position] + numbers[position - 1]) / 2 
        return `A Mediana dos numeros passados ${numbers} é ${medianaValue}`
    }

}


const modMath = (...numbers) => {
    const contieNumber = numbers.map(num => [
        num,
        numbers.filter(n => n === num).length
    ])
    contieNumber.sort((a, b) => b[1] - a[1])
  
        return `A moda dos numeros ${numbers} passados é ${contieNumber[0][0]} `
    }






// RESULTADOS

console.log(mediaMath(2,6,9,2,3,3,3,3,8))
console.log(mediaPondMath({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }))
console.log(mediaanaMath(15, 14, 8, 7, 3))
console.log(modMath(1,3,6,6,6,9,58,7))