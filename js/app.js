import React, { Component }                     from 'react'
import ReactDOM                                 from 'react-dom';
import { BrowserRouter, Route, Switch }         from 'react-router-dom';

import Landing    from "./landing/landing";
import Form       from "./form/form";

import Animation  from "./animation";

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Switch>
      <Route path="/form" component={ Form } />
      <Route path="/" component={ Landing } />
    </Switch>
  </div>
</BrowserRouter>
  , document.querySelector( '.mainApp' ) );