import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Card from '../components/Card.jsx'
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

