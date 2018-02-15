import React, { Component } from 'react';

export default class WYBMV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wybmv: props.getStore().wybmv
        }

        this.updateStore = this.updateStore.bind(this);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    updateStore() {
        const userInput = this._grabUserInput();

        if (this.props.getStore().wybmv !== userInput.wybmv) { // only update store of something changed
            this.props.updateStore({
                ...userInput
            }); // Update store here (this is just an example, in reality you will do it via redux or flux)
        }
    }

    _grabUserInput(event) {
        return {
            wybmv: this.refs.wybmv.value
        }
    }

    render() {
        return (
            <div className="step WYBMV">
              <form id="Form" className="form-horizontal text-center">
                <div className="form-group">
                  <label className="col-md-12 control-label">
                    <h1>Will you be my Valentine?</h1>
                  </label>
                </div>
                <div className="row content">
                  <div className="col-md-12"></div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-5">What do ya say?</label>
                  <div className="no-error col-md-12">
                    <select autoComplete="off" className="form-control" defaultValue={ this.state.wybmv } ref="wybmv" name="wybmv" onBlur={ () => this.updateStore() } required="">
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            );
    }
}