// CLOUSURE

function soma(x) {
    return function (y) {
        return x +y
    }
}

// A CHAMDA DESSA FUNÇÂO SE DAR 

const somaTotal = soma(10)
console.log(somaTotal(20));//30
console.log(somaTotal(20));//40
console.log(somaTotal(20));//50

// O INCRIVEL DISSO É A POSSIBILIDADE DE GAUDAR CONTEXTO NO MOMENTO  DA SUA CRIAÇÃO INDIRETAMENTE 


// ## Invocação Direta, Call, Apply e Operador New

const Pessoa{
    nome:"Gonçalves",
    idade:23
}
- DIRETA
soma(10)(2)

- OBJETO

// PAssamos um contexto mesmo qeu o objeto não tenha esse contexto edepois os parametros
soma.Apply(Pessoa, [1,2])
soma.Call(Pessoa, 1,2)


// CALBACK
function somarDinovo(x,y) {
    return x + y;
}

function multiplica(x,y) {
    return x * y;
}

function calcular(x, operacao, y) {
    console.log(operacao(x,y));
    
}

calcular(19,somarDinovo,34)