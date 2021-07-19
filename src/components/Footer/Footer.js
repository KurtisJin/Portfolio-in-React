import React from 'react';
import LinkdIn from '../image/linkedin.png'
import Github from '../image/github.png'

export default function Footer() {

    return (

        <footer>
            <div class="row">
                <p class="resources">Additional Resources:</p>
                <br></br>
                <a href="https://www.linkedin.com/in/kurtisjin/"><img class="linkedin" src={LinkdIn} height="30" width="30"/></a>
                <a href="https://github.com/KurtisJin"><img class="github-profile" src={Github} height="30" width="30"/></a>    
            </div>    
        </footer>


    )

}