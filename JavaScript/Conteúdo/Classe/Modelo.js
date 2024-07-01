class SmartPhone {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  ViewPhone() {
    console.log(this.model + " Foi Lançado em " + this.year);
  }
}

let myPhone = new SmartPhone("Redmi Note 5",2017)

myPhone.ViewPhone()