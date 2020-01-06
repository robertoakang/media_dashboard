import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuth } from './auth';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route 
        { ...rest }
        render={props => (
            isAuth()? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
         )
        }
    />
);

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" exact component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};