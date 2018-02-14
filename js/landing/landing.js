import React, { Component }         from 'react';
import { Jumbotron, Button }        from 'reactstrap';
import { Link }                     from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return (
            <Jumbotron>
                <div className="container">
                    <h1 className="text-center">Happy Valentines Day!</h1>
                    <p className="text-center mb-5">
                        Now....I'm going to need you to fill out this form, mmk?
                    </p>
                    <Link className="text-center mt-5" to="/form">
                        <Button outline color="danger" size="lg" block>Get Going!</Button>
                    </Link>
                </div>
            </Jumbotron>
        );
    }
}