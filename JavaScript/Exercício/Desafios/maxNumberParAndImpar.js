const numbers = [2, 33, 44, 5, 7, 8, 66, 0, 9, 7, 6, 4, 3, 4, 54, 6, 23, 45]

let numbersPars = []
let numbersImpars = []

for (const element of numbers) {
    if (element % 2 === 0) {
        numbersPars.push(element);
    } else {
        numbersImpars.push(element)
    }
}

// COMO O INTUITO AQUI È APRENDER VAMOS IMPLEMNETAR O ALGORITIMO NA MÃO
// const maxNumberPar = Math.max(...numbersPars)

function maxNumber(...numbersList) {
    let maxSearcNumber = 0;
    for (const element of numbersList) {
        if (element > maxSearcNumber) {
            maxSearcNumber = element;
        }
    }

    return maxSearcNumber;

}


console.log(`O maior número PAR é ${maxNumber(...numbersPars)}`)
console.log(`O maior número IMPAR é ${maxNumber(...numbersImpars)}`)
