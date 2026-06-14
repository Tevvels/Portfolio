import React from 'react'
import '../Styles/Landing.css'
import '../Styles/Grid.css'
import  WatkinsPhoto from'../assets/photos/Watkins_Chris_02.jpg';

function Landing() {
  return (
    <div className='grid landing landingGrid'>
      <h1  className={' box landingGrid-name'}>Christopher Watkins</h1>
     
      <div className={'box landingGrid-title'}>React Developer / Creative Engineer ** better words to be put here</div>
      <img className={'box landingGrid-image myPicture'} src={WatkinsPhoto}  />
      <div className={'box landingGrid-details'}>
        <p>Here to build beautfiul usable projects.</p>
        <p> To be able to power the future either on a computer or a machine or a robot. </p>
        <i>the landing page needs to grab the attention whoever is getting to it. its gotta win fast.</i>
      </div>
    </div>
  )
}

export default Landing