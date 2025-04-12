class Carro {
    ageOfCar;
    modelCar;
    colorCar
    constructor(modelCar, ageOfCar, colorCar) {
        this.modelCar = modelCar;
        this.colorCar = colorCar
        this.ageOfCar = ageOfCar
    }

    showCar(){
        console.log(`O carro ${this.modelCar} na cor ${this.colorCar} fabricado em ${this.ageOfCar}`);
        
    }
}

let mustang = new Carro("Mustang","1800","Preto")
let fusca = new Carro("Fusca","1987","Azul")

mustang.showCar()
fusca.showCar()