import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import AppointmentForm from './AppointmentForm'
import FooterSection from './Footer'
import ContactSection from './ContactData'
import DeparmentSection from './DepartmentData'
import MeditexSection from './Meditex'
import BestDocSection from './BestDocSection'
import Slider from './SliderSection'
import ArticlesFaq from './PopularSection'
import ContactMap from './MapSection'

function App() {
  

  return (
    <>
    <Header/>
    <Hero/>
    <AppointmentForm/>
    <DeparmentSection/>
    <MeditexSection/>
    <Slider/>
    <BestDocSection/>
    <ArticlesFaq/>
    <ContactMap/>
    <ContactSection/>
    <FooterSection/>
    </>
  )
}

export default App
