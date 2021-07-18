import {useEffect, useState} from "react";
import * as Scroll from 'react-scroll';

function ScrollReact() {

    const [pageOffset, setPageOffset] = useState(0);
    const container = document.getElementById("root");
    const handleScroll = () => {
        const yPos = container.scrollTop;
        console.log(pageOffset)
        setPageOffset(yPos)
    }
    useEffect(() => {
        // console.log(pageOffset)
        window.addEventListener("scroll", handleScroll, {passive:true})

        return() => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return(<></>)
}


export default ScrollReact;