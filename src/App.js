import React, { Component } from 'react';
import './App.css';
import TimersDashboard from './components/TimersDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Chhavi's Time Tracker</h1>
        </header>
          <TimersDashboard/>
      </div>
    );
  }
}

export default App;
