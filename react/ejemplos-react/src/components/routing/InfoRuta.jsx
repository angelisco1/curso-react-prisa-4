import React from 'react'
import { withRouter } from 'react-router-dom'

const InfoRuta = (props) => {
  console.log(props)
  return (
    <div>
      {props.match.path}
    </div>
  )
}

export default withRouter(InfoRuta)
