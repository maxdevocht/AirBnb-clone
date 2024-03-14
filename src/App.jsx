import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

