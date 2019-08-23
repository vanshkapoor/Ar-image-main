import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

import setAuthToken from './utils/setAuthToken';

import Product from './components/landing';
import Store from './components/store';
import Image from './components/images';
import My from './components/MyCreations';
import Login from './components/Login';

class App extends Component {
  render() {
    return (

      <Provider store={store} >
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/product" component = {Product} />
              <Route exact path="/" component={Login} />
              <Route exact path="/store" component={Store} />
              <Route exact path="/image/:id" component={Image} />
              <Route exact path="/my" component={My} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
