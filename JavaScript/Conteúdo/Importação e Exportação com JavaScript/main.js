
// IMPROTANDO AS FUNÇÔES D EOUTRO ARQUIVO
// const functions = require("./function_auxiliares")

// JUNTAMENTE DESTA IMPORTAÇÂO POR SE TARTAR  D EUM OBJETO POSSO DESCONTRUIR ELE FACILITANDO O USO
// DE MODO QUE NÂO PRECIOS CHAMR "functions.gets()" MAS SIM O "gets()"

const { gets, print } = require("./function_auxiliares.js")

let maxValueSearch = 0

for (let i = 0; i < 7; i++) {
    const element = gets();
    if (element > maxValueSearch) {
        maxValueSearch = element
    }

}

print(maxValueSearch)