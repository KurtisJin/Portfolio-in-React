import './App.css';
import { Navbar } from './components/Navigation/Navbar';
import LandingPage from './components/LandingPage/LandingPage'
import AboutMe from './components/AboutMe/AboutMe'
import ScrollReact from './components/ScrollUpButton/ScrollReact';
function App() {
  return (
    <div className="App">
      <ScrollReact/>
      <Navbar/>
      <LandingPage/>
      <AboutMe/>
    </div>
  );
}

export default App;
