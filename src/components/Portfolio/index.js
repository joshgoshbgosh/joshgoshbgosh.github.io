import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import './index.css';
import Image from 'react-bootstrap/Image'
import glow from './../../images/glow.png';
import pixalperfect from './../../images/pixalperfect.png';

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
    <Card.Img variant="top" src={pixalperfect} />
    <Card.Body>
      <Card.Title>PIXAL PERFECT</Card.Title>
      <Card.Text>
      A mock up recreation using CSS/HTML
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Card.Link href="https://github.com/joshgoshbgosh/pixal-perfect">View Code</Card.Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>NEWS APP </Card.Title>
      <Card.Text>
    A News Article App
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Link href="#">Card Link</Card.Link>
    </Card.Footer>
  </Card>
</CardDeck>
      </div>
    );
  }


}
export default Portfolio;
