// CALCULANDO O CUSTO D EUMA VIAGEM BASEADAS E 3 VALORES DE ENTRADA.BASEADAS

// 3 VARIAVEIS: 
// 1 - PREÇO DO CONBUSTIVEL
// 2- GASTO MEDIO DE COMBUSTIVEL DO CARR POR KM
// 3 - DISTANCIA PERCORRIDA EM KM DA VIAGEM;

// O RESULTADO FINAL DEVE SER O VALOR TOTAL QUE A VIAGEM VAI CUSTAR EM REIAS



let priceOfCombustivel = 5.79;
let averageConsumption = 12;
let distanceOfkm = 2689;

const resultu = calcPriceOfTri(priceOfCombustivel, averageConsumption, distanceOfkm);

function calcPriceOfTri(priceOfCombustivel, averageConsumption, distanceOfkm) {
    let totalCalc = (distanceOfkm / averageConsumption) * priceOfCombustivel;
    return totalCalc;
}

console.log(`O gasto totoal dessa viagem sera de R$ ${resultu.toFixed(2)} reais`);
