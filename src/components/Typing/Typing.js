import React from "react";
import Words from "./words";
import Typed from 'typed.js';
import { classes } from "istanbul-lib-coverage";

// import "./style.css"


class Typing extends React.Component {
  
  componentDidMount() {

    const options = {
    strings: Words,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: "|",
           
          };
    
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
        }
  componentWillUnmount() {
          // Please don't forget to cleanup animation layer
  this.typed.destroy();
    }
        
    render() {

       return (
   
          <div className="text-3">And I'm a <span className="auto-type"style={{ whiteSpace: "pre" }} ref={(el) => {
              this.el = el;
            }}/>
          </div>

        
      );
      
    }
}

export default Typing;