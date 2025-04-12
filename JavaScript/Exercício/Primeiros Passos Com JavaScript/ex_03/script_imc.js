// CALCULE O IMC BASEADO ME 2 VARIAVEIS:

// PESO E ALTURA

// O CALCULO SE DAR POR 

// IMC = PESO / (ALTURA * ALTURA)

let peso = 78;
let altura = 1.60;


function calcIMC(weight, heigth) {
    
let imc = Number.parseInt((weight / (heigth * heigth)).toFixed(2))

    if (imc < 20) {
        console.log(`Seu IMC é de ${imc.toFixed(2)} e você está abaixo do peso`);  
    } else if (imc > 20 && imc <= 25) {
        console.log(`Seu IMC é de ${imc.toFixed(2)} e você está no peso ideial`);  
    } else  if (imc >25 && imc <= 30) {
        console.log(`Seu IMC é de ${imc.toFixed(2)} e você está no SobrePeso`);  
    }else if (imc >= 30 && imc <= 40) {
        console.log(`Seu IMC é de ${imc.toFixed(2)} e você está Acima do peso`);  
    }
    
}

calcIMC(peso, altura)
