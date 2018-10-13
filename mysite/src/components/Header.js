import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-name'>
        <a href='/'>Daniel Pifer</a>
      </div>
      <div className='header-projects'> 
        <NavLink to='/projects'>Projects</NavLink>       
      </div>
      <div className='header-github'>
        <a target='-blank' href='https://github.com/piferdg'>GitHub</a>
      </div>
      <div className='header-linkedin'>
        <a target='-blank' href='https://www.linkedin.com/in/daniel-pifer/'>Linkedin</a>
      </div>
      <div className='header-contact'>   
        <NavLink to='/contact'>Contact</NavLink>        
      </div>
    </div>
  )
}

export default Header