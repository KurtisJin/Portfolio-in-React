import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectOnePic from '../image/project1.JPG'
import PasswordGenPic from '../image/password_generator.JPG'
import WeatherAppPic from '../image/weather_app.JPG'
import BoundManPic from '../image/boundman2.JPG'
import WorkDayPic from '../image/workday_scheduler.JPG'
import NotesPic from '../image/notes.JPG'
import OrmPic from '../image/orm.png'
import GP2 from '../image/gp2.jpg'
import Readme from '../image/readme.JPG'
import Github from '../image/github.png'

export default function Projects() {
    const settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        cssEase: "linear",

    };
   

    return (

        <section className="projects" id="projects">
            <div className="max-width">
            <h2 className="title">Projects</h2>
            
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://kurtisjin.github.io/Movie-Application/"><img src={ProjectOnePic} alt=""/></a>
                    </div>
                    <div className="details">
                        <h2>Movie Search (Group Project)<br></br><p className="descriptionTwo">Description:</p><span className="description">Search for your favorite movies and its information!</span></h2>
                        <br></br>
                        <p>GitHub Information:</p>
                        <a href="https://github.com/KurtisJin/Movie-Application"><img class="github-profile" src={Github} height="5" width="5"/></a>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://kurtisjin.github.io/Password-Generator/"><img src={PasswordGenPic} alt=""/></a>
                    </div>   
                    <div className="details">
                        <h2>Random Password Generator<br></br><p className="descriptionTwo">Description:</p><span className="description">Answer prompts to create your random password</span></h2>
                        <br></br>
                        <p>GitHub Information:</p>
                        <a href="https://github.com/KurtisJin/Random-Password-Generator"><img class="github-profile" src={Github} height="5" width="5"/></a>
                    </div> 
                </div>
            </div> 
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://kurtisjin.github.io/Weather-Application/"><img src={WeatherAppPic} alt=""/></a>
                    </div>  
                    <div className="details">
                        <h2>Weather Search Application<br></br><p className="descriptionTwo">Description:</p><span className="description">Type in your city to pull up weather information.</span><br></br></h2>
                        <br></br>
                        <p>GitHub Information:</p>
                        <a href="https://github.com/KurtisJin/Weather-Application"><img class="github-profile" src={Github} height="5" width="5"/></a>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://kurtisjin.github.io/One-Piece-Quiz/"><img src={BoundManPic} alt="picture of luffy animation gear 4 in fighting stance to unleash hell"/></a>
                    </div> 
                    <div className="details">
                        <h2>One Piece Quiz<br></br><p className="descriptionTwo">Description:</p><span className="description">If answered correct, the background will be green. If wrong, it will turn red! Beat the timer!</span></h2>
                        <br></br>
                        <p>GitHub Information:</p>
                        <a href="https://github.com/KurtisJin/One-Piece-Quiz"><img class="github-profile" src={Github} height="5" width="5"/></a>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://kurtisjin.github.io/Work-Day-Scheduler/"><img src={WorkDayPic} alt="picture of scheduler application. Save button icon. work day hours"/></a>
                    </div>   
                    <div className="details">
                        <h2>Workday Scheduler Application<br></br><p className="descriptionTwo">Description:</p><span className="description">Schedule your workday with the scheduler application!</span></h2>
                        <br></br>
                        <p>GitHub Information:</p>
                        <a href="https://github.com/KurtisJin/Work-Day-Scheduler"><img class="github-profile" src={Github} height="5" width="5"/></a>    
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://young-reef-97089.herokuapp.com/"><img src={NotesPic} alt="picture of notes application"/></a>
                    </div>   
                    <div className="details">
                        <h2>Note Taker <br></br> Application<a href="https://young-reef-97089.herokuapp.com/"></a><br></br><p className="descriptionTwo">Description:</p><span className="description">You can Add, Edit, Delete notes from this application!</span></h2>
                        <br></br>
                        <p>GitHub Information:</p>
                        <a href="https://github.com/KurtisJin/Note-Taker.git"><img class="github-profile" src={Github} height="5" width="5"/></a>    
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://youtu.be/PFhk6bD87po"><img src={OrmPic} alt="Picture of ORM sql injection"/></a>
                    </div>   
                    <div className="details">
                        <h2>ORM - Sql Modification Application<br></br><p className="descriptionTwo">Description:</p><span className="description">Program using express to add, remove, modify sql database</span></h2>
                        <br></br>
                        <p>GitHub Information:</p>
                        <a href="https://github.com/KurtisJin/Product.git"><img class="github-profile" src={Github} height="5" width="5"/></a>    
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://lineup-festival.herokuapp.com/"><img src={GP2} alt="Picture of ORM sql injection"/></a>
                    </div>   
                    <div className="details">
                        <h2>Festival Search (Group Project 2)<br></br><p className="descriptionTwo">Description:</p><span className="description">Be able to searh for festivals around the world!</span></h2>
                        <br></br>
                        <p>GitHub Information:</p>
                        <a href="https://github.com/KurtisJin/Project-2"><img class="github-profile" src={Github} height="5" width="5"/></a>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://youtu.be/bQpNUcq0hr8"><img src={Readme} alt="Picture of ORM sql injection"/></a>
                    </div>  
                    <div className="details">
                        <h2>Readme.md Generator Application<br></br><p className="descriptionTwo">Description:</p><span className="description">Please watch the youTube video for more information.</span></h2>
                        <br></br>
                        <p>GitHub Information:</p>
                        <a href="https://github.com/KurtisJin/Readme.md-Generator.git"><img class="github-profile" src={Github} height="5" width="5"/></a>

                    </div> 
                </div>
            </div>        
        </Slider>
        </div>
    </section>
    )

}