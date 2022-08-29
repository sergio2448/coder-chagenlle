class Usuario {
  constructor(name, last_name) {
    this.name = name;
    this.lastName = last_name;
    this.books = [];
    this.pets = [];
  }

  getFullName() {
    const fullName = `${this.name} ${this.lastName}`
    return fullName;
  }

  addPet(pet) {
    this.pets.push(pet)
  }

  countPets() {
    const numberPets = this.pets.length
    return numberPets;
  }

  addBook(name, author) {
    this.books.push({name: name, author: author})
  }

  getBookNames() {
    const bookNames = this.books.map(book => book.name)
    return bookNames;
  }
}

const cliente = new Usuario("Sergio", "Arbelaez Duque");

console.log(cliente.getFullName())

cliente.addPet("Fiona")
cliente.addPet("Karlota")
cliente.addPet("Peter")
cliente.addPet("Derek")

console.log(cliente.pets)

console.log(cliente.countPets())

cliente.addBook("Divina comedia", "Dante Alighieri")
cliente.addBook("Orgullo y prejuicio", "Jane Austen")
cliente.addBook("Papá Goriot", "Honoré de Balzac")

console.log(cliente.books)

console.log(cliente.getBookNames())
