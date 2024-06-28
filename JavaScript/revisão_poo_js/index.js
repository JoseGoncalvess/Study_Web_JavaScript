class Book {
  titulo;
  autor;
  page;
  category;

  book(titulo, autor, page, category) {
    this.titulo = titulo;
    this.autor = autor;
    this.page = page;
    this.category = category;
  }
}

const book = new Book().book("Do mil ao Milhão ser cortar o caferzinho","Primo Rico",180.,["Investimento", "Dicdatico"])

console.log(book.titulo)