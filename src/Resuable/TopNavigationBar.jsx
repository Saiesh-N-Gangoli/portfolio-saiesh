import React from 'react'
import './Styles/MainPage.css'

const TopNavigationBar = ({ setActiveSection, activeSection}) => {
  return (
    <React.Fragment>
       <div className="topNavigationBar">
           <ul>
                <li onClick={() => setActiveSection('About Me')} style={{color: activeSection === 'About Me' ? "hsl(45, 100%, 72%)" : ""}}>About</li>
                <li onClick={() => setActiveSection('Resume')} style={{color: activeSection === 'Resume' ? "hsl(45, 100%, 72%)" : ""}}>Resume</li>
                <li onClick={() => setActiveSection('Projects')} style={{color: activeSection === 'Projects' ? "hsl(45, 100%, 72%)" : ""}}>Projects</li>
                <li onClick={() => setActiveSection('Contact')} style={{color: activeSection === 'Contact' ? "hsl(45, 100%, 72%)" : ""}}>Contact</li>
            </ul>
        </div>
    </React.Fragment>
  )
}

export default TopNavigationBar
