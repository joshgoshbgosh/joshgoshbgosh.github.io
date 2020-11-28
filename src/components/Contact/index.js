import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import joshhome from './../../images/joshhome.jpg';
import './index.css';

class Contact extends Component {

  render() {
    return(

      <div>
        <div className="contact-div col-lg-12 col-xs-12">
          <p className="connect col-lg-12 col-xs-12">
          LET'S C<span className="the-o">O</span>NNECT
          </p>
          <div className="email-div">
           <a className="email-link" href="mailto:joshlaniermusic@gmail.com">
           J<span className="the-o">O</span>SHLANIERMUSIC@GMAIL.C<span className="the-o">O</span>M
           </a>
          </div>
          <div className="font-a">
            <a href="https://github.com/joshgoshbgosh"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/josh-lanier-155481200/"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:joshlaniermusic@gmail.com"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    );
  }

}
export default Contact;
