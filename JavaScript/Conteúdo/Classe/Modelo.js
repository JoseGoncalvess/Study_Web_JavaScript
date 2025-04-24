class SmartPhone {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  ViewPhone() {
    console.log(this.model + " Foi Lançado em " + this.year);
  }
}

let myPhone = new SmartPhone("Redmi Note 5", 2017)

myPhone.ViewPhone()

//  UMA CLASSE E SEU METODO COSNSTRUTOR NAD AMAIS È QUE UMA FUNCTION QUE RETONA UM PROPOTIPO

let FsmartPhone = {
  model: "2024",
  year: "2020"
}

const sansung = {
  model: "S 23",
  __proto__: FsmartPhone
}

console.log(sansung.year);
