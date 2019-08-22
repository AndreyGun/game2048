import React, { Component } from 'react';
import CellBlock from '../cell-block';
import GameTitle from '../game-title';
import StartGame from '../start-game';
import './app.css';


export default class App  extends Component {
  
  startedId = 1;
  startedValue = 2;

  state = {
    cellCount: 16,
    activeCellCount: 2,
    start: false,
    cells: []
  }
  createCell(row, column) {
    return {
      value: null,
      id: this.startedId++,
      row: row,
      column: column
    }
  }
  generateCells() {
    const cells = [];
    const length = 4;
    let row = 1;
    let column = 0;
    for ( let cell = 0; cell < this.state.cellCount; cell++ ) {
      column++
      if (column > length) {column = 1; row++;}

      cells.push(this.createCell(row, column));
    }
    return cells;
  }
  setActiveCells = (length) => {
      let cellArr = Array.from(Array(length).keys()).map(item => ++item);

      return cellArr.sort(function() {
                return Math.random() - 0.5
             }).slice(0,2);
  };

  startNewGame = () => {
    if (this.state.start) return;
    
    const cells = this.generateCells();
    const activeCells = this.setActiveCells(this.state.cellCount);

    console.log(activeCells);
    cells.filter( (item) => {
      if ( activeCells.includes(item.id) ) {
        item.value = this.startedValue;
      }
      return cells;
    });

    //console.log(cells);

    this.setState((state) => {
      return {
        start: true,
        cells: cells
      }
    });
  };

  setCellState = (cell) => {
    console.log( 'id: ', cell.id, 'value:', cell.value,  'position [',cell.row, ',', cell.column,']');
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
