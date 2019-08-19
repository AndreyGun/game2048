import React, { Component } from 'react';
import CellBlock from '../cell-block'
import './app.css';


export default class App  extends Component {

  state = {
    dataCells: [
      2,4,8,16,32,64,
    ],
    cellCount: 16
  }

  createCell = (number) => {
    return {
      number: number,
      id: 0
    }
  }
  startNewGame = () => {
    console.log('start');
  }
  render() {
    console.log(this.state.dataCells);
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
