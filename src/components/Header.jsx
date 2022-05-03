import React from 'react'
import map from '../images/map.png'

function Header() {
  return (
    <div className='header'>
        <img src={map} alt="" className='header-map'/>
        <h1 className='header-title'>my travel journal.</h1>
    </div>
  )
}

export default Header