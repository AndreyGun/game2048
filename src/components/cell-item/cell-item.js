import React from 'react';
import './cell-item.css'

const CellItem = (props) => {

    const { cellProps, activeItem, value } = props;
    let itemValue = null;
    let cellClass = 'cell-item';
    if (cellProps.activeCells.includes(activeItem)) {
        cellClass += ' is-active value-' + value;
        itemValue = value;
    }
    return(
        <div 
            className={cellClass}>
            {itemValue}
        </div>
    );
}

export default CellItem;