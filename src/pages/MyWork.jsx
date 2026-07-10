import React from 'react'
import Navigation from '../components/Navigation'
import ProjectContainer from '../components/projectContainer';
function MyWork() {
const project = {
  name:"Deckbox",
  image:"p1 image",
  desc:"a replica of Moxfield using the skills I currently have",
  technologies: ['React',"Node","Express","Json",],
  github:"https://github.com/Tevvels/deckbox",
  Demo:"https://deckbox-r8ok.vercel.app/"
};
const project2 = {
  name:"Loya Granite",
  image:"p2 image",
  desc:"A commerical site to showcase Loya Granite's products and work",
  technologies: ['React', 'Node', 'Express', 'Json'],
  github:"https://github.com/mrivera0014/loya-granite",
  Demo:"https://loyagranite.com/"
};


  return (
    <div className=' projectGrid'>
  
        <ProjectContainer prop="projectGrid-a" project={project}/>
        <ProjectContainer prop="projectGrid-b" project={project2}/>

    </div>
  )
}

export default MyWork