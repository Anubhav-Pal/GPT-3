import React from 'react'
import './brand.css'

import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import shopify from '../../assets/shopify.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'

const Brand = () =>
(
  <section className='brandSection flex'>
    <div className='imageGroup flex'>
      <img src={google} alt="" />
      <img src={slack} alt="" />
      <img src={atlassian} alt="" />
      <img src={shopify} alt="" />
      <img src={dropbox} alt="" />
    </div>
  </section>
)

export default Brand