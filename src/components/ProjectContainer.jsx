import React from 'react'
import '../Styles/ProjectContainer.css'
import '../Styles/Grid.css'
function ProjectContainer(props) {
  const {project} = props;
  return (
    <div className={`projectContainer ${props.prop}`}>
      <h2>{project.name}</h2>
      <button className={`projectImage projectButton `} onClick={''}>{project.image}</button>
      <p>{project.desc}</p>
      
      </div>
  )
}

export default ProjectContainer