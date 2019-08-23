import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

import setAuthToken from './utils/setAuthToken';

import Landing from './components/landing';
import Image from './components/images';

class App extends Component {
  render() {
    return (

      <Provider store={store} >
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/store" component={Landing} />
              <Route exact path="/image/:id" component={Image} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
