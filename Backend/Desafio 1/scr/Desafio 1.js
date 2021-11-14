class Usuario {
  constructor(nombre, apellido, mascota, libros) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = mascota;
    this.libros = libros;
  }

  getFullName() {
    console.log(`${this.nombre} ${this.apellido}`);
  }

  addMascota(nombre) {
    this.mascotas.push(nombre);
    console.log(this.mascotas);
  }

  countMascotas() {
    console.log(this.mascotas.length);
  }

  addBook(titulo, autor) {
    this.libros.push({ titulo: titulo, autor: autor });
    console.log(`Se Agrego tu Libro Nombre: ${titulo} Autor: ${autor}`);
  }

  getBookNames() {
    console.log(this.libros.map((titulo) => titulo.titulo));
  }
}

const usuario = new Usuario(
    "Lautaro",
    "Francisco",
    ["Perro", "Gato"],
    [{ titulo: "That time I reincarnated as a slime", autor: "Fuse" }]
);

usuario.getFullName();
usuario.addMascota("Tortuga");
usuario.countMascotas();
usuario.addBook("No game no life", "Yuu Kamiya");
usuario.getBookNames();

