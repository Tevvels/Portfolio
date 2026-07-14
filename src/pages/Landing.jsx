import React from 'react'
import '../Styles/Landing.css'
import '../Styles/Grid.css'
import  WatkinsPhoto from'../assets/photos/Watkins_Chris_02.jpg';

function Landing() {
  return (
    <div className=' landing landingGrid'>
      {/* hook box */}
      <div className={'box landingGrid-hook'}>
        <span className={'box landingGrid-hook-text'}>Hello, I'm</span>
          <h1 className={'box landingGrid-name'}>Christopher Watkins</h1>
          </div>

    {/* engineering focus title box */}
      <div className={'box landingGrid-title'}>
          <h2 className={'box landingGrid-title-text'}>Full-Stack Engineer & Creative Developer</h2>
          <span className={'sub-matrix-text'}> SYSTEM_ARCH// CLIENT_UI</span>
        </div>
    {/* Profile / Professional Portrait Space */}
    <div className={'box landingGrid-image-wrapper'}>
    
    
      <img className={'box landingGrid-image '} src={WatkinsPhoto}  />


      </div>
    <div className={'box landingGrid-details'}>
      <p className={'primary-manifesto'}>Here to build beautiful, usable projects.</p>
      <p className={'call-to-action'}>Let's build something amazing together.</p>
    </div>

    </div>
  )
}

export default Landing