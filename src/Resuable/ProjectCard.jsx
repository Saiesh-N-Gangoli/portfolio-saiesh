import React from 'react'
import './Styles/ProjectCard.css'

const ProjectCard = ({projectData}) => {
  return (
    <>
        <div className='project-main-card'>
        <h3 className='name'>{projectData.name}</h3>
        <p className='paragraph'>{projectData.description}</p>
        <h3 className='skills'>Tech: {projectData.skills.map((skill, index) => (
  <img 
    key={index}
    src={skill} 
    alt={`skill-${index}`} 
    width={40} 
    height={40}
    style={{ marginRight: "10px" }}
  />
))}</h3>
      </div>
    </>
  )
}

export default ProjectCard
