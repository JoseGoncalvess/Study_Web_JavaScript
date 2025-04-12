// ESCRIPT QUE AO APSSAR UM NUEMOR RETONA A TABUADA DELE
let numbeTabuada = 8;
tabuada = []

for (let index = 0; index < 11; index++) {
    const conta = `${numbeTabuada} x ${index} = ${numbeTabuada * index}`;
    tabuada.push(conta)
}

console.log(tabuada.join("\n"));


// const numerosPares = [];
// for (let i = 0; i < 10; i = i + 2) {
//     numerosPares.push(i);
// }

// console.log(numerosPares);


const numerosPares = []; for (let i = 0; i < 10; i++) { const numeroPar = i % 2 === 0; if (numeroPar) { numerosPares.push(i); } } console.log(numerosPares);