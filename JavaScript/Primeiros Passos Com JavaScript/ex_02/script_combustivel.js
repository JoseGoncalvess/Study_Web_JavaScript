// CALCULANDO O CUSTO D EUMA VIAGEM BASEADAS E 3 VALORES DE ENTRADA.BASEADAS

// 3 VARIAVEIS: 
// 1 - TIPO COMBUSTIVEL
// 2- GASTO MEDIO DE COMBUSTIVEL DO CARR POR KM
// 3 - DISTANCIA PERCORRIDA EM KM DA VIAGEM;

// O RESULTADO FINAL DEVE SER O VALOR TOTAL QUE A VIAGEM VAI CUSTAR EM REIAS


// FOCO AQUI È TREINAR ESTRUTURAS CONDICIONAIS

TIPOS = ["GASOLINA","ETANOL","DISEL"]

let typeOfCombustivel = "GASOLINA";
let averageConsumption = 22;
let distanceOfkm = 1632;

const resultu = calcPriceOfTri(averageConsumption, distanceOfkm, typeOfCombustivel);

function calcPriceOfTri( averageConsumption, distanceOfkm, typeOfCombustivel) {
     let priceOfCombustivel=0
     let totalCalc = 0
    if (typeOfCombustivel === "GASOLINA") {
        priceOfCombustivel = 5.79;
        totalCalc = (distanceOfkm / averageConsumption) * priceOfCombustivel;
    } else if (typeOfCombustivel === "ETANOL"){
        priceOfCombustivel = 4.30;
        totalCalc = (distanceOfkm / averageConsumption) * priceOfCombustivel;
    } else if (typeOfCombustivel === "DISEL"){
        priceOfCombustivel = 6.00;
        totalCalc = (distanceOfkm / averageConsumption) * priceOfCombustivel;
    }

    return totalCalc;
}

console.log(`O gasto totoal dessa viagem sera de R$ ${resultu.toFixed(2)} reais`);
