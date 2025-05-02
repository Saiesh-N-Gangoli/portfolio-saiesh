import React from 'react'
import '../Resuable/Styles/MainPage.css'
import { line1, line2, line3, line4, line5 } from '../Constants/AboutMeConstants'
import { faCloud, faObjectGroup, faPenClip, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
              <p>{line1}</p>
              <div className='what-i-am-doing'>
              <h2>What I'm Doing ?</h2>
              </div>
              <div className='main-skills-box'>
              <div className="content-divison">
              <div className='skill-box'>
              <div className='skill-box-header'>
              <h3 style={{fontSize: "16px"}}>Web Design</h3>
              <FontAwesomeIcon icon={faObjectGroup} color='hsl(35, 100%, 68%)'/>
              </div>
              <div className='skill-box-content'>
                  <p>{line2}</p>
              </div>
              </div>
              <div className='skill-box'>
              <div className='skill-box-header'>
              <h3 style={{fontSize: "16px"}}>Backend Development</h3>
                  <FontAwesomeIcon icon={faTerminal} color='hsl(35, 100%, 68%)'/>
              </div>
              <div className='skill-box-content'>
                  <p>{line4}</p>
              </div>
              </div>
              </div>
              <div className="content-divison">
              <div className='skill-box'>
              <div className='skill-box-header'>
              <h3 style={{fontSize: "16px"}}>Cloud Enthusiast</h3>
              <FontAwesomeIcon icon={faCloud} color='hsl(35, 100%, 68%)'/>
              </div>
              <div className='skill-box-content'>
                  <p>{line3}</p>
              </div>
              </div>
              <div className='skill-box'>
              <div className='skill-box-header'>
              <h3 style={{fontSize: "16px"}}>Content/Story Writer</h3>
                  <FontAwesomeIcon icon={faPenClip} color='hsl(35, 100%, 68%)'/>
              </div>
              <div className='skill-box-content'>
                  <p>{line5}</p>
              </div>
              </div>
              </div>
              </div>
    </motion.div>
  )
}

export default About
