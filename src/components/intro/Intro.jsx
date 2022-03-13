import React from 'react'
import "./intro.css"

function Intro(){
  return (
    <div className='i'>
        <div className='i-left'>
        <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Nicholas Golston</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="-title-item">Web Developer</div>
                    <div className="-title-item">Software Developer</div>
                    <div className="-title-item">Full-Stack Developer</div>
                    </div>
                </div>
            </div>    
        </div>
        <div className='i-right'>right</div>
    </div>
  )
}

export default Intro