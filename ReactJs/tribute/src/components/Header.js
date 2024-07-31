import React from 'react'

const Header = (props) => {
    const Header ={
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        margin: '0',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif'
  
    }
  return (
    <div>
      <h3 style={Header}>{props.data}</h3>
    </div>
  )
}

export default Header
