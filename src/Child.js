import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
// because of the line "<Child handleColorChange={this.changeColor}/>" in the Parent component/class 
// the Child class/component now has a prop called handleColorChange that is a function

class Child extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color }}
      ></div>
      // see the prop passed in in the Parent component/class now appears as a click event as this.props.handleColorChange
      // note this only changes the color of the PARENT component/class 
      // because the function is in the parent class and therefore the 'this' referred to in the setState is the Parent component
      // also remember that the props key text follows this.props, i.e. 
      // handleColorChange = "some function" => this.props.handleColorChange
      // color = {this.state.childrenColor} => this.props.color
      // finally we add an argument to the handleColorChange function
      // apparently adding an argument means putting in the parentheses and then the argument in the function name
      // otherwise it's an unargumentative function
    )
  }
}

export default Child
