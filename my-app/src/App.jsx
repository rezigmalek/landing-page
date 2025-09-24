import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Courses from './components/Courses'
import Questions from './components/Questions'
import Answers from './components/Answers'
import Instructors from './components/Instructors'
import Talk from './components/Talk'

function App() {

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <AboutUs />
      <Courses />
      <Answers />
      <Instructors />
      <Talk />
    </div>
  )
}

export default App
