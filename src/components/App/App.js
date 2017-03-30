import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="dialogBtn">Event</button>
        <button className="dialogBtn">Task</button>
        <button className="dialogBtn">Edit</button>
      </div>
    );
  }
}

export default App;
