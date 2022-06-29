import { useState, useEffect } from 'react';
import './App.css';
import Narbar from './components/Narbar/Narbar';
import Home from './components/Home/Home.jsx'
import About from './components/About/About';
import RoadMap from './components/RoadMap/RoadMap';
import ShowCase from './components/ShowCase/ShowCase';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  const [isDesktop, setDesktop] = useState({
    width: undefined,
    height: undefined
  })
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {

    const handleSize = () => {
      setDesktop({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, [])

  useEffect(() => {
    if (isDesktop.width < 768) {
      setMobile(true)
    }
    else {
      setMobile(false)
    }
  }, [isDesktop])

  return (
    <div className="relative overflow-y-auto overflow-x-hidden w-[100%]" id="header">
      <Narbar isMobile = {isMobile}/>
      <Home />
      <About/>
      <RoadMap/>
      <ShowCase/>
      <Team/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
