import React from 'react';
import { NavLink } from 'react-router-dom';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import joshlogo from './../../images/joshlogo.png';
import './index.css';

function Header(props){
  return(
    <header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <a href="/">
    <Image src={joshlogo} rounded />
    </a>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

        <Nav>
          <Nav.Link className="nav-link nav-home" href='/'>H<span className="the-o">O</span>ME</Nav.Link>
          <Nav.Link className="nav-link nav-about" href={'/#/about'}>AB<span className="the-o">O</span>UT</Nav.Link>
          <Nav.Link className="nav-link nav-portfolio" href={`/#/portfolio`}>P<span className="the-o">O</span>RTF<span className="the-o">O</span>LI<span className="the-o">O</span></Nav.Link>
          <Nav.Link className="nav-link nav-contact" href={'/#/contact'}>C<span className="the-o">O</span>NTACT</Nav.Link>
        </Nav>

    </Navbar.Collapse>
    </Navbar>
    </header>
  );
}
export default Header;
