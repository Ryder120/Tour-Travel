import React from 'react'
import Navbar from './Component/Navbar'
import Cities from './Component/Cities'
import Wildlife from './Component/Wildlife'
import Destination from './Component/Destination'
import SmartCities from './Component/SmartCities'
import LatestStories from './Component/LatestStories'
import Footer from './Component/Footer'
import Gallery from './Component/Gallery'


const App = () => {
  return (
    <>
      <Navbar />
      <Cities />
      <Wildlife />
      <Destination />
      <SmartCities />
      <Gallery />
      <LatestStories />
      <Footer />
      
    </>


  )
}

export default App