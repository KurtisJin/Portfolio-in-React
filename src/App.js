import './App.css';
import { Navbar } from './components/Navigation/Navbar';
import LandingPage from './components/LandingPage/LandingPage'
import AboutMe from './components/AboutMe/AboutMe'
import ScrollReact from './components/ScrollUpButton/ScrollReact';
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'


function App() {
  return (
    <div className="App">
      <ScrollReact/>
      <Navbar/>
      <LandingPage/>
      <AboutMe/>
      <Services/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
