import React from 'react';
import './cell-item.css'

const CellItem = (cellProps) => {

    const { cellValue, setCellState } = cellProps;
    
    let itemValue = null;
    let cellClassName = 'cell-item';
    
    if (cellValue !== null) {
        cellClassName += ' is-active value-' + cellValue;
        itemValue = cellValue;
    }
    return(
        <div 
            className={cellClassName}
            onClick={ setCellState }>
            {itemValue}
        </div>
    );
}

export default CellItem;