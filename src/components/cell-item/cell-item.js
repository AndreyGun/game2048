import React from 'react';
import './cell-item.css'

const CellItem = (props) => {

    const { cellProps, activeItem, value, setCellState } = props;
    
    let itemValue = null;
    let cellClass = 'cell-item';
    //console.log(cellProps);
    if (cellProps.activeCells.includes(activeItem)) {
        cellClass += ' is-active value-' + value;
        itemValue = value;
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