import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './../pages/Home'
import Login from './../pages/Login'
import Detail from './../pages/Detail'
class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}
export default App