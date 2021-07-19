import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectOnePic from '../image/project1.JPG'
import PasswordGenPic from '../image/password_generator.JPG'
import WeatherAppPic from '../image/weather_app.JPG'


export default function Projects() {
    const settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        cssEase: "linear",

    };
   

    return (

        
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">Projects</h2>
                <Slider {...settings}>
                    <div className="carousel">
                        <div className="card">
                            <div className="box">
                            <a href="https://kurtisjin.github.io/Movie-Application/"><img src={ProjectOnePic} alt=""/></a>
                            <div className="text"><a href="https://kurtisjin.github.io/Movie-Application/">Movie Search</a></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://kurtisjin.github.io/Password-Generator/"><img src={PasswordGenPic} alt="" /></a>
                                <div className="text"><a href="https://kurtisjin.github.io/Password-Generator/">Password Generator</a></div>
                                <p>Random Password Generator. Answer prompts to create your password. <br></br> <br></br> Github Information: <a href="https://github.com/KurtisJin/Random-Password-Generator">Click Here</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={WeatherAppPic} alt="" />
                                <div className="text"><a href="https://kurtisjin.github.io/Weather-Application/">Weather Application</a></div>
                                <p>Type in your city to pull up weather information. <br></br><br></br><br></br> Github Information: <a href="https://github.com/KurtisJin/Weather-Application">Click Here</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="{BoundManPic}" alt="picture of luffy animation gear 4 in fighting stance to unleash hell" />
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
                        <div className="card">
                            <div className="box">
                                <img src="./Assets/images/notes.JPG" alt="picture of note and pencil with get started button" />
                                <div className="text"><a href="https://young-reef-97089.herokuapp.com/">Note Taker</a></div>
                                <p>Take notes! You can Add, Edit, Delete notes from this application!<br></br><br></br><br></br> Github Information: <a href="https://github.com/KurtisJin/Note-Taker.git">Click Here</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="./Assets/images/orm.png" alt="picture of note and pencil with get started button" />
                                <div className="text"><a href="https://youtu.be/PFhk6bD87po">Product Management</a></div>
                                <p>ORM - Please watch the youTube video for more information.<br></br><br></br><br></br> Github Information: <a href="https://github.com/KurtisJin/Product.git">Click Here</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="./Assets/images/gp2.JPG" alt="picture of note and pencil with get started button" />
                                <div className="text"><a href="https://lineup-festival.herokuapp.com/">Festival Search</a></div>
                                <p>Group Project - Be able to searh for festivals around the world!<br></br><br></br><br></br> Github Information: <a href="https://github.com/KurtisJin/Project-2">Click Here</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="./Assets/images/readme.JPG" alt="picture of note and pencil with get started button" />
                                <div className="text"><a href="https://youtu.be/bQpNUcq0hr8">Readme.md</a></div>
                                <p>Readme.md Generator - Please watch the youTube video for more information.<br></br><br></br> Github Information: <a href="https://github.com/KurtisJin/Readme.md-Generator.git">Click Here</a></p>
                            </div>
                        </div>
                        </div>
                </Slider>
            </div>

        </section>

        

    )

}