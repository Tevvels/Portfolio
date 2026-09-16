import React from "react";
import ProjectContainer from "../components/ProjectContainer";
function MyWork() {
  const project = {
    name: "Deckbox",
    image: "p1 image",
    desc: "a replica of Moxfield using the skills I currently have",
    technologies: ["React", "Node", "Express", "Json"],
    github: "https://github.com/Tevvels/deckbox",
    Demo: "https://deckbox-r8ok.vercel.app/",
  };


  return (
    <section className="workSection">
      <div className="sectionHeader glass-content ">
        <h2>Selected Engineering Systems</h2>
        <p>
          Production applications demonstrating integrated web protocols and
          state management.
        </p>
      </div>

      {/* Pure Grid Wrapper layout */}
      <div className="projectGrid glass-parallax-background">
        <ProjectContainer prop="project-deckbox" project={project} />

      </div>
    </section>
  );
}

export default MyWork;
