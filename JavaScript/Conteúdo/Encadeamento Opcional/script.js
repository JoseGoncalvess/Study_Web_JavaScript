// FUNCIONA PARECIDO COM O ".alguamcoisa", mas ele faz uso do "?" encadeando as propriedades
// PERMITINDO O ACESSO A PARAMETROS SEM VERIFICAR A NULIDADE
const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }

  // console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd)

// se eu coloco "?." ele verifica o item s enão for numo ele consegue ler o priximo retornaod  undefinids
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)