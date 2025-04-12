//  PROGRAMA QEU PERCORRA UMA LSITA E RETORNE  O NUMERO SE ELE FOR PAR

const listNumber = [2, 3, 43, 5, 6, 52, 90, 7, 6, 8, 11, 23, 45, 66, 45, 3,]

function coletNumberPar(numbers) {
    for (const number in listNumber) {
        if ((number % 2) === 0) {
            console.log(number);
        }
    }
}

coletNumberPar(listNumber)