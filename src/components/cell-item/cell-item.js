import React from 'react';
import './cell-item.css'

const CellItem = (props) => {

    const { cellProps, activeItem, value } = props;
    
    let cellClass = 'cell-item';
    if (cellProps.activeCells.includes(activeItem)) {
        cellClass += ' value-' + value
    }
    return(
        <div id={cellProps.id} className={cellClass}></div>
    );
}

export default CellItem;