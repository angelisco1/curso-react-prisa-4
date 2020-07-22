import React from 'react';

export const withHover = (CmpWrapped) => {
  return (props) => {
    // console.log(props)
    return (
      <div className="sombreado">
        <CmpWrapped {...props} />
        {/* <CmpWrapped sugus={props.sugus} />
        <CmpWrapped titulo={props.tituo} descripcion={props.descripcion} /> */}
      </div>
    )
  }
}