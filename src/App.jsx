import React from 'react'
import Navbar from './Component/Navbar'
import Cities from './Component/Cities'
import Wildlife from './Component/Wildlife'
import Destination from './Component/Destination'
import SmartCities from './Component/SmartCities'
import LatestStories from './Component/LatestStories'


const App = () => {
  return (
    <>
      <Navbar />
      <Cities />
      <Wildlife />
      <Destination />
      <SmartCities />
      <LatestStories />
      
    </>


  )
}

export default App