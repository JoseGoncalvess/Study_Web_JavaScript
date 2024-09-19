const Person = {
    name: "Guga",
    job : "Developer",
    parents: [ "Anny","Maria"]
}

// VERSSÂO CONVENCIONAL
const nameold = Person.name


// FOMA DESISTRUTURADA DO OBJETO 
const {job, Newname, parents} = Person

//OU COM ARRAYS RESPEITADNO A POSIÇÂOD E CADA ITEM

const [father, mother]  = parents
console.log(mother)

function CreatedUser({name, job, parents}) {
    const id = Math.floor(Math.random()* 9999)
    return{
        id,
        name,
        job,
        parents
    }
    
}
const user = CreatedUser("MAlvem", "Analista",["Gui","Gonçalves"])
console.log(Person)