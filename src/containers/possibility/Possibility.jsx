import React from 'react'
import './possibility.css'
import "../header/header.css"
import possImg from '../../assets/possibility.png'



const Possiblity = () => (
  <section className='HeaderSection possibility_section flex'>
    <div className="img_cont">
      <div>
        <img src={possImg} alt="" />
      </div>
    </div>
    <div className="mainHeaderContent possibility_section_main flex">
      <p className='early_access_first'>Request Early Access to Get Started</p>
      <h1>The possibilities are beyond your imagination </h1>
      <p className='mainPara'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <p className='early_access'>Request Early Access to Get Started</p>
    </div>
  </section>
)


export default Possiblity