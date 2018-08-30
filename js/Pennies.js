import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pennies extends Component {
    constructor(props) {
        super(props);
        this.thoughts = [
            {date: 'August 29, 2018', thought: "The beauty mark below your right eye."},
            {date: 'August 28, 2018', thought: "You have a life giving personality."},
            {date: 'August 27, 2018', thought: "Your alignment with reality, but also your ability to dream."},
            {date: 'August 26, 2018', thought: "How much life is in your eyes. "},
            {date: 'August 25, 2018', thought: "How expressive your face is."},
            {date: 'August 24, 2018', thought: "How strong willed you are. Boss mode Kara is a good look."},
            {date: 'August 23, 2018', thought: "I love your mind. You are a survivor."},
            {date: 'August 22, 2018', thought: "I remember the first night I met you, I just stared...thinking you're the most beautiful person I've ever seen."},
            {date: 'August 21, 2018', thought: "You still fascinate me."},
            {date: 'August 20, 2018', thought: "I think you are one of the funniest people I know."},
            {date: 'August 19, 2018', thought: "You have an absolutely perfect nose."},
            {date: 'August 18, 2018', thought: "Choose me."},
            {date: 'August 17, 2018', thought: "You are the solid earth beneath my feet."},
            {date: 'August 16, 2018', thought: "You are wildly sexy."},
            {date: 'August 15, 2018', thought: "I miss you."},
            {date: 'August 14, 2018', thought: "Sleeping without you is a chore."},
            {date: 'August 13, 2018', thought: "You're worth waiting for."},
        ];
        this.state = {
            currentThought: `I apologize for putting my feelings for you above your happiness.
            I've been selfish, thinking only about my expectations.
            I want what is best for you.
            Go find it, and fascinate the world around you.`,
        };

        this.changeCurrent = this.changeCurrent.bind(this);
        this.randomCurrent = this.randomCurrent.bind(this);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    changeCurrent(index) {
        this.setState({currentThought: this.thoughts[index].thought});
    }

    randomCurrent() {
        this.setState({currentThought: this.thoughts[Math.floor(Math.random() * this.thoughts.length)].thought});
    }

    render() {
        return (
            <div className='pennies__container container'>
            <Link className="home-button" to='/'></Link>
                <header className="pennies__header"><i>"What do you even like about me?"</i> <br/> <b>...only everything.</b></header>
                <div className="thoughts__container">
                    <h2 className="thoughts__current"><span>{ this.state.currentThought }</span></h2>
                    <div>
                        <button className="btn btn-block btn-link mb-2" style={{color: 'cadetblue'}} onClick={this.randomCurrent.bind(this)}>Random</button>
                        <div className="thoughts__list">
                            { this.thoughts.map((thought, i) => <span className={thought.thought === this.state.currentThought ? 'thoughts__list--selected' : null} onClick={ this.changeCurrent.bind(this, i) } key={ i }>{ thought.date }</span>) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

