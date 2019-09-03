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

  createCellData(row, column) {
    return {
      value: null,
      id: this.startedId++,
      row: row,
      column: column,
      frozen: false
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

      cells.push(this.createCellData(row, column));
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

  compareCells = (array) => {
    for ( let first = 0; first <= array.length; first++ ) {
      let second = first + 1;
      if (!array[second]) return;

      else if ( array[first].value === null) {
        array[first].value = array[second].value;
        array[second].value = null;
      }
      else if ( array[first].value === array[second].value) {
        array[first].value *= 2;
        array[second].value = null;
      }
    }
    return array;
  };

  compareArrays = (defaultArray, calculatedArray) => {
    for ( let x = 0; x < defaultArray.length; x++ ) {
      if (!calculatedArray[x]) {
        defaultArray[x].value = null;
      } else {
        defaultArray[x].value  = calculatedArray[x].value;
      }
    }
    return defaultArray;
  };

  keyEvent = (event) => {
    let direction = event.target.dataset.direction;
    return this.detectEvent(direction, this.state.cells);
  };

  arrayFilter = (array, direction) => {
    let item1, item2, item3, item4;
    
    if (direction === 'row') {
      console.log('row');
      item1 = array.filter(cell => cell.row === 1);
      item2 = array.filter(cell => cell.row === 2);
      item3 = array.filter(cell => cell.row === 3);
      item4 = array.filter(cell => cell.row === 4);
    } else {
      item1 = array.filter(cell => cell.column === 1);
      item2 = array.filter(cell => cell.column === 2);
      item3 = array.filter(cell => cell.column === 3);
      item4 = array.filter(cell => cell.column === 4);
    }
    return [item1, item2, item3, item4]
  };

  sortArrayById(array) {
    array.sort(function(a, b) {
        return parseFloat(a.id) - parseFloat(b.id);
    });
    return array;
  };
  
  calculateCells = (array) => {
    let cortedColumns = [];
    for (let arrItem of array) {
      let filtered = arrItem.filter(item => item.value !== null);
      this.compareCells(filtered);
      this.compareArrays(arrItem, filtered);
      cortedColumns = [...cortedColumns, ...arrItem];
    }
    return cortedColumns;
  };
  
  detectEvent = (event, array) => {
    let arrayItem, sortedElements, cells;
    switch (event) {
      case 'top':
        arrayItem = this.arrayFilter(array);
        sortedElements = this.calculateCells( arrayItem );
        cells = this.sortArrayById( sortedElements );
        this.setState({
          cells: this.setValueInCell(cells, this.getActiveCellData( cells ))
        });
      break;
      case 'left':
        console.log('left');
        arrayItem = this.arrayFilter(array, 'row');
        sortedElements = this.calculateCells( arrayItem );
        cells = this.sortArrayById( sortedElements );
        this.setState({
          cells: this.setValueInCell(cells, this.getActiveCellData( cells ))
        });
        break;
      case 'right':
        console.log('right');
        arrayItem = this.arrayFilter(array, 'row');
        arrayItem.map(item => item.reverse());
        sortedElements = this.calculateCells( arrayItem );
        cells = this.sortArrayById( sortedElements );
        this.setState({
          cells: this.setValueInCell(cells, this.getActiveCellData( cells ))
        });
      break;
      case 'bottom':
        console.log('bottom');
        arrayItem = this.arrayFilter(array);
        arrayItem.map(item => item.reverse());
        sortedElements = this.calculateCells( arrayItem );
        cells = this.sortArrayById( sortedElements );
        this.setState({
          cells: this.setValueInCell(cells, this.getActiveCellData( cells ))
        });
      break;

      default:
      break;
    }
  };

  render() {
    return (
      <div>
        <GameTitle />
        <CellBlock 
          cellProps={this.state}
          setCellState={this.setCellState}/>
        <StartGame startNewGame={this.startNewGame}/>
        <ControlPanel 
          cellProps={this.state}
          keyEvent={this.keyEvent} />
      </div>
    );
    
  };
};
