// ESCRIPT QUE AO APSSAR UM NUEMOR RETONA A TABUADA DELE
let numbeTabuada = 8;
tabuada = []

for (let index = 0; index < 11; index++) {
    const conta = `${numbeTabuada} x ${index} = ${numbeTabuada * index}`;
    tabuada.push(conta)
}

console.log(tabuada.join("\n"));

