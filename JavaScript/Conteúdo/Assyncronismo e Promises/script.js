// const numeroqualquer = new Promise((resolve, reject) => {
//     setInterval(() => {
//         const numberQualuer = parseInt(Math.random() * 100);
//         // se der certo chamo o resolver
//         resolve(numberQualuer)
//     }, 2000)

// })

// numeroqualquer.then((value) => {
//     console.log(value);

// }).catch((Error) => {
//     console.log(Error);
// }).finally(() => {
//     console.log("DEU BOM DEMAIS!!");

// })


const fs = require("fs")
const path = require('path')


const pathArquivo = path.resolve(__dirname, "tarefaz.csv")




async function buscarArquivo() {
    const arquivoLido = await fs.promises.readFile("./Conteúdo/Assyncronismo e Promises/tarefaz.csv")
    const textoArquivo = arquivoLido.toString("utf-8")
    console.log(textoArquivo);

}

buscarArquivo()

// AQUI COM O TEMPO SE TORNA COMPLEXO
// arquivoLido.then((arquivo) => arquivo.toString("utf8"))
//     .then((textArquivo) => textArquivo.split("\n").slice(1)
//     ).then((linahsCab) => linahsCab.map((linha) => {
//         const [nome, feito] = linha.split(";")
//         return {
//             name: nome,
//             feito: feito.trim()
//         }

//     })).then((listaTArefaz) => {
//         console.log(listaTArefaz[0]);
//     })
//     .catch((error) => console.log(error))


