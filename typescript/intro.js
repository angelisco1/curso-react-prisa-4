var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var texto = 'Hola mundo!';
console.log(texto + '!!!!');
var num3 = 3;
// num3 = true;
function muestraMensaje(txt) {
    console.log(txt);
}
var esVerdad = true;
// esVerdad = 1;
var otroTexto;
otroTexto = 3;
otroTexto = 'Otro texto';
otroTexto = false;
var numTelefono = 673873984;
numTelefono = '+34673873984';
var telefono = 343434; // + '23'
console.log(typeof telefono);
telefono = '343434';
var colores = [1, 'azul', 'blanco', 'naranja', 5];
var direccion = ['C/ Santa Teresa', 7, 'A'];
console.log(direccion[0]);
console.log(colores[3]);
// let objDireccion: { calle: string, numero: number, letra: string } = {
var objDireccion = {
    calle: 'C/ Santa Teresa',
    numero: 7,
    letra: 'A'
};
console.log(objDireccion.letra);
var serie = {
    nombre: 'Vikings',
    temporadas: 5,
    episodios: 69,
    episodiosVistos: 45,
    episodiosPorVer: function (w) {
        return this.episodios - this.episodiosVistos;
    }
};
for (var k in serie) {
    console.log(k + ": " + serie[k]);
}
// for (let k of serie) {
//   console.log(`${k}: ${serie[k]}`)
// }
var vivoEn = 'Vivo en la \n' + objDireccion.calle + ' ' + objDireccion.numero + ' \n' + objDireccion.letra;
var vivoEn2 = "Vivo en la\n" + objDireccion.calle + " " + objDireccion.numero + "\n" + objDireccion.letra;
console.log(vivoEn);
console.log(vivoEn2);
// DESESTRUCTURACIÓN
var nombresSeries = ['The Walking Dead', 'The Leftovers', 'Gangland Undercover'];
var twd = nombresSeries[0];
var leftovers = nombresSeries[1];
var gUndercover = nombresSeries[2];
console.log(nombresSeries);
var titulo1 = nombresSeries[0], titulo2 = nombresSeries[1], titulo3 = nombresSeries[2];
console.log(titulo1);
console.log(titulo2);
console.log(titulo3);
// let objDireccion: Direccion = {
//   calle: 'C/ Santa Teresa',
//   numero: 7,
//   letra: 'A',
// }
var calle = '-----';
var c = objDireccion.calle, letra = objDireccion.letra, piso = objDireccion.numero;
console.log(c);
console.log(letra);
console.log(piso);
// SPREAD OP (...)
var titulosSeries = [].concat(nombresSeries);
titulosSeries.push('The 100');
console.log(titulosSeries);
console.log(nombresSeries);
var titulosSeries2 = nombresSeries.slice();
console.log(titulosSeries2);
var objDireccion2 = __assign({}, objDireccion);
objDireccion2.letra = 'C';
var objDireccion3 = Object.assign({}, objDireccion);
objDireccion3.letra = 'B';
console.log(objDireccion);
console.log(objDireccion2);
console.log(objDireccion3);
var n1 = 4;
var n2 = n1;
n2 += 1;
console.log(n1);
console.log(n2);
// REST PARAM
function getNumLoteria(sorteo) {
    var numsSorteo = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numsSorteo[_i - 1] = arguments[_i];
    }
    console.log(numsSorteo);
    return sorteo + ": " + numsSorteo.join(' - ');
}
console.log(getNumLoteria('Primitiva', 1, 2, 3, 4, 5));
console.log(getNumLoteria('Euromillón', 1, 2, 3, 4, 5, 6));
// let [p1, , , p4] = array1
// let unoYCuatro = [p1, p4]
var seriesBuscadas = nombresSeries.filter(function (titulo, pos) {
    return [0, 2].includes(pos);
});
console.log(seriesBuscadas);
var seriesTransformadas = nombresSeries.map(function (titulo) {
    return 'Serie: ' + titulo;
});
console.log(seriesTransformadas);
nombresSeries.forEach(function (titulo, pos) {
    console.log(pos + ": " + titulo);
});
var primerasLetras = nombresSeries.reduce(function (acc, titulo) {
    return acc += titulo[0];
}, '');
console.log(primerasLetras);
var tienenMasDe5 = nombresSeries.every(function (titulo) {
    return titulo.length > 14;
});
console.log(tienenMasDe5);
function sustituirString(texto, textoASustituir, sustituirPor) {
    if (sustituirPor === void 0) { sustituirPor = '*'; }
    // if (!sustituirPor) {
    //   sustituirPor = '*'
    // }
    var regExp = new RegExp(textoASustituir, 'ig');
    texto = texto.replace(regExp, sustituirPor);
    return texto;
}
console.log(sustituirString('Hola mundo!', 'o')); // H*la mund*!
console.log(sustituirString('Hola mundo!', 'o', '-')); // H*la mund*!
// const sumar = (n1, n2) => n1 + n2
var sumar = function (n1, n2) { return n1 + n2; };
console.log(sumar(1, 2));
// const returnObj = (name) => ({ [name]: name + '!' })
var returnObj = function (name) { return ({ name: name + '!' }); };
console.log(returnObj('Angel')); // { name: 'Angel!' }
function pelicula() {
    var _this = this;
    this.titulo = 'Titulo de la pelicula';
    var self = this;
    // setTimeout(function () {
    //   console.log(this.titulo)
    // }, 1500)
    // setTimeout(function () {
    //   console.log(self.titulo)
    // }, 1500)
    setTimeout(function () {
        console.log(_this.titulo);
    }, 1500);
}
pelicula();
function doble(valor) {
    var tipo = typeof valor;
    if (tipo == 'number') {
        return valor * 2;
    }
    else {
        return valor + valor;
    }
}
// let dobleDeTrue = doble(true);
var dobleDe4 = doble(4);
var dobleDeHola = doble('Hola');
console.log(dobleDe4);
console.log(dobleDeHola);
return '';
var desarrolladorJS = {
    lang: 'JS',
    nombre: 'A',
    apellidos: 'B'
};
var Animal = /** @class */ (function () {
    // public nombre: string;
    // private tipo: string;
    // constructor(nombre: string, tipo: string) {
    //   this.nombre = nombre
    //   this.tipo = tipo
    // }
    function Animal(nombre, _tipo, id) {
        this.nombre = nombre;
        this._tipo = _tipo;
        this.id = id;
    }
    Object.defineProperty(Animal.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (newTipo) {
            // if (false) {
            // }
            this._tipo = newTipo;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.toString = function () {
        return "Animal:\n      Nombre: " + this.nombre + "\n      Tipo: " + this.tipo;
    };
    return Animal;
}());
var roko = new Animal('Roko', 'perro', 2);
console.log(roko.nombre);
console.log(roko.toString());
console.log(roko.tipo);
roko.tipo = 'gato';
console.log(roko.tipo);
// roko.id = 3;
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, id) {
        var _this = _super.call(this, nombre, 'perro', id) || this;
        _this.nombre = nombre;
        _this.id = id;
        return _this;
    }
    Perro.prototype.toString = function () {
        return _super.prototype.toString.call(this) + "\n      Sonido: Guauu\n    ";
    };
    Perro.prototype.otraFuncion = function () {
        console.log(this._tipo);
    };
    return Perro;
}(Animal));
var charly = new Perro('Charly', 4);
console.log(charly.toString());
charly.otraFuncion();
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 100] = "Up";
    Direction[Direction["Down"] = 102] = "Down";
    Direction[Direction["Left"] = 99] = "Left";
    Direction[Direction["Right"] = 100] = "Right";
})(Direction || (Direction = {}));
;
console.log(Direction[100]);
var Paises;
(function (Paises) {
    Paises["Espanya"] = "es";
    Paises["Colombia"] = "co";
    Paises["Mexico"] = "mx";
    Paises["EEUU"] = "us";
})(Paises || (Paises = {}));
;
console.log(Paises.Colombia);
var Catalogo = /** @class */ (function () {
    function Catalogo() {
        this.catalogo = new Array();
    }
    Catalogo.prototype.addItem = function (item) {
        this.catalogo.push(item);
    };
    Catalogo.prototype.getItemsInventario = function () {
        return this.catalogo;
    };
    return Catalogo;
}());
var portatilHp = { marca: 'HP' };
var catalogoPortatil = new Catalogo();
catalogoPortatil.addItem(portatilHp);
catalogoPortatil.addItem({ marca: 'Lenovo' });
var items = catalogoPortatil.getItemsInventario();
console.log(items);
var catalogoAnimal = new Catalogo();
catalogoAnimal.addItem(roko);
catalogoAnimal.addItem(charly);
// catalogoAnimal.addItem(portatilHp)
var Disponible = /** @class */ (function () {
    function Disponible() {
        this.estaDisponible = false;
    }
    Disponible.prototype.toggleDisponible = function () {
        this.estaDisponible = !this.estaDisponible;
    };
    return Disponible;
}());
var Persona = /** @class */ (function () {
    function Persona(nombre, estaDisponible) {
        if (estaDisponible === void 0) { estaDisponible = false; }
        this.nombre = nombre;
        this.estaDisponible = estaDisponible;
    }
    return Persona;
}());
var HabitacionHotel = /** @class */ (function () {
    function HabitacionHotel(numHabitacion, estaDisponible) {
        if (estaDisponible === void 0) { estaDisponible = false; }
        this.numHabitacion = numHabitacion;
        this.estaDisponible = estaDisponible;
    }
    return HabitacionHotel;
}());
function applyMixins(mixins, clase) {
    mixins.forEach(function (mixin) {
        Object.getOwnPropertyNames(mixin.prototype).forEach(function (prop) {
            clase.prototype[prop] = mixin.prototype[prop];
        });
    });
}
applyMixins([Disponible], Persona);
applyMixins([Disponible], HabitacionHotel);
var angel = new Persona('Angel');
console.log(angel.estaDisponible);
angel.toggleDisponible();
console.log(angel.estaDisponible);
var hhotel = new HabitacionHotel(23);
console.log(hhotel.estaDisponible);
hhotel.toggleDisponible();
console.log(hhotel.estaDisponible);
