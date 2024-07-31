import React from 'react'
import '../App.css'
function Button(props) {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <button className='btn'>{props.data}</button>
    </div>
  )
}

export default Button
