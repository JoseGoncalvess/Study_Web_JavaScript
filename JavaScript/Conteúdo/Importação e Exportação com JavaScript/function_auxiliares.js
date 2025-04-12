const entradas = [10, 45, 3, 8, 44, 42, 76]
i = 0

function gets() {
    const valor = entradas[i]
    i++
    return valor
}

function print(params) {
    console.log(params)
}


// FORMAS DE EXPORTAR FUNÇÕES PARA OUTRA ARQUIVO
module.exports = { gets, print }