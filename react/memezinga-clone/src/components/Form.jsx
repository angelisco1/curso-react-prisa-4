import React from 'react'

const Form = ({textoArriba, textoAbajo, color, onHandleChangeMeme}) => {
  return (
    <div>
      <form>
        <div style={styles.cajaCampo}>
          <label style={styles.label} htmlFor="textoArriba">Texto arriba:</label>
          <input style={styles.input} type="text" id="textoArriba" name="textoArriba" value={textoArriba} onChange={onHandleChangeMeme} />
        </div>
        <div style={styles.cajaCampo}>
          <label style={styles.label} htmlFor="textoAbajo">Texto abajo:</label>
          <input style={styles.input} type="text" id="textoAbajo" name="textoAbajo" value={textoAbajo} onChange={onHandleChangeMeme} />
        </div>
        <div style={styles.cajaCampo}>
          <label style={styles.label} htmlFor="color">Color:</label>
          <input style={styles.input} type="color" id="color" name="color" value={color} onChange={onHandleChangeMeme} />
        </div>
        <button type="button">Guardar meme</button>
      </form>
    </div>
  )
}

const styles = {
  cajaCampo: {
    margin: '20px auto'
  },
  input: {
    backgroundColor: '#EEEEEE',
    border: '1px solid transparent',
    height: '50px',
    borderRadius: '10px'
  },
  label: {
    display: 'block',
    margin: '10px 0'
  }
}

export default Form
