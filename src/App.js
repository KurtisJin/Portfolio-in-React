import './App.css';
import { Navbar } from './components/Navigation/Navbar';
import LandingPage from './components/LandingPage/LandingPage'
import AboutMe from './components/AboutMe/AboutMe'
// import ScrollReact from './components/ScrollUpButton/ScrollReact';
import Services from './components/Services/Services'
import Skills from './components/Skills/SkillsCopy'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/Contactme'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      {/* <ScrollReact/> */}
      <Navbar/>
      <LandingPage/>
      <AboutMe/>
      <Services/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
