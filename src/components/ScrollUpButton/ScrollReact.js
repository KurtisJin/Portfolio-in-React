import {useEffect, useState} from "react";


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
    return(
    <>
        <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
        </div>
    </>

    )
}


export default ScrollReact;