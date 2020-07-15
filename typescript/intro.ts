let texto: string = 'Hola mundo!';
console.log(texto + '!!!!')

let num3: number = 3;
// num3 = true;

function muestraMensaje(txt: string): void {
  console.log(txt)
}

let esVerdad = true;
// esVerdad = 1;

let otroTexto: any;
otroTexto = 3;
otroTexto = 'Otro texto';
otroTexto = false;


let numTelefono: number | string = 673873984
numTelefono = '+34673873984'

type numberOrString = number | string;

let telefono: numberOrString = 343434 // + '23'
console.log(typeof telefono)

telefono = '343434'

let colores: Array<numberOrString> = [1, 'azul', 'blanco', 'naranja', 5]
let direccion: [string, number, string] = ['C/ Santa Teresa', 7, 'A']

console.log(direccion[0])
console.log(colores[3])

interface Direccion {
  calle: string,
  numero: number,
  letra: string
}

// let objDireccion: { calle: string, numero: number, letra: string } = {
let objDireccion: Direccion = {
  calle: 'C/ Santa Teresa',
  numero: 7,
  letra: 'A',
}

console.log(objDireccion.letra)

interface Serie {
  nombre: string,
  temporadas: number,
  episodios: number,
  episodiosVistos: number,
  episodiosPorVer: (w: string) => number
}

const serie: Serie = {
  nombre: 'Vikings',
  temporadas: 5,
  episodios: 69,
  episodiosVistos: 45,
  episodiosPorVer: function(w) {
    return this.episodios - this.episodiosVistos;
  }
}

for (let k in serie) {
  console.log(`${k}: ${serie[k]}`)
}

// for (let k of serie) {
//   console.log(`${k}: ${serie[k]}`)
// }

let vivoEn = 'Vivo en la \n' + objDireccion.calle + ' ' + objDireccion.numero + ' \n' + objDireccion.letra;

let vivoEn2 = `Vivo en la
${objDireccion.calle} ${objDireccion.numero}
${objDireccion.letra}`;

console.log(vivoEn)
console.log(vivoEn2)

// DESESTRUCTURACIÓN


const nombresSeries: Array<string> = ['The Walking Dead', 'The Leftovers', 'Gangland Undercover']
let twd = nombresSeries[0]
let leftovers = nombresSeries[1]
let gUndercover = nombresSeries[2]
console.log(nombresSeries)

let [titulo1, titulo2, titulo3] = nombresSeries
console.log(titulo1)
console.log(titulo2)
console.log(titulo3)

// let objDireccion: Direccion = {
//   calle: 'C/ Santa Teresa',
//   numero: 7,
//   letra: 'A',
// }

let calle = '-----'

let {calle: c, letra, numero: piso} = objDireccion;
console.log(c)
console.log(letra)
console.log(piso)


// SPREAD OP (...)


let titulosSeries = [].concat(nombresSeries);
titulosSeries.push('The 100')
console.log(titulosSeries)
console.log(nombresSeries)

let titulosSeries2 = [...nombresSeries];
console.log(titulosSeries2)

let objDireccion2 = {...objDireccion}
objDireccion2.letra = 'C'
let objDireccion3 = Object.assign({}, objDireccion)
objDireccion3.letra = 'B'

console.log(objDireccion)
console.log(objDireccion2)
console.log(objDireccion3)

let n1: number = 4;
let n2: number = n1
n2 += 1
console.log(n1)
console.log(n2)


// REST PARAM

function getNumLoteria(sorteo: string, ...numsSorteo: Array<number>): string {
  console.log(numsSorteo)
  return `${sorteo}: ${numsSorteo.join(' - ')}`
}

console.log(getNumLoteria('Primitiva', 1, 2, 3, 4, 5))
console.log(getNumLoteria('Euromillón', 1, 2, 3, 4, 5, 6))

// let [p1, , , p4] = array1
// let unoYCuatro = [p1, p4]

let seriesBuscadas = nombresSeries.filter((titulo, pos) => {
  return [0, 2].includes(pos);
})

console.log(seriesBuscadas)

let seriesTransformadas = nombresSeries.map((titulo) => {
  return 'Serie: ' + titulo
})

console.log(seriesTransformadas)

nombresSeries.forEach((titulo, pos) => {
  console.log(`${pos}: ${titulo}`)
})


let primerasLetras = nombresSeries.reduce((acc, titulo) => {
  return acc += titulo[0]
}, '')

console.log(primerasLetras)

let tienenMasDe5 = nombresSeries.every((titulo) => {
  return titulo.length > 14;
})

console.log(tienenMasDe5)


function sustituirString(texto: string, textoASustituir: string, sustituirPor: string = '*'): string {
  // if (!sustituirPor) {
  //   sustituirPor = '*'
  // }
  const regExp = new RegExp(textoASustituir, 'ig');
  texto = texto.replace(regExp, sustituirPor);
  return texto;
}

