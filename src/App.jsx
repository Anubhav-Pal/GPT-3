import React from 'react'
import { Article, Brand, Feature, Navbar, CTA, } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import './App.css'

const App = () => (
  <div className='App'>
    <div className="container">
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
    </div>
    <Footer />
  </div>
)

export default App