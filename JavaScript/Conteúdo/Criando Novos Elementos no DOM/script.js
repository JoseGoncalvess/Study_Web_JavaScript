function addInput(){
  
    const number = document.getElementsByTagName('ul');
    const ul = document.getElementById('inputs');

    const newchild = document.createElement('li')
    newchild.className =`New_child ${number.length}` 
    newchild.innerHTML = "  <span>Um Elemento </span>"
    newchild.innerText = `Noco Elemento ${number.length}`

    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'input'

    newchild.appendChild(input)
    ul.appendChild(newchild)
}