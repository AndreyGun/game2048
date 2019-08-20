import React from 'react'
import CellItem from '../cell-item/cell-item';
import './cell-block.css';

const CellBlock = ({cellProps}) => {

    const { cellCount, activeCells } = cellProps;
    
    console.log(activeCells);
    const cellItemList = Array.from(Array(cellCount).keys()).map((item) => {
        return(
            <div className='cell-item-holder' key={item + 1} id={item + 1}>
                <CellItem cellProps={cellProps} item={item + 1}/>
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