import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super()
    this.state = {
      name: 'Add',
      num1: 0,
      num2: 0,
      sum: 0,
      operator: '+'
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }

  handleChange1(e) {
    this.setState({
      num1: e.target.value
    })
  }

  handleChange2(e) {
    this.setState({
      num2: e.target.value
    })
  }

  addNumbers(e) {
    this.setState({
      sum: parseInt(this.state.num1) + parseInt(this.state.num2),
      operator: '+',
      name: 'Add'
    })
  }

  subNumbers(e) {
    this.setState({
      sum: parseInt(this.state.num1) - parseInt(this.state.num2),
      operator: '-',
      name: 'Subtract'
    })
  }

  multNumbers(e) {
    this.setState({
      sum: parseInt(this.state.num1) * parseInt(this.state.num2),
      operator: '*',
      name: 'Multiply'
    })
  }

  divNumbers(e) {
    this.setState({
      sum: parseInt(this.state.num1) / parseInt(this.state.num2),
      operator: '/',
      name: 'Divide'
    })
  }

  render() {


    return(
      <div className='container'>
        <h1>{this.state.name} with React!</h1>

        <div className='add'>
          <input type='text' value={this.state.sum1} onChange={this.handleChange1}/>
          <span>{this.state.operator}</span>
          <input type='text' value={this.state.sum2} onChange={this.handleChange2}/>
          <input type='button' value='Add' onClick={ (e) => this.addNumbers(e) }/>
          <input type='button' value='Subtract' onClick={ (e) => this.subNumbers(e) }/>
          <input type='button' value='Multiply' onClick={ (e) => this.multNumbers(e) }/>
          <input type='button' value='Divide' onClick={ (e) => this.divNumbers(e) }/>
          <h3>Addition results go here!</h3>
          <h5>{this.state.sum}</h5>
        </div>
      </div>
    )
  }
}

export default Calculator
