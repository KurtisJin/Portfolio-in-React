import React, { Component, useEffect } from 'react';
import Animate from 'animate.css-react';
import Navbar from '../Navigation/Navbar'



export default function Scroll() {
    
    const[scroll, setScroll] = useState(false);
    useEffect(() => {
        
        window.addEventListener("scroll", () => {
            if(window.scrollY > 20) {
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
        });
         
    }, []);
}