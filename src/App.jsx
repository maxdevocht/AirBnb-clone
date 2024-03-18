import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import data from './data'
import './App.css'

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
        img={item.img}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  )
}

