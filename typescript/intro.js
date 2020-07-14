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
