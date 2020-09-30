import React from 'react';
import logo from './logo.svg';
import Student from './Student';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <Student name="Ahsan Goheer" uni="MIT" score={300}></Student>
      <Student name="Abdullah Aslam" uni="Oxford university" score={350} ></Student>
      <Student name="Muhammad Tehaam" uni="Stanford University" score={550}></Student>
    </div>
  );
}

export default App;
