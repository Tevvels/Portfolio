import React from 'react'
import Navigation from '../components/Navigation'
import ProjectContainer from '../components/projectContainer';
function MyWork() {
const project = {
  name:"Deckbox",
  image:"p1 image",
  desc:"a replica of Moxfield using the skills I currently have",
  technologies: ['React',"Node","Express","Json",]
};
const project2 = {
  name:"p2",
  image:"p2 image",
  desc:"p2 description"
};


  return (
    <>
    <div className='grid projectGrid'>
  
        <ProjectContainer prop="projectGrid-a" project={project}/>
        <ProjectContainer prop="projectGrid-b" project={project2}/>
    <Navigation />

    </div>
    </>
  )
}

export default MyWork