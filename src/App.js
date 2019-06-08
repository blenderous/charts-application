import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div id="chart-div"></div>
    </div>
  );
}

export default App;
