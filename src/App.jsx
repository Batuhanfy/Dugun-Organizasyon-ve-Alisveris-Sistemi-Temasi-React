import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUsPage";
import BlogsAll from "./Pages/BlogsAll";
import ContactPage from "./Pages/ContactPage";
import Main from "./Pages/Main";
import OurServices from "./Pages/OurServices";
import OurTeam from "./Pages/OurTeam";
import Portfolio from "./Pages/Portfolio";
import Shop from "./Pages/Shop";
import BlogDetail from './Pages/BlogDetail';
import ScrollToTop from './Components/ScrollToUp';
import Checkout from './Pages/Checkout';

function App() {
  const location = useLocation();

  return (
    <>
       <Header />
       <ScrollToTop/>
      <TransitionGroup>
     
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blogs" element={<BlogsAll />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;
