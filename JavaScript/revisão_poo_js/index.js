class Book {
  constructor(titulo, autor, page, category) {
    this.titulo = titulo;
    this.autor = autor;
    this.page = page;
    this.category = category;
  }

  thisisBook(){
    console.log(`O lirvro ${this.titulo} possui ${this.page}`)
  }
}

const book = new Book("Do mil ao Milhão ser cortar o caferzinho","Primo Rico",180.,["Investimento", "Dicdatico"])

console.log(book.titulo)
console.log(book.category)
console.log(book.page)