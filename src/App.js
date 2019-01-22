import React, { Component } from "react";
import logo from "./logo.jpg";
import LeftNavigation from "./components/LeftNavigation";
import TopNavigation from "./components/TopNavigation";
import "./App.css";
import LeftNavigationContainer from "./containers/LeftNavigationContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavigation />
        <LeftNavigationContainer>하하</LeftNavigationContainer>
      </div>
    );
  }
}

export default App;
