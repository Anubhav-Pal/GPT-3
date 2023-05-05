import React from 'react'
import { Article, Brand, Feature, Navbar, CTA, } from './components'
import { Blog, Features, Footer, Header, Possibility, whatGPT3 } from './containers'
import './App.css'

const App = () => (
  <div className='App container'>
    <Navbar />
    <Header />
    <Brand />
    <whatGPT3 />
    <Feature />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
)

export default App