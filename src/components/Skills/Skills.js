import React from 'react';
import JavaScript from './SkillsTree/JavaScript'
import HTML from './SkillsTree/Html'



export default function Skills() {

    return (

        <section className="skills" id="skills">
          <div className="max-width">
              <h2 className="title">My skills</h2>
              <div className="skills-content">
                  <div className="column left">
                      <div className="text">My creative skills & experiences.</div>
                      <p>I am a proficient in front end developer and back end web development, coding with HTML, CSS, and JS for the client-side and maintaining databases and infrastructure server-side. If you like to find out more, please click the button below.</p>
                      {/* <a href="model.html">Read more</a> */}
                  </div>
                  <div class="column right">
                    <JavaScript/>
                    <HTML/>
                  </div>
              </div>
          </div>
        </section>
    )
}