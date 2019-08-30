import React, { Component } from 'react';
import CellBlock from '../cell-block';
import GameTitle from '../game-title';
import StartGame from '../start-game';
import ControlPanel from '../control-panel';
import './app.css';


export default class App  extends Component {
  
  startedId = 1;
  startedValue = 2;

  state = {
    cellCount: 16,
    start: false,
    cells: [],
    activeCell: [2, 2, 2, 4, 2]
  }

  createCell(row, column) {
    return {
      value: null,
      id: this.startedId++,
      row: row,
      column: column
    }
  };
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
  };

  startNewGame = () => {
    if (this.state.start) return;
    
    const defaultValue = 2;
    const cells = this.generateCells();
    this.setValueInCell(cells, this.getActiveCellData(cells, defaultValue));
    this.setValueInCell(cells, this.getActiveCellData(cells, defaultValue));

    this.setState({
        cells: cells,
        start: true
    });
  };

  randomValue(value) {
    return Math.floor(Math.random()* value );
  };

  getActiveCellData = (cells, cellValue) => {

    const { activeCell } = this.state;

    const fillteredCells = cells.filter(cell => cell.value === null);
    const cellId = fillteredCells[ this.randomValue( fillteredCells.length ) ].id;

    if (!cellValue) cellValue = activeCell[ this.randomValue( activeCell.length )];

    console.log(fillteredCells, ' fillteredCells');
    console.log([ cellId, cellValue ], '  [ cellId, cellValue ]');
    return [ cellId, cellValue ];
  };

  setActiveCellData(arr, id, value) {
    // eslint-disable-next-line no-unused-vars
    for ( let cell of arr ) {
      if (cell.id === id) {
        cell.value = value;
      }
    };
    return arr;
  };

  setValueInCell(cellsArray, dataArray) {
    return this.setActiveCellData(cellsArray, dataArray[0], dataArray[1]);
  };

  setCellState = (cell) => {
    console.log( 'id: ', cell.id, 'value:', cell.value,  'position [',cell.row, ',', cell.column,']');
    
  };
  compare = (row, column) => {

  }
  detectEvent = (event) => {
    switch (event) {
      case 'top':
        console.log('top');
        // 4 array
        // arr1 = [{row: 1, column: 1},
              //   {row: 2, column: 1},
              //   {row: 3, column: 1},
              //   {row: 4, column: 1}
              // ]
        // arr2 = [ {row: 1, column: 2}, {row: 2, column: 2}, {row: 3, column: 2}, {row: 4, column: 2} ]
        // arr3 = [ {row: 1, column: 3}, {row: 2, column: 3}, {row: 3, column: 3}, {row: 4, column: 3} ]
        // arr4 = [ {row: 1, column: 4}, {row: 2, column: 4}, {row: 3, column: 4}, {row: 4, column: 4} ]
        // 
        break;
      case 'left':
        console.log('left');
        break;
      case 'right':
        console.log('right');
        break;
      case 'bottom':
        console.log('bottom');
        break;

      default:
        break;
    }
  }

  render() {

    const { cells } = this.state;

    const events = {
      eventTop: () => {
        this.setState({
          cells: this.setValueInCell(cells, this.getActiveCellData(cells))
        });
      },
      eventBottom: () => {
        this.setState({
          cells: this.setValueInCell(cells, this.getActiveCellData(cells))
        });
      },
      eventLeft: () => {
        this.setState({
          cells: this.setValueInCell(cells, this.getActiveCellData(cells))
        });
      },
      eventRight: () => {
        this.setState({
          cells: this.setValueInCell(cells, this.getActiveCellData(cells))
        });
      }

    }
    return (
      <div>
        <GameTitle />
        <CellBlock 
          cellProps={this.state}
          setCellState={this.setCellState}/>
        <StartGame startNewGame={this.startNewGame}/>
        <ControlPanel 
          cellProps={this.state}
          events={events} />
      </div>
    );
    
  };
};
