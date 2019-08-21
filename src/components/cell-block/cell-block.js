import React from 'react'
import CellItem from '../cell-item/cell-item';
import './cell-block.css';

const CellBlock = ({cellProps, setCellState}) => {

    const { cells, activeCells } = cellProps;
    
    console.log(cellProps);
    const cellItemList = cells.map((cell) => {
        let cellId =  cell.id;
        if (activeCells.includes(cellId)) {
            console.log('true');
            //setValue();
        }
        //console.log(item.id)
        return(
            <div 
                className='cell-item-holder'
                key={cellId}>
                <CellItem 
                    cellProps={cellProps}
                    activeItem={cellId}
                    value={2}
                    setCellState={() => setCellState(cellId)}/>
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