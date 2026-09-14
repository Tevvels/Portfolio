import React from "react";
import "../Styles/ProjectContainer.css";
import "../Styles/Grid.css";

function ProjectContainer(props) {
  const { project } = props;
  return (
    <div className={`projectContainer ${props.prop} glass-content`}>
      <div className="projectHeader">
        <h2 className="projectName">{project.name}</h2>
        <p className="projectDesc">{project.desc}</p>
      </div>
      <div className="projectPreview">
        <span className="projectPlaceholder">{project.image}</span>
      </div>
      <div className="projectMeta ">
        <div className="projectTechnologies">
          {project.technologies ? (
            project.technologies.map((tech, index) => (
              <span key={index} className="projectTechnology">
                {tech}
              </span>
            ))
          ) : (
            <p>No technologies listed</p>
          )}
        </div>
        <div className="projectLinks ">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.Demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
