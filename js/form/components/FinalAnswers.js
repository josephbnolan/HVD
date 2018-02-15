import React, { Component } from 'react';

export default class ChocOrFlow extends Component {
    constructor(props) {
        super(props);

        this.state = props.getStore();
        

        this.emailMe = this.emailMe.bind(this);
    }

    emailMe() {

    }

    render() {
        return (
            <div className="step FinalAnswers">
              <form id="Form" className="form-horizontal text-center" method="post" action="https://formspree.io/josephn0624@gmail.com">
                <div className="form-group">
                  <label className="col-md-12 control-label">
                    <h1>All Sales are Final!</h1>
                    <div className="d-flex flex-row justify-content-around mt-5">
                      <div className="d-inline-flex flex-column justify-content-start">
                        <h4 className="text-left"><strong>Will you be my Valentine?</strong>:</h4>
                        <h4 className="text-left"><strong>Sushi or Thai?</strong>:</h4>
                        <h4 className="text-left"><strong>Chocolate or Flowers</strong>:</h4>
                      </div>
                      <div className="d-inline-flex flex-column justify-content-end">
                        <h5 className="">{ this.props.getStore().wybmv }</h5>
                        <h5 className="">{ this.props.getStore().SorT }</h5>
                        <h5 className="">{ this.props.getStore().CorF }</h5>
                      </div>
                    </div>
                  </label>
                </div>
                <input type="hidden" name="email" value="joseph.nolan@csuglobal.edu" />
                <input type="hidden" name="WillYou" value={this.props.getStore().wybmv} />
                <input type="hidden" name="Food" value={this.props.getStore().SorT} />
                <input type="hidden" name="Goodies" value={this.props.getStore().CorF} />
              </form>
            </div>
            );
    }
}