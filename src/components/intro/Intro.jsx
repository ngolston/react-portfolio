import React from 'react'
import "./intro.css"
import Me from "../../images/headshot.jpeg"

function Intro(){
  return (
    <div className='i'>
        <div className='i-left'>
        <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Nicholas Golston</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Software Developer</div>
                    <div className="i-title-item">Full-Stack Developer</div>
                    </div>
                </div>
                <p className="i-desc">
                Junior full stack web developer with a background in IT working on desktops/servers.
                </p>
            </div>    
            
        </div>
        <div className='i-right'>
            <div className="i-bg"></div>
            <img src={Me} alt="" className='i-img' />
            </div>
    </div>
  )
}

export default Intro