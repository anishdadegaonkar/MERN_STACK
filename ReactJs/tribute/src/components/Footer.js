import React from 'react'

const Footer = (props) => {
    const styles ={
        backgroundColor: '#333',
        padding: '20px 0',
        borderTop: '1px solid #ddd',
        boxSizing: 'border-box',
        textAlign: 'center',
        color: '#fff',
        fontSize: '14px',
        lineHeight: '20px',
        fontFamily: 'Arial, sans-serif'
    }
  return (
    <div>
        <footer className="footer" style={styles}>
            <div className="container">
                <p className="text-center">
                    {props.data}
                </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
