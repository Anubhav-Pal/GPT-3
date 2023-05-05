import React from 'react'
import { Article, Brand, Feature, Navbar, CTA, } from './components'
import { Blog, Features, Footer, Header, Possibility, whatGPT3 } from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}


export default App