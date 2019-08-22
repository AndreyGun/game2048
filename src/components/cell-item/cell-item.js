import React from 'react';
import './cell-item.css'

const CellItem = (props) => {

    const { cellValue, setCellState } = props;
    
    let itemValue = null;
    let cellClass = 'cell-item';
    
    if (cellValue !== null) {
        cellClass += ' is-active value-' + cellValue;
        itemValue = cellValue;
    }
    return(
        <div 
            className={cellClass}
            onClick={ setCellState }>
            {itemValue}
        </div>
    );
}

export default CellItem;