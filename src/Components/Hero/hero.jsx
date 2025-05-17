import React from 'react'
import Header from './header/header'
import './hero.css'
const hero = () => {
  return (
<div className="hero">
    <div className="left-h">
        <Header/>
{/* The best ad */}
        <div className="the-best-ad">
            <div></div>
            <span>The best fitness club in the town</span>
        </div>
{/* Hero heading */}
<div className="hero-text"></div>
    <div>
        <span className="stroke-text">Shape </span>
        <span>Your</span>
    </div>
    <div><span>
        Ideal Body</span>
    </div>

    </div>
    <div className="right-h">Right side</div>

</div>  )
}

export default hero