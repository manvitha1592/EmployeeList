import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './responsive.css';
import LoginComponent from './LoginComponent';
import {  Route, Switch } from 'react-router';
import Employees from './Employees';


class App extends Component {
  render() {
    return (            
      <div>
        <Switch>
          <Route exact path='/' render={() => (
            <div className="App">
              <div >
                <header className="head">
                  <h1>Employee List Application</h1>
                </header>
              </div>
              <LoginComponent />
            </div>          
          )} />
          <Route path='/employees' render={() => <Employees />} />              
        </Switch>            
      </div>    
    );
  }
}

export default App;
