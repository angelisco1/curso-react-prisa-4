// const equipos = ['Real Madrid', 'Valencia', 'Barcelona', 'Sevilla']
/*
  Valencia - Barcelona
  Sevilla - Real Madrid
*/
var equipos = ['Real Madrid', 'Valencia', 'Barcelona', 'Sevilla', 'At Bilbao'];
/*
  At Bilbao - Barcelona
  Sevilla - Valencia
  Real Madrid pasa de ronda
*/
// tsc -w enfrentamientos.ts
// node enfrentamientos.js
// Desestructuracion/Rest params/Spread Op
// Math.floor(Math.random()*6)
function shuffle(equipos) {
    var equiposAleatorios = [];
    // for (let pos = 0; pos < equipos.length; pos++) {
    for (var pos = equipos.length - 1; pos >= 0; pos--) {
        var posRandom = Math.floor(Math.random() * equipos.length);
        var equipo = equipos.splice(posRandom, 1)[0];
        equiposAleatorios.push(equipo);
    }
    return equiposAleatorios;
}
['Real Madrid', 'Valencia', 'Barcelona', 'Sevilla']['Real Madrid', 'Valencia', 'Sevilla'];
// Usar recursion
function getEnfrentamientos(equipos) {
    if (equipos.length > 1) {
        var equipo1 = equipos[0], equipo2 = equipos[1], restoEquipos = equipos.slice(2);
        console.log(equipo1 + " vs " + equipo2);
        getEnfrentamientos(restoEquipos);
    }
    else {
        if (equipos.length === 1) {
            // const [ equipo1 ] = equipos
            // console.log(`${equipo1} pasa de ronda!`)
            console.log(equipos[0] + " pasa de ronda!");
        }
        console.log("---- FIN ----");
    }
}
var equiposRandom = shuffle(equipos);
getEnfrentamientos(equiposRandom);
