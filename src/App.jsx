import { Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import AboutUsPage from "./Pages/AboutUsPage"
import AboutUs from "./Pages/AboutUsPage"
import BlogsAll from "./Pages/BlogsAll"
import ContactPage from "./Pages/ContactPage"
import Main from "./Pages/Main"
import OurServices from "./Pages/OurServices"
import OurTeam from "./Pages/OurTeam"
import Portfolio from "./Pages/Portfolio"
import Shop from "./Pages/Shop"



function App() {

  return (
    <>
    
  <Header/>
  <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/blogs" element={<BlogsAll />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="*" element={<Main/>}/>
    </Routes>
 <Footer/>
    </>
  )
}

export default App
