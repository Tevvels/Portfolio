import React from 'react'
import '../Styles/ProjectContainer.css'
import '../Styles/Grid.css'
function ProjectContainer(props) {
  const {project} = props;
  return (
    <div className={`projectContainer ${props.prop}`}>
      <h2>{project.name}</h2>
      <button className={`projectImage projectButton `} onClick={''} placeholder={`this is going to ${project.name}`}>{project.image}</button>
      <p>{project.desc}</p>
      
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