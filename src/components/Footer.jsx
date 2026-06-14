import React from 'react'
import '../Styles/Footer.css'
export default function Footer() {
  return (
    <div className="Footer">Footer
    
      <p>Copyright 2026</p>
      <p>Designed and built by Chris</p>
      <ul className='socials'>
        <li className='socials-link'><a target='_blank' aria-label='linkedin' href="https://www.linkedin.com/in/christopher-benjamin-watkins/"><i className="fab fa-linkedin"></i></a></li>
        <li className='socials-link'><a target='_blank' aria-label="github"  href="https://github.com/Tevvels"><i className="fab fa-github"></i></a></li>
      </ul>
    </div>
  )
}
