function addContact(){
    const contactsection = document.getElementById("contacts-list")
    const h3 = document.createElement('h3')
    h3.innerText = "Contato"
    const ul = document.createElement("ul")



    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type='text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

  

    const phoneLi = document.createElement('li')
    phoneLi.innerText = "phone: "
    const phoneInput = document.createElement('input')
    nameInput.type='text'
    nameInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))


    const addressLi =  document.createElement('li')
    addressLi.innerHTML = '<label for= "address"> Endereço: </label>'
    const addressinput = document.createElement('input')
    addressinput.type='text'
    addressinput.name = 'address'
    addressLi.id = 'address'
    addressLi.appendChild(addressinput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    contactsection.append(h3,ul)


}

function removeContact() {
    const contactsection = document.getElementById("contacts-list")
    const title = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactsection.removeChild(title[title.length -1])
    contactsection.removeChild(contacts[contacts.length -1])

    
    
}