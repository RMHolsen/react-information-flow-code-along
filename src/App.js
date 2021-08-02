import React, { Component } from 'react'
import './App.css'
import Parent from './Parent'
// imports are React, App css, and Parent class

class App extends Component {
  render() {
    return (
      // calls on the app css, then makes an instance of the parent class
      <div className="App">
        <Parent />
      </div>
    )
  }
}

export default App
