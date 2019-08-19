import React from 'react'
import CellItem from '../cell-item/cell-item';
import './cell-block.css';

const CellBlock = ({cellProps}) => {
    const { "dataCells", cellCount } = cellProps;

    const cellItemList = Array.from(Array(cellCount).keys()).map((item) => {
        return(
            <CellItem key={item}/>
        )
    });
    console.log(cellProps.dataCells);
    console.log(cellItemList[0]);
    return(
        <div className='cell-block'>
            {cellItemList}
        </div>
    );
}

export default CellBlock;