import React, { Component } from 'react';
import CellBlock from '../cell-block';
import GameTitle from '../game-title';
import StartGame from '../start-game';
import './app.css';


export default class App  extends Component {

  startActiveCells = 2;
  fieldSize = 16;

  state = {
    cellValues: [
      2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048
    ],
    activeCellCount: this.startActiveCells,
    activeCells: [],
    cellCount: 0,
    start: false
  }
  
  setActiveCells = () => {
      let cellArr = [];
      for (let cell = 0; cell < this.state.activeCellCount; cell++) {
          let activeCell = Math.floor(Math.random()*10) + 1;
          if ( cellArr.includes(activeCell) ) {
              cell--;
          } else {
              cellArr.push(activeCell);
          }
      }
      
      this.setState({
        activeCells: cellArr
      });
  };
  startNewGame = () => {
    if (this.state.start) return;
    
    this.setState({
      start: true,
      cellCount: this.fieldSize
    });
    this.setActiveCells();
  };
    
  render() {

    const renderedComponent = this.state.start ? 
      <CellBlock cellProps={this.state}/> :
      <StartGame startNewGame={this.startNewGame}/>;

    return (
      <div>
        <GameTitle />
        {renderedComponent}
      </div>
    );
  };
};
