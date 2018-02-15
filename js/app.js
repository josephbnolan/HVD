import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Questionaire from './form/form'
import Animation from "./animation";

export default class App extends Component {
  render() {
    return (
      <Questionaire />
    )
  }
}

ReactDOM.render(<App />
  , document.querySelector('.mainApp'));