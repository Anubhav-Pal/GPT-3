import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import hamburger from '../../assets/hamburger.png'



const Navbar = () => (
  <section className='navbar flex'>
    <div className="navbarLogo flex">
      <a href="" className='flex'>
        <img src={logo} alt="logo" />
      </a>
    </div>
    <div className="navbarLinks flex">
      <div className="navbarLinksMain flex">
        <li><a href="">Home</a></li>
        <li><a href="">What is GPT?</a></li>
        <li><a href="">Open AI</a></li>
        <li><a href="">Case Studies</a></li>
        <li><a href="">Library</a></li>
      </div>
      <div className='navbarLinksButtons flex'>
        <a href="" className='SignInButton'>Sign in</a>
        <a href="" className='SignUpButton'>Sign up</a>
      </div>
      
    </div>
  </section>
)

export default Navbar