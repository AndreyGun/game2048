import React from 'react'
import CellItem from '../cell-item/cell-item';
import './cell-block.css';

const CellBlock = ({cellProps, setCellState}) => {

    const { cells } = cellProps;
    
    console.log(cells);
    const cellItemList = cells.map((cell) => {
        let cellId =  cell.id;
        //console.log(cell.value);
        return(
            <div 
                className='cell-item-holder'
                key={cellId}>
                <CellItem 
                    cellProps={cellProps}
                    activeItem={cellId}
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