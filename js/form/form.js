import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import StepZilla from 'react-stepzilla';
import { Link } from 'react-router-dom';

import Landing from './components/landing'
import WYBMV from './components/WYBMV';
import SushiOrThai from './components/SushiOrThai';
import ChocOrFlow from './components/ChocOrFlow';
import FinalAnswers from './components/FinalAnswers';
import Exit from './components/Exit';

export default class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.sampleStore = {
            wybmv: '',
            SorT: '',
            CorF: '',
            final: false
        };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    getStore() {
        return this.sampleStore;
    }

    updateStore(update) {
        this.sampleStore = {
          ...this.sampleStore,
          ...update,
        }
      }

    render() {

        const steps = [
            {
                name: 'Happy V Day!',
                component: <Landing getStore={ () => this.getStore() } updateStore={ (u) => this.updateStore(u) } />
            },
            {
                name: 'WYBMV?',
                component: <WYBMV getStore={ () => (this.getStore()) } updateStore={ (u) => this.updateStore(u) } />
            },
            {
                name: 'Sushi Or Thai?',
                component: <SushiOrThai getStore={ () => (this.getStore()) } updateStore={ (u) => {
                                                                    this.updateStore(u)
                                                                } } />
            },
            {
                name: 'Chocolate Or Flowers?',
                component: <ChocOrFlow getStore={ () => (this.getStore()) } updateStore={ (u) => {
                                                                   this.updateStore(u)
                                                               } } />
            },
            {
                name: 'Final Answer',
                component: <FinalAnswers getStore={ () => (this.getStore()) } updateStore={ (u) => {
                                                                     this.updateStore(u)
                                                                 } } />
            },
            {
                name: 'Exit',
                component: <Exit getStore={ () => (this.getStore()) } updateStore={ (u) => {
                                                             this.updateStore(u)
                                                         } } />
            }
        ]

        return (
            <div>
                <canvas id="stage"></canvas>
                <div className='step-progress text-center jumbotron'>
                    <StepZilla 
                                steps={ steps } 
                                preventEnterSubmission={ true } 
                                prevBtnOnLastStep={ false } 
                                showSteps={true}
                                nextButtonCls='btn btn-outline-danger btn-lg pull-right'
                                backButtonCls='btn btn-outline-danger btn-lg pull-left' 
                                nextTextOnFinalActionStep="Send" 
                                startAtStep={ window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0 } 
                                onStepChange={ (step) => window.sessionStorage.setItem('step', step) }
                    />
                </div>
            </div>
        );
    }
}

