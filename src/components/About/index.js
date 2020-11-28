import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import './index.css';


import  about3 from './../../images/about3.jpg';



class About extends Component {

  render() {
    return(

      <div>
        <div className="outer-div d-block">
    
        <div className="p-div ">
          <p className="about-me">Hi, I'm Josh.  I am a full stack developer based out of the Greenville, SC area.
          I am an alumni graduate from Carolina Code School.  I am a very creative  person.  I write music, play
          many instruments and run a photography & videography business called Str8Jacket. I am extremely obsessed with
          coffee and I love spending time with my wife Allie & daughter Evie.  The creation and design part of web development
          is what attracts me to this trade. If you want to talk web development then I'll say let's go grab a coffee.
          </p>
          <div className="fawesome-div">

          <a href="https://www.facebook.com/josh.lanier.5"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/joshgoshbgosh/"><i class="fab fa-instagram"></i></a>
          <a href="https://www.instagram.com/str8jacketphotographyandfilm/"><i class="fas fa-camera-retro"></i></a>
          </div>
        </div>


        </div>

      </div>
    );
  }


}
export default About;
