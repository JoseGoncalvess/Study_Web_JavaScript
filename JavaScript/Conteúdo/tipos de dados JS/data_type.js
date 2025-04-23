// ## 

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
    apresentar: function() {
        console.log(this.modelo);
        
    }
    
}

console.log(carro.modelo);
console.log(carro.Ano);
console.log(carro.apresentar);
