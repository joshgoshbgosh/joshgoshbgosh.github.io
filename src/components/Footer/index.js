import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Footer extends Component {

  render() {
    return(

      <div className="footer-div">
      <div className="f-awesome">
      <a href="https://github.com/joshgoshbgosh"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/josh-lanier-155481200/"><i class="fab fa-linkedin"></i></a>
      <a href=""><i class="fas fa-envelope"></i></a>
      </div>
        <div>
        <p className="footer-name">J<span className="the-o">O</span>SH LANIER</p>
        </div>
      </div>
    );
  }

}
export default Footer;
