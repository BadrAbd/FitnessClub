import React from 'react'
import Header from './header/header'
import './hero.css'
const hero = () => {
  return (
<div className="hero">
    <div className="left-h">
        <Header/>
    </div>
    <div className="right-h">Right side</div>

</div>  )
}

export default hero