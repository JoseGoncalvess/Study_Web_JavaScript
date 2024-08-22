
const form = document.getElementById("dev_form")
const section = document.getElementById("section_tecnologi")

form.addEventListener("submit", function (env) {
  env.preventDefault()
  newlanguage()
  
  
})
form.addEventListener("reset", function (env) {
  env.preventDefault()
  const namedev = document.getElementById("name_dev").value
  const experiencias = []
  section.querySelectorAll("div").forEach(element => {
    const nametecnologi = element.querySelector('input[type="text"]').value
    const experienci = element.querySelector('input[type="radio"]:checked').value
    experiencias.push(nametecnologi + +experienci )
    

  });

  alert(
    `"Desenvolvedor:${namedev}\n
    Com experiencia nas seguintes linguagem:
    ${experiencias.join(" | ")}
    `
  )
 
  
  
})


function newlanguage() {
 var number = section.children.length
  
  const title = document.createElement('h1')
  title.className ="lang"
  title.innerText ="Cadastrar Tecnologia:"

  const titleExperience = document.createElement('h3')
  titleExperience.className ="lang_time"
  titleExperience.innerText ="Tempo de experiencia:"

  const tecnologi = document.createElement('input')
  tecnologi.type="text"
  tecnologi.id ="lang_name"+number
  tecnologi.name ="lang_name"+number
  const labeltec = document.createElement("label")
  labeltec.id ="lang_name"+number
  labeltec.name ="lang_name"+number
  labeltec.innerText ="Nome da Tecnologia:"


  const input02 = document.createElement('input')
  input02.type ="radio"
  input02.name ="experience"+number
  input02.id = 'experience'+number
  const label02 = document.createElement("label")
  label02.name ="experience"+number
  label02.id = 'experience'+number
  label02.innerText ='1-2 anos'
  input02.value ='1-2 anos'

  const input05 = document.createElement('input')
  input05.type ="radio"
  input05.name ="experience"+number
  input05.id = 'experience'+number
  const label05 = document.createElement("label")
  label05.name ="experience"+number
  label05.id = 'experience'+number
  label05.innerText ='3-5 anos'
  input05.value ='3-5 anos'

  const input010 = document.createElement('input')
  input010.type ="radio"
  input010.value ="6-10 anos"
  input010.name ="experience"+number
  input010.id = 'experience'+number
  const label010 = document.createElement("label")
  label010.name ="experience"+number
  label010.id = 'experience'+number
  label010.innerText ='6-10 anos'



  const div = document.createElement("div")
  div.className ="new_tecnologe"

  div.appendChild(title)
  div.appendChild(labeltec)
  div.appendChild(tecnologi)
  div.appendChild(titleExperience)
  div.appendChild(input02)
  div.appendChild(label02)
  div.appendChild(input05)
  div.appendChild(label05)
  div.appendChild(input010)
  div.appendChild(label010)

  section.appendChild(div)


console.log(section.children)
  
}


