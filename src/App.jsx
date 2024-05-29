import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Landingpage/Home'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contect'
import Service from './components/Services/Service'
import Team from './components/Team/Team'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Terms from './components/Footer/Terms'
import Privacy from './components/Footer/Privacy'
import Careear from './components/Careear/Careear'
import Cr from './components/Careear/cr'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    {/* <Route path="/" element={<Navbar />} /> */}
    <Route path="/" element={<Home/>} />
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path="/contact" element={< Contact/>} />
    <Route path="/Service" element={<Service />} />
    <Route path='/Team' element={<Team/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/terms' element={<Terms/>}/>
    <Route path='/career' element={<Careear/>}/>
  
    <Route path='/privacy-policy' element={<Privacy/>}/>

   
    </Routes>
    <Footer/>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
