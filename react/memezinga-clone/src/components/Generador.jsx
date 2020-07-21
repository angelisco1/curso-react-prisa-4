import React, { Component } from 'react'
import Meme from './Meme';
import Form from './Form';

export default class Generador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textoArriba: "Texto arriba",
      textoAbajo: "Texto abajo",
      imgUrl: "https://i.imgflip.com/9ehk.jpg",
      color: "#000000",
    }
    this.handleChangeMeme = this.handleChangeMeme.bind(this)
  }

  handleChangeMeme(e) {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {textoAbajo, textoArriba, color, imgUrl} = this.state;

    return (
      <div>
        <h1>Memezinga clone</h1>
        <div style={styles.generador}>
          <Meme
            textoArriba={textoArriba}
            textoAbajo={textoAbajo}
            imgUrl={imgUrl}
            color={color}
          />
          <Form
            textoArriba={textoArriba}
            textoAbajo={textoAbajo}
            imgUrl={imgUrl}
            color={color}
            onHandleChangeMeme={this.handleChangeMeme}
          />
        </div>
      </div>
    )
  }
}


const styles = {
  generador: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}