console.log(sustituirString('Hola mundo!', 'o')) // H*la mund*!
console.log(sustituirString('Hola mundo!', 'o', '-')) // H*la mund*!



// const sumar = (n1, n2) => n1 + n2
const sumar = (n1, n2) => { return n1 + n2 }
console.log(sumar(1, 2))

// const returnObj = (name) => ({ [name]: name + '!' })
const returnObj = (name) => ({ name: name + '!' })
console.log(returnObj('Angel')) // { name: 'Angel!' }


function pelicula() {
  this.titulo = 'Titulo de la pelicula'
  var self = this;

  // setTimeout(function () {
  //   console.log(this.titulo)
  // }, 1500)
  // setTimeout(function () {
  //   console.log(self.titulo)
  // }, 1500)
  setTimeout(() => {
    console.log(this.titulo)
  }, 1500)
}

pelicula()


function doble(valor: number);
function doble(valor: string);

function doble(valor: any) {
  const tipo = typeof valor;
  if (tipo == 'number') {
    return valor * 2;
  } else {
    return valor + valor;
  }
}

// let dobleDeTrue = doble(true);
let dobleDe4 = doble(4);
let dobleDeHola = doble('Hola');
console.log(dobleDe4)
console.log(dobleDeHola)


interface Direccion {
  cp?: number
}


interface Persona {
  nombre: string,
  apellidos: string,
  dni?: string,
  direccion?: Direccion
}

interface Desarrollador extends Persona {
  lang: string,
  fn: () => {
    return ''
  }
}

const desarrolladorJS: Desarrollador = {
  lang: 'JS',
  nombre: 'A',
  apellidos: 'B',
}

class Animal {
  // public nombre: string;
  // private tipo: string;

  // constructor(nombre: string, tipo: string) {
  //   this.nombre = nombre
  //   this.tipo = tipo
  // }
  constructor(public nombre: string, protected _tipo: string, readonly id: number) { }

  get tipo(): string {
    return this._tipo;
  }

  set tipo(newTipo: string) {
    // if (false) {

    // }
    this._tipo = newTipo
  }

  toString(): string {
    return `Animal:
      Nombre: ${this.nombre}
      Tipo: ${this.tipo}`
  }
}

const roko = new Animal('Roko', 'perro', 2)
console.log(roko.nombre)
console.log(roko.toString())
console.log(roko.tipo)
roko.tipo = 'gato'
console.log(roko.tipo)
// roko.id = 3;


class Perro extends Animal {
  constructor(public nombre: string, readonly id: number) {
    super(nombre, 'perro', id)
  }

  toString() {
    return `${super.toString()}
      Sonido: Guauu
    `
  }

  otraFuncion() {
    console.log(this._tipo)
  }
}

const charly = new Perro('Charly', 4)
console.log(charly.toString())
charly.otraFuncion()



enum Direction { Up = 100, Down = 102, Left = 99, Right };
console.log(Direction[100]);

enum Paises { Espanya = 'es', Colombia = 'co', Mexico = 'mx', EEUU = 'us' };
console.log(Paises.Colombia)


interface Inventario<T> {
  addItem: (item: T) => void;
  getItemsInventario: () => Array<T>;
}

interface Portatil {
  marca: string;
}

class Catalogo<T> implements Inventario<T> {
  private catalogo = new Array<T>();
  addItem(item: T) {
    this.catalogo.push(item);
  }
  getItemsInventario(): Array<T> {
    return this.catalogo;
  }
}

const portatilHp = {marca: 'HP'}

let catalogoPortatil = new Catalogo<Portatil>();
catalogoPortatil.addItem(portatilHp)
catalogoPortatil.addItem({marca: 'Lenovo'});
let items = catalogoPortatil.getItemsInventario();
console.log(items)


let catalogoAnimal = new Catalogo<Animal>();
catalogoAnimal.addItem(roko)
catalogoAnimal.addItem(charly)
// catalogoAnimal.addItem(portatilHp)




class Disponible {
  public estaDisponible: boolean = false;

  toggleDisponible() {
    this.estaDisponible = !this.estaDisponible;
  }
}

class Persona {
  constructor(public nombre: string, public estaDisponible: boolean = false) {}
}

class HabitacionHotel {
  constructor(public numHabitacion: number, public estaDisponible: boolean = false) {}
}


interface Persona extends Disponible {}
interface HabitacionHotel extends Disponible {}

function applyMixins(mixins, clase) {
  mixins.forEach(mixin => {
    Object.getOwnPropertyNames(mixin.prototype).forEach(prop => {
      clase.prototype[prop] = mixin.prototype[prop]
    })
  })
}

applyMixins([Disponible], Persona);
applyMixins([Disponible], HabitacionHotel);

const angel = new Persona('Angel')
console.log(angel.estaDisponible)
angel.toggleDisponible()
console.log(angel.estaDisponible)

const hhotel = new HabitacionHotel(23)
console.log(hhotel.estaDisponible)
hhotel.toggleDisponible()
console.log(hhotel.estaDisponible)