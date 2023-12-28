import { useState } from 'react'
import './App.css'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    document.title = 'Shiv Shankar Singh';
    AOS.init();
  }, []);

  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-black ">
     <Navbar />
     <Hero />
     <Skills />
     <Projects />
     <Footer />

    </div>
  )
}

export default App
