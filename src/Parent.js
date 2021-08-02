import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'
// imports react, the Child class, and the getRandomColor function from.. etc.
// note that import { function } is how you import functions I guess?

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      //parent component has a state called color that invokes the random color function to initially set to a random color
      childrenColor: '#FFF'
      // React components cannot pass data between 'siblings'
      // So the best way to keep both children the same color is not to pass data between the child components
      // But to store the color in the Parent state and let it handle the data
    }
  }

  // CHANGE COLOR TO RANDOM COLOR FUNCTION
  // adding an argument of newChildColor to feed into the children's color although why this couldn't just be another getRandomColor function i do not know.
  // probably j ust for the sake of practice
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    return (
      // and then the state key 'color' is applied to the parent div's background color css attribute
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
      // invoking two child classes here too
      // and now we're passing the state changing function changeColor to the child instances, or in this case, components
      // and now we're passing the color state from the parent class
    )
  }
}

export default Parent
