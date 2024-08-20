const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
    ev.preventDefault() // PREVINE O COMPORTAMENTO DEFAULT DO FORM (NESSE CONTEXTO)


    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadtype = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const obs = document.querySelector('textarea[name="observations"]').value

    let salad = ""
    
    document.querySelectorAll('input[name="salad"]:checked').forEach(element => {
        salad += " - " + element.value 
        
    });


    console.log(`${name} -${address} -${breadtype} -${main} -${salad} -${obs}`)
    
   alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations.value
  )
})