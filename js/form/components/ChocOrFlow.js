import React, { Component } from 'react';

export default class ChocOrFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CorF: props.getStore().CorF
        }

        this.updateStore = this.updateStore.bind(this);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    updateStore() {
        const userInputs = this._grabUserInput();

        if (this.props.getStore().CorF !== userInputs.CorF) { // only update store of something changed
            this.props.updateStore({
                ...userInputs
            }); // Update store here (this is just an example, in reality you will do it via redux or flux)
        }
    }

    _grabUserInput(event) {
        return {
            CorF: this.refs.CorF.value
        }
    }

    render() {
        return (
            <div className="step ChocOrFlow">
              <form id="Form" className="form-horizontal text-center">
                <div className="form-group">
                  <label className="col-md-12 control-label">
                    <h1>Chocolate or Flowers</h1>
                  </label>
                </div>
                <div className="row content">
                  <div className="col-md-12"></div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-4">Goodies</label>
                  <div className="no-error col-md-12">
                    <select autoComplete="off" className="form-control" defaultValue={ this.state.CorF } ref="CorF" name="CorF" onChange={ () => this.updateStore() } required="">
                      <option value="">Please select</option>
                      <option value="Sushi">Chocolate!</option>
                      <option value="Thai">Flowers!</option>
                      <option value="Both">Umm Both...</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            );
    }
}