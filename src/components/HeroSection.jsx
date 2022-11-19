import React from 'react'
import "./HeroSection.css"
import kritiDesign from "../assets/kriti-design.png";
import kiitLogo from "../assets/kiit-logo.png"
import aisLogo from "../assets/ais-logo.png"
import homeBanner from "../assets/home-banner.png"

export const HeroSection = () => {
     return (
          <div className='hero-container'>
               <div>
                    <div className='hero-logo'>
                         <img src={kritiDesign} alt="kriti design" />
                    </div>
                    <div className='hero-details'>
                         <div className='hero-details-info'>
                              <h1>36TH INTER UNIVERSITY EAST ZONE YOUTH FESTIVAL</h1>
                              <h3>23rd - 27th December 2022</h3>
                         </div>
                         <div className='hero-details-schools'>
                              <div>
                                   <p>Organised by</p>
                                   <img src={kiitLogo} alt="kiit" />
                              </div>
                              <div>
                                   <p>Under the Aegis of</p>
                                   <img src={aisLogo} alt="ais" />
                              </div>
                         </div>
                    </div>
               </div>
               <div className='hero-banner'>
                    <img src={homeBanner} alt="" />
               </div>
          </div>
     )
}
