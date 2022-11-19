import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone, faLocationPin } from "@fortawesome/free-solid-svg-icons"

export const Footer = () => {
     return (
          <div className='footer-container' >
               <div className="footer-item footer-icon" >
                    <FontAwesomeIcon className=' footer-icon' icon={faEnvelope} />
                    <p><a href="mailto:kriti.utsav@kiit.ac.in" rel='noreferrer' target="_blank">kriti.utsav@kiit.ac.in</a></p>
               </div>
               <div className="footer-item footer-icon" >
                    <FontAwesomeIcon className=' footer-icon' icon={faPhone} />
                    <p><a href="#blank" rel='noreferrer' target="_blank">+91 9178358687</a></p>
               </div>
               <div className="footer-item" >
                    <FontAwesomeIcon className=' footer-icon' icon={faLocationPin} />
                    <p><a href="https://g.page/kiituni?share" rel='noreferrer' target="_blank">Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar.</a></p>
               </div>
          </div >
     )
}
