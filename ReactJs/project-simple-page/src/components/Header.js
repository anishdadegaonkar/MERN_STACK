import React from 'react'
import headerImg from  '../assects/car.jpg'
import headerImg2 from '../assects/bg.jpeg'
import headerImg3 from '../assects/india-bg.webp'
import headerImg4 from '../assects/paraimage1.png'
import headerImg5 from '../assects/paraimage2.png'
import headerImg6 from '../assects/paraimage3.png'
function Header() {
  return (
    <div >
        <div><h2>This is my image gallery</h2></div>
        <hr/>
        <div className='display'>
        <img src={headerImg} alt="car" className='headerImage' />
        <img src={headerImg2} alt="car" className='headerImage' />
        <img src={headerImg3} alt="car" className='headerImage' />
        <img src={headerImg4} alt="car" className='headerImage' />
        <img src={headerImg5} alt="car" className='headerImage' />
        <img src={headerImg6} alt="car" className='headerImage' />
        </div>
        
    </div>
  )
}

export default Header
