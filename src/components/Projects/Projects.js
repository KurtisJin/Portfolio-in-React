import React from 'react';
// import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/lib/styles.css';
// import 'react-owl-carousel2/src/owl.theme.default.css';

export default function Projects() {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };
   

    return (

        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">Projects</h2>
                {/* <OwlCarousel ref="car" options={options}> */}
                    <div className="carousel owl-carousel">
                        <div className="card">
                            <div className="box">
                            <a href="https://kurtisjin.github.io/Movie-Application/"><img src="./Assets/images/project1.JPG" alt=""/></a>
                            <div className="text"><a href="https://kurtisjin.github.io/Movie-Application/">Movie Search</a></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://kurtisjin.github.io/Password-Generator/"><img src="./Assets/images/password_generator.JPG" alt="" /></a>
                                <div className="text"><a href="https://kurtisjin.github.io/Password-Generator/">Password Generator</a></div>
                                <p>Random Password Generator. Answer prompts to create your password. <br></br> <br></br> Github Information: <a href="https://github.com/KurtisJin/Random-Password-Generator">Click Here</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="./Assets/images/weather_app.JPG" alt="" />
                                <div className="text"><a href="https://kurtisjin.github.io/Weather-Application/">Weather Application</a></div>
                                <p>Type in your city to pull up weather information. <br></br><br></br><br></br> Github Information: <a href="https://github.com/KurtisJin/Weather-Application">Click Here</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="./Assets/images/boundman2.JPG" alt="picture of luffy animation gear 4 in fighting stance to unleash hell" />
                                <div className="text"><a href="https://kurtisjin.github.io/One-Piece-Quiz/">One Piece Quiz!</a></div>
                                <p>One Piece Quiz. If you are right, the background will be gree. If wrong, it will be blue! Beat the timer!<br></br><br></br> Github Information: <a href="https://github.com/KurtisJin/One-Piece-Quiz/settings">Click Here</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="./Assets/images/workday_scheduler.JPG" alt="picture of scheduler application. Save button icon. work day hours" />
                                <div className="text"><a href="https://kurtisjin.github.io/Work-Day-Scheduler/">Work day Scheduler</a></div>
                                <p>Schedule your workday with the scheduler application!<br></br><br></br><br></br> Github Information: <a href="https://github.com/KurtisJin/Work-Day-Scheduler">Click Here</a></p>
                            </div>
                        </div>
                    </div>
                {/* </OwlCarousel>  */}
            </div>

        </section>

        

    )

}