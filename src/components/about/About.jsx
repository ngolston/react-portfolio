import React from 'react'
import "./about.css"
import Me2 from "../../images/IMG_1872.jpeg"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Me2} alt="" className='a-img'/>
            </div>    
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            UP AND COMING WEB DEVELOPER
            </p>
            <p className="a-desc">
            Junior full stack web developer with a background in IT working on desktops/servers.
            </p>
        </div>
    </div>
  )
}

export default About