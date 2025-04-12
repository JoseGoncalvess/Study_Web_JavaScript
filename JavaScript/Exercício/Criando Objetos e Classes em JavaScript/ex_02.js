class Pessoa {
    age;
    name;
    constructor(name, age,) {
        this.name = name;
        this.age = age
    }

    apresentation() {
        console.log(`Olá meu nome é ${this, this.name} e tenho ${this.age} anos !`);

    }
}


let anny = new Pessoa("Anny", 23)
let celine = new Pessoa("Celine", 23)


anny.apresentation()
celine.apresentation()


class Pessoa {
    nome; idade;
    constructor(nome, idade) {
        this.nome = nome; this.idade = idade;

    }
}

