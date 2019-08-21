import React, { Component } from 'react';
import CellBlock from '../cell-block';
import GameTitle from '../game-title';
import StartGame from '../start-game';
import './app.css';


export default class App  extends Component {

  startActiveCells = 2;
  fieldSize = 16;
  id = 1;

  state = {
    cellValues: [
      2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048
    ],
    activeCellCount: this.startActiveCells,
    activeCells: [],
    cellCount: 0,
    start: false,
    cells: [
      this.createCell(null), this.createCell(null), this.createCell(null), this.createCell(null),
      this.createCell(null), this.createCell(null), this.createCell(null), this.createCell(null),
      this.createCell(null), this.createCell(null), this.createCell(null), this.createCell(null),
      this.createCell(null), this.createCell(null), this.createCell(null), this.createCell(null)
    ]
  }
  createCell(value) {
    return {
      value: value,
      id: this.id++
    }
  }
  updateValue(arr, id, value) {
    const idx = arr.findIndex( (el) => el.id === id );

    const oldItem = arr[idx];
    const newItem = {...oldItem, value: value}

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  };
  setValue = (id, value) => {
    this.setState(({ cells }) => {
      return {
        cells: this.updateValue(cells, id, value)
      }
    });
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
  setCellState = (id) => {
    console.log(id);
  }
  render() {

    const renderedComponent = this.state.start ? 
      <CellBlock 
        cellProps={this.state}
        setCellState={this.setCellState}/> :
      <StartGame startNewGame={this.startNewGame}/>;

    return (
      <div>
        <GameTitle />
        {renderedComponent}
      </div>
    );
  };
};
