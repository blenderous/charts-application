import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Progress from 'react-progress';

function App() {
  return (
    <div className="App">
      {/* <Progress percent={30}/> */}
      <Sidebar></Sidebar>
      <div id="chart-div">Click on one of the links on the left</div>
    </div>
  );
}

export default App;
