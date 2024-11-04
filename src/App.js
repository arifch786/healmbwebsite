import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from "./pages/hero"
import Personalizemeditation from "./pages/personalizemeditation"
import AiPowered from './pages/AiPowered'
import Testemonial from './pages/Testemonial'
import Whychoose from "./pages/whychoose"
import FAQ from './pages/Faqs'
import Footer from './Components/FooterCom'

const App = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Personalizemeditation/>
       <AiPowered/>
       <Testemonial/>
       <Whychoose/>
       <FAQ/>
       <Footer/>
      
    </>
  )
}

export default App