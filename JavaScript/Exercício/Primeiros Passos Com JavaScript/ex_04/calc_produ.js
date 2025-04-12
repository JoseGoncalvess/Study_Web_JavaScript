
// list=["PIX","DEBITO","CREDITO","DINHEIRO"]


function calcProdu(acrescimo, desconto, valorprod) {
    if (desconto > 0) {
        var valorFinal = valorprod - (valorprod * desconto / 100)
    }

    var valorFinal = valorprod + (valorprod * acrescimo / 100)
    return valorFinal

}


function trasnsactionAmout(tipoPag, valor) {
    if (tipoPag === "PIX" || tipoPag === "DINHEIRO") {
        console.log(calcProdu(0,10, valor));
    } else if (tipoPag === "DEBITO") {
        console.log(calcProdu(0,5, valor))
    } else {
        console.log(calcProdu(15,0, valor))
    }
}

trasnsactionAmout("DINHEIRO",1200)
trasnsactionAmout("CREDITO",1200)