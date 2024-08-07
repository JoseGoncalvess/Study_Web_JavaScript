const buttom = document.getElementById("register-button")




function registrer(ev) {
    const sectionElement = ev.currentTarget.parentNode
    const name = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const confirmpassword = sectionElement.children.passwordConfirmation.value
    if (password == confirmpassword) {
        alert(`Usuario ${name} Registrado !`)
    }
    else{
        alert("Senhas não confere !")
    }
    
}

function removeEvent() {
    buttom.removeEventListener("click", registrer)
}

buttom.addEventListener("mouseout", function(ev) {
    alert(`O targent do elemento é ${ev.currentTarget}`)
    
})

buttom.addEventListener(
    "click", registrer
)

