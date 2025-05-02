import React from 'react'
import './Styles/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  return (
    <div className='navigation-container'>
    <div className="image-container">
    <img src='https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/my-avatar.png' alt='image'/>
    </div>
    <h4>Saiesh N Gangoli</h4>
    <h6>Full-Stack Developer</h6>
    <hr/>
    <div className="sideBarContent">
    <div className='iconContainer'>
    <FontAwesomeIcon icon={faEnvelope} color='rgba(255,219,112,1)'/>
    </div>
    <div>
    <h5 className='iconHeader'>EMAIL</h5>
    <h5 className='iconHeader-content' title='Send Email'><a href="mailto:saieshd3@gmail.com">saieshd3@gmail.com</a></h5>
    </div>
    </div>
    <div className="sideBarContent">
    <div className='iconContainer'>
    <FontAwesomeIcon icon={faCakeCandles} color='rgba(255,219,112,1)'/>
    </div>
    <div>
    <h5 className='iconHeader'>BIRTHDAY</h5>
    <h5 className='iconHeader-content'>26th August, 2001</h5>
    </div>
    </div>
    <div className="sideBarContent">
    <div>
    <div className='iconContainer'>
    <FontAwesomeIcon icon={faPhone} color='rgba(255,219,112,1)'/>
    </div>
    </div>
    <div>
    <h5 className='iconHeader'>PHONE</h5>
    <h5 className='iconHeader-content'>+91 8197215817</h5>
    </div>
    </div>    
    <div className="sideBarContent">
    <div>
    <div className='iconContainer'>
    <FontAwesomeIcon icon={faLocationDot} color='rgba(255,219,112,1)'/>
    </div>
    </div>
    <div>
    <h5 className='iconHeader'>LOCATION</h5>
    <h5 className='iconHeader-content'>Bengaluru, Karnataka</h5>
    </div>
    </div>
    </div>
  )
}

export default SideBar
