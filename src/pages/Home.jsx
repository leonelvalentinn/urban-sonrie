// import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Promociones from '../components/Promociones'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import BarraContact from '../components/BarraContact'
import Footer from '../components/Footer'

import { ButtonFixed } from '../components/ButtonsFixed'
import Modal from '../components/Modal'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Promociones />
      <BarraContact />
      <Gallery />
      <Footer />
      <ButtonFixed />
      <Modal />
    </div>
  )
}

export default Home
