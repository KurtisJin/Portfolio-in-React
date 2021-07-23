import React from 'react'
// import './Landing.css'
import Typing from '../Typing/Typing'
import Animate from 'animate.css-react'
function Landingpage() {
    return (
        <section id="homePage" className="homePage" >
            <div className="max-width">
                <div className="row animatedTitle">
                    <div className="homePage-content">  
                        <div className="text-1">Welcome! My name is</div>
                        <div className="text-2 animate__animated animate__fadeInLeftBig">Kurtis<span className="last-name"> Jin</span></div>
                        <Typing />
                        <a href="#contact">Hire me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Landingpage
