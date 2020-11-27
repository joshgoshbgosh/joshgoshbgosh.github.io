import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import './index.css';
import Header from './../Header';
import Footer from './../Footer';
import About from './../About';
import Portfolio from './../Portfolio';
import Contact from './../Contact';
import Home from './../Home';

class App extends Component {



  render() {
    return (
      <React.Fragment>
      <Header/>
      <div className="App">
      <Switch>
        <Route path='/'component={Home} />
        <Route path='/about'component={About}/>
        <Route path='/portfolio'component={Portfolio}/>
        <Route path='/contact'component={Contact}/>

      </Switch>

      </div>
      <Footer/>
      </React.Fragment>
  );
}
}
export default withRouter(App);
