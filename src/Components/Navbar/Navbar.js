import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  
  return (
    <nav className="navbar " style={{fontFamily:"sans-serif",fontSize:"1.3rem"}}>
      <div className="logo">fantasygyaan.com</div>
      <div className="menu">
       
        <Link to="/">Home</Link>

        <Link to="/Daily-matches-predictions">Matches</Link>

        <Link to="/latest-cricket-news">News</Link>

        <Link to="/about-fantasygyaan">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
