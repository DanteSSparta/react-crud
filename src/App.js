import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import Route from 'react-router/lib/Route';
import AppRoutes from './AppRoutes';
import logo from './logo.svg';
import './App.css';
import MasterLanding from './components/MasterLanding';
import FormContainer from "./components/container/FormContainer";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MasterLanding}>
    			<Route path="/category" component={FormContainer}/>
    		</Route>
      </Router>
    );
  }
}

export default App;
