import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import './index.css';
import Image from 'react-bootstrap/Image';
import glow from './../../images/glow.png';
import pixelperfect from './../../images/pixelperfect.png';
import sk8 from './../../images/sk8.png';

class Portfolio extends Component {

  render() {
    return(

      <div>
      <CardDeck>
  <Card>
    <Card.Img variant="top" src={glow} />
    <Card.Body>
      <Card.Title>GLOW</Card.Title>
      <Card.Text>
      Glow is an app designed to help the at home everyday family caregiver.
       DJANGO/PYTHON/REACTJS/AUTH/CSS/HTML
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Card.Link href="https://github.com/joshgoshbgosh/ccs-final-project">View Code</Card.Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={pixelperfect} />
    <Card.Body>
      <Card.Title>PIXEL PERFECT</Card.Title>
      <Card.Text>
      A mock up recreation using CSS/HTML
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Card.Link href="https://github.com/joshgoshbgosh/pixal-perfect">View Code</Card.Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={sk8} />
    <Card.Body>
      <Card.Title>SK8</Card.Title>
      <Card.Text>
     Mock up design using Bootstrap/CSS/HTML
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Link href="#">View Code</Card.Link>
    </Card.Footer>
  </Card>
</CardDeck>
      </div>
    );
  }


}
export default Portfolio;
