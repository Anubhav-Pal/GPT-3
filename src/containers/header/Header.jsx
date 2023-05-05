import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'



const Header = () => (
  <section className='HeaderSection flex'>
    <div className="mainHeaderContent flex">
      <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
      <p className='mainPara'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className='flex'>
        <input type="text" placeholder='Your Email Address' />
       <button type="submit">Get Started</button>
      </div>
      <div className='userCont flex'>
        <img src={people} alt="" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div className="headerImage">
      <img src={ai} alt="" />
    </div>
  </section>
)


export default Header