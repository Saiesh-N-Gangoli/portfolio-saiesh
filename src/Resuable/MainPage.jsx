import React, { useState } from 'react'
import SideBar from './SideBar'
import './Styles/MainPage.css'
import TopNavigationBar from './TopNavigationBar'
import About from '../Components/About'
import Resume from '../Components/Resume'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import { motion } from "framer-motion";

const MainPage = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  const renderContent = () => {
    switch (activeSection) {
      case 'About Me':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div style={{'display': 'flex', gap: '10px'}}>
      <SideBar/>
      <div className='side-container'>
      <div className='side-content'>
      <motion.div className='content-header'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
            <h2>{activeSection}</h2>
     </motion.div>
     <TopNavigationBar setActiveSection={setActiveSection} activeSection={activeSection}/>
      </div>
      <div className="aboutMeContents">
       {renderContent()}
      </div>
      </div>
    </div>
  )
}

export default MainPage
