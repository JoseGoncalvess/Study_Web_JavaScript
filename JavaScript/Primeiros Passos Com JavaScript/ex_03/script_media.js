// CALCUALR  AMEDIA DAS NOTAS

// SEGUINDO O CNCEITO DE MEDIA O CALC SE D APLA FUNÇÃO:
// MEDIA = (NOTA1+NOTA2+NOTA3+NOTAn) / NUMERO DE NOTAS

// REGRAS:
//  MEDIA <5 = REPORVADO
// MEDIAS >5<7 = RECUPERAÇÂO
// MEDIAS >7 = APROVADO


let notasStudents=[8,9,9,6.6,10,6,7.5,4,6,]


function calcMedNotas(listaNotas) {
    let totoalSoma=0

    for (let index = 0; index < listaNotas.length; index++) {
        let element = listaNotas[index];
        totoalSoma = totoalSoma + element;
    }
    
    return totoalSoma / listaNotas.length
}

const mediasOfNotas = calcMedNotas(notasStudents)

if (mediasOfNotas >=7 ) {
    
console.log(`A media das notas do alunos é de ${mediasOfNotas.toFixed(2)} ele está APROVADO `,);
} else  if (mediasOfNotas >=5 && mediasOfNotas <=7 ){
    console.log(`A media das notas do alunos é de ${mediasOfNotas.toFixed(2)} ele está RECUPERAÇÂO`,);
}else{
    console.log(`A media das notas do alunos é de ${mediasOfNotas.toFixed(2)} ele está REPROVADO`,);
}

