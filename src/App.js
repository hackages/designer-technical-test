import React, { Component } from 'react';
import './App.css';
import {Mentor} from "./Mentor";
import {MentorTest} from "./MentorTest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mentor/>
        <MentorTest/>
      </div>
    );
  }
}

export default App;
