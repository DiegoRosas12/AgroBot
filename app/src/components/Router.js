import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';

import Error from './Error';

export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    
                    <Route component={Error}/>
                </Switch>

            </BrowserRouter>
        );
    }
}
