import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class Error extends Component {
    render() {

        return (
            <Jumbotron style={{display: 'flex', flexDirection: 'column', marginTop: '2rem', alignItems: 'center' }}>
                <h1>404!</h1>
                <p>
                    Página Inexistente</p>
                <p>
                    <Button variant="primary"><Link style={{color: '#FFF', textDecoration: 'none' }}to="/">Home</Link></Button>
                </p>
            </Jumbotron>
        );
    }
}