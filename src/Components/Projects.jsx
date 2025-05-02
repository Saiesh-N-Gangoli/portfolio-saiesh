import React from 'react'
import './Styles/ProjectStyles.css'
import { projectData } from '../Constants/ProjectJSON'
import ProjectCard from '../Resuable/ProjectCard'

const Projects = () => {
  return (
    <div>
      <div className="project-filters">
        <ul>
            <li>All</li>
            <li>Web Designs</li>
            <li>Applications</li>
            <li>Machine Learning</li>
        </ul>
      </div>
      <div className="projectCards">
      {projectData.map((project, index)=>(
        <>
        <ProjectCard key={index} projectData={project}/>
        </>
      ))}
      </div>
    </div>
  )
}

export default Projects
