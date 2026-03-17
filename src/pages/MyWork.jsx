import React from 'react'
import Navigation from '../components/Navigation'
import ProjectContainer from '../components/projectContainer';
function MyWork() {
const project = {
  name:"p1",
  image:"p1 image",
  desc:"p1 description"
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