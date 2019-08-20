import React from 'react';
import './cell-item.css'

const CellItem = ({cellProps}) => {
    console.log(cellProps)

    let cellClass = 'cell-item';
    if (cellProps.activeCell) {
        cellClass += 'value-' + cellProps.cellValue
    }
    return(
        <div id={cellProps.id} className={cellClass}></div>
    );
}

export default CellItem;