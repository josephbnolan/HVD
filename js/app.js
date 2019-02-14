import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import $ from 'jquery';

import Animation from './animation';
import Questionnaire from './form/form';
import Pennies from './Pennies'

const Home = () => (
  <div className="center-it">
    <Link className="landing-cards card border-light m-3" to="/hvd">
      <div className="card-header">HVD</div>
      <div className="card-body">
        <span className="card-text">Happy Valentines Day, Kara.</span>
      </div>
    </Link>
    <Link className="landing-cards card border-light m-3" to="/pennies">
      <div className="card-header">Penny for your Thoughts</div>
      <div className="card-body">
        <span className="card-text">A thought a day about how I see you.</span>
      </div>
    </Link>
  </div>
);

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Link to='/'><span className="home-button">Home</span></Link>
          <Switch>
            <Route exact path="/" refresh component={Home} />
            <Route path="/hvd" refresh component={Questionnaire} />
            <Route path="/pennies" refresh component={Pennies} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />
  , document.querySelector('.mainApp'));