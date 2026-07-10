import React from 'react'
import '../Styles/ProjectContainer.css'
import '../Styles/Grid.css'
function ProjectContainer(props) {
  const {project} = props;
  return (
    <div className={`projectContainer ${props.prop}`}>
      <h2 className="projectName">{project.name}</h2>
      <button className={`projectImage projectButton `} onClick={''} placeholder={`this is going to ${project.name}`}>{project.image}</button>
      <p className='projectDesc'>{project.desc}</p>
      <div className="demo">
        <a href={project.Demo} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
      <div className="github">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>


      {project.technologies ? project.technologies.map((tech,index)=>(
        <div
        key={index}
        >
          {tech}
        </div>
      )):<p>No tech</p>}      
      </div>
  )
}

export default ProjectContainer