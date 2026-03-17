import React from 'react'
import Navigation from '../components/Navigation'
import '../Styles/Landing.css'

function Landing() {
  return (
    <div className='grid landingGrid'>
    <Navigation />
    <h1  className={'landingName landingGrid-name'}>Christopher Watkins</h1>
    <div className={'landingTitle landingGrid-title'}>Developer/ this is also a good spot for descriptions and style points</div>
    <div className={'landingImage landingGrid-image'}>image</div>
    </div>
  )
}

export default Landing