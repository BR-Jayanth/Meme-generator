import React from 'react'
import logo from "../images/Troll Face.png"

export default function Header() {
  // render header section
  return (
    <nav className='header'>
        <img className='header-logo' src={logo} alt="App Logo" />
        <h2 className='header-title'>Meme Generator</h2>
        <h4 className='header-title-side'>React - Project</h4>
    </nav>
  )
}
