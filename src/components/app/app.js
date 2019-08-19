import React, { Component } from 'react';
import CellBlock from '../cell-block'
import './app.css';


export default class App  extends Component {

  startingNumber = 2;
  fieldSize = 16;

  state = {
    startingNumber: this.startingNumber,
    cellCount: 0
  }
  
  startNewGame = () => {
    console.log('start');
    this.setState({
      cellCount: this.fieldSize
    })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <CellBlock cellProps={this.state}/>
        <button 
          className='start'
          onClick={this.startNewGame}>
          Start
        </button>
      </div>
    );
  };
};
