import React, { Component, useEffect, useState } from 'react';
// import Animate from 'animate.css-react';
import Navbar from '../Navigation/Navbar'




export default function Scroll() {
    
    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        const navBar = document.getElementById(".navbar");

        
        const scrollHandler = () =>  {
            if(window.scrollY > 20) {
                navBar?.addClass("sticky");
            }else{
               navBar?.removeClass("sticky");
            }
        }
        
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
}