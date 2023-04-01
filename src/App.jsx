import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Experience from './components/experience/experience'
// import Services from './components/Services/services'
import Portfolio from './components/Portfolio/portfolio'
import Testimonial from './components/Testimonial/testi'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App