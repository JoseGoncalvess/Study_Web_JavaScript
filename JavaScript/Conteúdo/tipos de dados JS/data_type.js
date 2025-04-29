// ## 

// No Javascript  temos tipagem dinamica, isso é a=os tipo sao resolvidos de acorodo com
// a execução do programa.

// =======================================================================
PODE_SER_UM_ERRO_OU_NÂO__MAS_ISSO_TEM_LA_SUAS_VANTAGEMS_E_DESVANTAGEMS:

// TIPOS PRIMITIVOS:
// Boolean
// String
// undefined
// Number
// Symbol



// Object

CURIOSIDADES:

console.log(10 == "10"); // COMPARAÇÂO DESCONSIDERANDO O TIPO 
console.log(10 === "10"); // COMPARAÇÂO CONSIDERANDO O TIPO


// DIFERENÇA SEMANTICA
// null = INEXISTENCIA DE VALOR
// undefined = AUSENCIA DE DECLARAÇÂO, NEM SE QUER FOI CRIADA

// TIPOS DE NUMBER:

// +Infinity
// -Infinity
// NaN

// TODAS ESSAS NÂO REPRESENTAÇÔES DO TIPO "NUMBER":

// ==================

// # FORMAS DE REPRESENTAR AS STRINGS
// "STRING"  ASPAS DUPLAS
// 'STRING' ASPAS SIMPLES
// `STRING` TEMPLATE LIERAL

// A MELHOR ABORDAGEM É ULTILIZAR O TEMPLATE STRING FACILITADNOO USO DE CONCATENAÇÃO DE VARIAVEIS 



// ====================================

// Symbol um objeto imutavel unico

// Object -  UMA COMPOSIÇÂO JSON COMPOSTO DE CHAVE E FALOR 

let carro = {
    "modelo": "SPORT",
    "Ano": "2000",
    apresentar: function () {
        console.log(this.modelo);

    }

}

console.log(carro.modelo);
console.log(carro.Ano);
console.log(carro.apresentar);
