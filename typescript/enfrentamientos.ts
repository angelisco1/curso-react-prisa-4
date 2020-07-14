// const equipos = ['Real Madrid', 'Valencia', 'Barcelona', 'Sevilla']
/*
  Valencia - Barcelona
  Sevilla - Real Madrid
*/

const equipos = ['Real Madrid', 'Valencia', 'Barcelona', 'Sevilla', 'At Bilbao']
/*
  At Bilbao - Barcelona
  Sevilla - Valencia
  Real Madrid pasa de ronda
*/

// tsc -w enfrentamientos.ts
// node enfrentamientos.js

// Desestructuracion/Rest params/Spread Op
// Math.floor(Math.random()*6)


function shuffle(equipos: Array<string>): Array<string> {
  const equiposAleatorios = [];

  // for (let pos = 0; pos < equipos.length; pos++) {
  for (let pos = equipos.length-1; pos >= 0; pos--) {

    const posRandom = Math.floor(Math.random() * equipos.length);
    const [equipo] = equipos.splice(posRandom, 1)
    equiposAleatorios.push(equipo)

  }

  return equiposAleatorios;
}


['Real Madrid', 'Valencia', 'Barcelona', 'Sevilla']
['Real Madrid', 'Valencia', 'Sevilla']


// Usar recursion
function getEnfrentamientos(equipos: Array<string>): void {
  if (equipos.length > 1) {
    const [equipo1, equipo2, ...restoEquipos] = equipos;
    console.log(`${equipo1} vs ${equipo2}`)
    getEnfrentamientos(restoEquipos)
  } else {
    if (equipos.length === 1) {
      // const [ equipo1 ] = equipos
      // console.log(`${equipo1} pasa de ronda!`)
      console.log(`${equipos[0]} pasa de ronda!`)
    }
    console.log(`---- FIN ----`)
  }
}

const equiposRandom = shuffle(equipos)
getEnfrentamientos(equiposRandom)