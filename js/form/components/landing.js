import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return (
            <div className="step Landing">
              <form id="Form" className="form-horizontal text-center">
                <div className="form-group">
                  <label className="col-md-12 control-label">
                    <h1>Happy Valentines Day!</h1>
                  </label>
                </div>
                <div className="row content">
                  <div className="col-md-12"></div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <p className="text-center">
                    Now....I'm going to need you to fill out this form, mmk?
                  </p>
                </div>
              </form>
            </div>
            );
    }
}