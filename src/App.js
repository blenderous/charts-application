import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
// import Progress from 'react-progress';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div id="chart-div">
        <p>Click on one of the links on the left</p>
      </div>
    </div>
  );
}

export default App;
