import React from 'react';
import './cell-item.css'

const CellItem = (props) => {

    return(
        <div id={props.id} className="cell-item"></div>
    );
}

export default CellItem;