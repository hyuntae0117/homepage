import React, { Component } from 'react';
import logo from './logo.jpg';
import LeftNavigation from './components/LeftNavigation'
import './App.css';
import LeftNavigationContainer from './containers/LeftNavigationContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Learn React 해볼까</p>
        <div>이게모지</div>
        <LeftNavigationContainer>
          하하
        </LeftNavigationContainer>
      </div>
    );
  }
}

export default App;
