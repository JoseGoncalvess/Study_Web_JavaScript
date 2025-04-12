// UMA SALA   SORTEOU 5 NUMERO DE 0 - 100 E PRECISA SASBER QUAL FOI O AMIO NUMEORO SORTEADO
// OS NUMEROS SÃO[10, 45, 3, 8, 44, 42, 76]

// A SAIDA DEVE SER 76

const { gets, print } = require("../../Conteúdo/Importação e Exportação com JavaScript/function_auxiliares")



const entardas = [12, 44, 51, 3, 4, 7, 8, 12, 434, 767, 55, 433, 224, 24, 688, 9, 79, 9]
let maiorNumeroEncontrado = 0;

for (let number in entardas) {
    if (entardas[number] > maiorNumeroEncontrado) {
        maiorNumeroEncontrado = entardas[number]
    }
}



print(maiorNumeroEncontrado)