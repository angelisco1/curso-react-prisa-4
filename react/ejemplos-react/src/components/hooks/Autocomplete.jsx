import React, { useState, useEffect } from 'react'

const Autocomplete = () => {
  const [nombreCocktail, setNombreCocktail] = useState('mojito')
  const [listaCocktails, setListaCocktails] = useState([])

  useEffect(() => {
    if (nombreCocktail.length > 3) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreCocktail}`)
        .then(resp => resp.json())
        .then(datos => {
          // const cocktails = datos.drinks || [];
          const cocktails = datos.drinks ? datos.drinks : [];
          setListaCocktails(cocktails)
        })
    }
  }, [nombreCocktail])

  const handleChangeCocktail = (event) => {
    setNombreCocktail(event.target.value)
  }

  const resultadoCocktails = listaCocktails.map(cocktail => {
    return (
      <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
    )
  })

  return (
    <div>
      <input
        type="text"
        value={nombreCocktail}
        // onChange={(e) => setNombreCocktail(e.target.value)}
        onChange={handleChangeCocktail}
      />
      <hr/>
      <ul>
        {resultadoCocktails}
      </ul>
    </div>
  )
}

export default Autocomplete
