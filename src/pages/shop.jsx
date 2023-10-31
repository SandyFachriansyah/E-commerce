import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offer from '../component/Offer/Offer'
import NewCollection from '../component/newCollection/newCollection'
import NewsLetter from '../component/NewsLetter/NewsLetter'


const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}

export default shop