import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Route, Link, Switch, Redirect } from 'react-router-dom';
// import store from './store';
import {
    Home,
    Login,
    Admin,
    User
} from './../pages'

function RouterPage(){
  return(
    <BrowserRouter>
        <Switch>
                <Route path="/home" component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/login" component={Login} />
                <Route path="/user" render={(routeProps) => {
                    return <User {...routeProps} />
                }} />
                <Redirect to="./admin" from="/" />
        </Switch>
        </BrowserRouter>
  )
}
export default RouterPage
