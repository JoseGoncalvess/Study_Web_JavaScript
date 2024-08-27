const input = document.getElementById('input')
const cons = document.getElementById("console")
//MANIPULANDO O VALOR DO INPUT
document.getElementById("value").addEventListener("click", function () {
    
    input.value ="Olá Dev...",
    cons.innerText="Alterando o valor do Input"

    console.log(input.value) // vaLOR MASI DINAMICO 
    console.log(input.getAttribute('value')) //RETORNA O VALOR DO html
    
})
// MANIPULANDO O TYPO DO INPUT
document.getElementById('type').addEventListener('click', function () {
    var tipo =  input.type !== 'date' ? 'date' : 'text'
    input.setAttribute('type', tipo)
    cons.innerText=`Alterando o TIPO do Input agora é ${tipo}`

  })

// MANIPULANDO O PLACEHOLDER
  document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'DIGA LOGO O QUE QUER'
    cons.innerText=`Alterando o PLACEHOLDER do Input.`

  })

// PODENDO DESABILITAR O INPU
  document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disabled)
    cons.innerText=`dESABILITADNO O INPUT`

  })
// INSERIR ATRIBUTOS DINAMICOS 
  document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else é: " + data)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
  })