import React from 'react'
import MyPicture from '../image/myPic.jpg'
// import './AboutMe.css'
import Typed from '../AboutMe/Typing/Typing'

export default function AboutMe() {
    return (
        <section className="about" id="about">
            <div className="max-width">
                    <h2 className="title ">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={MyPicture} alt="" />
                    </div>
                
                    <div className="column right">
                        <div className="text">Hello! Please call me Kurtis. Nice to meet you! <span className="auto-type-2"><Typed/></span></div>
                        <p>My life was filled with hurdles. The difficulties of life have taught me not to give up and become successful with any tasks given. I was faced with unemployment due to COVID-19. It was another challenge to beat.
                            But, here I am beating more challenges life has thrown my way and utiliziing my skills and expending my knowledge to become a programmer.
                        </p>
                        <br></br>
                        <p>With having seventeen years spent in the IT industry, I have engaged with business leaders in multiple industries to resolve their IT-related problems-creating 
                        efficiency and adding to their bottom line. I am a dynamic, result-focused, and known problem solver. I enjoy assisting to grow, improve, and develop IT concepts for small and 
                        large businesses.</p>
                            
                        <a href="./Assets/images/Kyo_Jin_Resume 04022021.pdf" className="download" download="Kurtis-Resume-Download-File.pdf">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
