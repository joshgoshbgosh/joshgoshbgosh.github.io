import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

import about2 from './../../images/about2.jpg';
import about3 from './../../images/about3.jpg';
import  about4 from './../../images/about4.jpg';
import  about5 from './../../images/about5.jpg';


class About extends Component {

  render() {
    return(

      <div>
        <div className="outer-div">
          <div className="p-div">
            <p className="about-me">Hi, i'm Josh.  I am a full stack developer based out of the Greenville, SC area.
            I am an alumni graduate from Carolina Code School.  I am a very creative  person.  I write music, play
            many instruments, run a photography & videography business called Str8Jacket, I am extremely obsessed with
            coffee, and love spending time with my wife Allie & daughter Evie.  The creation and design part of web development
            is what attracts me to this trade. You want to talk web development and i'll say let's go grab a coffee.
            </p>
            <div className="fawesome-div">

            <a href="https://www.facebook.com/josh.lanier.5"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/joshgoshbgosh/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.instagram.com/str8jacketphotographyandfilm/"><i class="fas fa-camera-retro"></i></a>
            </div>
          </div>
          <div className="photos">

          <img src={about2}/>
          <img src={about3}/>
          <img src={about4}/>
          <img src={about5}/>

          </div>
        </div>

      </div>
    );
  }


}
export default About;
