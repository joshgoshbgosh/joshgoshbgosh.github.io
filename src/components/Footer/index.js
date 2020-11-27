import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Footer extends Component {

  render() {
    return(

      <div className="footer-div">
      <div className="f-awesome">
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fas fa-envelope"></i>
      </div>
        <div>
        <p className="footer-name">J<span className="the-o">O</span>SH LANIER</p>
        </div>
      </div>
    );
  }

}
export default Footer;
