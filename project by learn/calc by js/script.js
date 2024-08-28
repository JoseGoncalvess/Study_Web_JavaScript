const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//ADICONANDO EVENTO AO BUTTÂODA CALCULADORA
document.querySelectorAll(".charKey").forEach(function (tecla) {
    tecla.addEventListener("click",function () {
        const value = tecla.dataset.value
       input.value += value
        
    })
})
//DEFININDO TECLAS PERMITIDAS DO TECLADO
input.addEventListener("keydown", function (ev) {
    ev.preventDefault()
    const valuekey = ev.key
    if (allowedKeys.includes(valuekey)){
        input.value += valuekey
       return
    }
    if (valuekey ==="Backspace") {
        input.value = input.value.slice(0, -1)   
    }
    if (valuekey ==="Enter") {
        Calculate()
    }

  
    
})
//LImpANDO O INPUT
document.getElementById("clear").addEventListener("click", function(){
    input.value = ""
})

function Calculate() {
   try {
    const result = eval(input.value)
    resultInput.value = result
   } catch (error) {
    const buttom = 
    resultInput.classList.add("error")
    resultInput.value = "Erro ao Calcular"
    document.getElementById("copyToClipboard").hidden = true
    
   }

}
//efetuando a soma
document.getElementById("equal").addEventListener("click", Calculate)

document.getElementById("themeSwitcher").addEventListener("click", function (ev) {
    if (main.dataset.theme === "dark"){
        root.style.setProperty("--bg-color","#f1f5f9")
        root.style.setProperty("--font-color","#212529")
        root.style.setProperty("--primary-color","#288c4e")
        root.style.setProperty("--border-color","#666")

        main.dataset.theme ="light"
    } else {
        root.style.setProperty("--bg-color","#212529")
        root.style.setProperty("--font-color","#f1f5f9")
        root.style.setProperty("--primary-color","#4dff91")
        root.style.setProperty("--border-color","#666")
        main.dataset.theme ="dark"
    }
})

document.getElementById("copyToClipboard").addEventListener("click",function (ev) {
    const button = ev.currentTarget
    if (button.innerText === "Coped!") {
        button.innerText ="Copiado!"
        button.classlist("success")
        navigator.clipboard.writeText(resultInput.value)
        
    }else{
        button.innerText = "Copy!"
        button.classlist.remove("success")
    }
})

