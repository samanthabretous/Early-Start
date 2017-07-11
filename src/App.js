import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo">
          <img className="reLogo"role="presentation" src="images/logo-mock copy.png" />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
