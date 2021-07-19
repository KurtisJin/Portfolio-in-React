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

export default function Projects() {
    const settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                    <ul className="social-icons">
                        <li><a href="https://github.com/KurtisJin/Movie-Application"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://kurtisjin.github.io/Movie-Application/"><i className="fa fa-website"></i></a></li>
                    </ul>    
                    <div className="details">
                        <h2>Movie Search (Group Project)<span className="description">Find your favorite movies!</span></h2>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://kurtisjin.github.io/Password-Generator/"><img src={PasswordGenPic} alt=""/></a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/KurtisJin/Random-Password-Generator"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://kurtisjin.github.io/Password-Generator/"><i className="fa fa-website"></i></a></li>
                    </ul>    
                    <div className="details">
                        <h2>Random Password Generator<span className="description">Answer prompts to create your random password</span></h2>
                    </div> 
                </div>
            </div> 
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://kurtisjin.github.io/Weather-Application/"><img src={WeatherAppPic} alt=""/></a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/KurtisJin/Weather-Application"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://kurtisjin.github.io/Weather-Application/"><i className="fa fa-website"></i></a></li>
                    </ul>    
                    <div className="details">
                        <h2>Weather Search<span className="description">Type in your city to pull up weather information.</span></h2>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://kurtisjin.github.io/One-Piece-Quiz/"><img src={BoundManPic} alt="picture of luffy animation gear 4 in fighting stance to unleash hell"/></a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/KurtisJin/One-Piece-Quiz/"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://kurtisjin.github.io/One-Piece-Quiz/"><i className="fa fa-website"></i></a></li>
                    </ul>    
                    <div className="details">
                        <h2>One Piece Quiz<span className="description">If answered correct, the background will be green. If wrong, it will turn red! Beat the timer!</span></h2>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://kurtisjin.github.io/Work-Day-Scheduler/"><img src={WorkDayPic} alt="picture of scheduler application. Save button icon. work day hours"/></a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/KurtisJin/Work-Day-Scheduler"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://kurtisjin.github.io/Work-Day-Scheduler/"><i className="fa fa-website"></i></a></li>
                    </ul>    
                    <div className="details">
                        <h2>Workday Scheduler<span className="description">Schedule your workday with the scheduler application!</span></h2>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://young-reef-97089.herokuapp.com/"><img src={NotesPic} alt="picture of notes application"/></a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/KurtisJin/Note-Taker.git"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://young-reef-97089.herokuapp.com/"><i className="fa fa-website"></i></a></li>
                    </ul>    
                    <div className="details">
                        <h2>Note Taker<span className="description">You can Add, Edit, Delete notes from this application!</span></h2>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://youtu.be/PFhk6bD87po"><img src={OrmPic} alt="Picture of ORM sql injection"/></a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/KurtisJin/Product.git"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://youtu.be/PFhk6bD87po"><i className="fa fa-website"></i></a></li>
                    </ul>    
                    <div className="details">
                        <h2>ORM Project<span className="description">Program using express to add, remove, modify sql database</span></h2>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://lineup-festival.herokuapp.com/"><img src={GP2} alt="Picture of ORM sql injection"/></a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/KurtisJin/Project-2"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://lineup-festival.herokuapp.com/"><i className="fa fa-website"></i></a></li>
                    </ul>    
                    <div className="details">
                        <h2>Group Project 2<span className="description">Be able to searh for festivals around the world!</span></h2>
                    </div> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://youtu.be/bQpNUcq0hr8"><img src={Readme} alt="Picture of ORM sql injection"/></a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/KurtisJin/Readme.md-Generator.git"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://youtu.be/bQpNUcq0hr8"><i className="fa fa-website"></i></a></li>
                    </ul>    
                    <div className="details">
                        <h2>Readme.md Generator<span className="description">Please watch the youTube video for more information.</span></h2>
                    </div> 
                </div>
            </div>        
        </Slider>
        </div>
    </section>
    )

}