import React, { Component } from 'react';
import State from './state/State';
import Rerender from './rerender/Rerender';
import Es from './es/Es';
import Child from './composition/Child';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newKey: 0
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((prevState) => {
      return {
        newKey: prevState.newKey + 1
      };
    });
    this.setState((prevState) => {
      return {
        newKey: prevState.newKey + 1
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <State onClick={this.onClick} newKey={this.state.newKey} />
          <Rerender onClick={this.onClick} newKey={this.state.newKey} />
          <Es title="Title" p1={1} p2={2} />
          <Child />
        </div>
      </div>
    );
  }
}

export default App;
