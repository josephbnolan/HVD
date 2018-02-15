import React, { Component } from 'react';

export default class SushiOrThai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SorT: props.getStore().SorT
        }

        this.updateStore = this.updateStore.bind(this);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    updateStore() {
        const userInputs = this._grabUserInput();

        if (this.props.getStore().SorT !== userInputs.SorT) { // only update store of something changed
            this.props.updateStore({
                ...userInputs
            }); // Update store here (this is just an example, in reality you will do it via redux or flux)
        }
    }

    _grabUserInput(event) {
        return {
            SorT: this.refs.SorT.value
        }
    }

    render() {
        return (
            <div className="step SushiOrThai">
              <form id="Form" className="form-horizontal text-center">
                <div className="form-group">
                  <label className="col-md-12 control-label">
                    <h1>Sushi or Thai?</h1>
                  </label>
                </div>
                <div className="row content">
                  <div className="col-md-12"></div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-6">Food Type</label>
                  <div className="no-error col-md-12">
                    <select autoComplete="off" className="form-control" defaultValue={ this.state.SorT } ref="SorT" name="SorT" onChange={ () => this.updateStore() } required="">
                      <option value="">Please select</option>
                      <option value="Sushi">Sushi!</option>
                      <option value="Thai">Thai!</option>
                      <option value="Neither">Neither!</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            );
    }
}