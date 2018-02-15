import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class WYBMV extends Component {
    constructor(props) {
        super(props);

        this.resetForm = this.resetForm.bind(this);
    }

    resetForm(props) {
        window.sessionStorage.clear();
        props.jumpToStep(0);
    }

    render() {
        return (
            <div className="step Exit">
              <form id="Form" className="form-horizontal text-center">
                <div className="form-group">
                  <label className="col-md-12 control-label">
                    <h1>Ready to go!</h1>
                    <p>Just sit back and relax when you get home.</p>
                  </label>
                </div>
                <Button outline color="danger" size="lg" onClick={ () => this.resetForm(this.props) } className="pull-right">I Goofed...Start Over</Button>
              </form>
            </div>
            );
    }
}