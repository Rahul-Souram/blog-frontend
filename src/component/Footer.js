import React from 'react'
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <div className='footer-container'>
      <Link to='/'  className="Footer-Link">
      MovieBlog
      </Link>
      <div  className="Footer-Link-copy"> Copyright &copy; MovieBlog</div>
    </div>
  )
}

export default Footer