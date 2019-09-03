import React from 'react'
import CellItem from '../cell-item/cell-item';
import './cell-block.css';

const CellBlock = ({cellProps, setCellState}) => {
    
    //console.log(cellProps.cells, '   cell blocks ');

    const cellItemList = cellProps.cells.map((cell) => {
        let cellId = cell.id;
        return(
            <div 
                className='cell-item-holder'
                key={cellId}>
                <CellItem 
                    cellProps={cellProps}
                    cellValue={cell.value}
                    setCellState={() => setCellState(cell)}/>
            </div>
        )
    });
    
    
    return(
        <div className='cell-block'>
            {cellItemList}
        </div>
    );
}

export default CellBlock;