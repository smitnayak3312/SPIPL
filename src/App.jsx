import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import About from './components/Pages/About'
// import Contact from './components/Pages/Contact'
// import Service from './components/Pages/Service'
import Home from './components/Landingpage/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    {/* <Route path="/" element={<Navbar />} /> */}
    <Route path="home" element={<Home/>} />
    {/* <Route path="about" element={<About />} /> */}
    {/* <Route path="contact" element={<Contact />} /> */}
    {/* <Route path="Service" element={<Service />} /> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
