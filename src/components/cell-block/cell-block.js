import React from 'react'
import CellItem from '../cell-item/cell-item';
import './cell-block.css';

const CellBlock = ({cellProps}) => {
    const { cellCount } = cellProps;

    const cellItemList = Array.from(Array(cellCount).keys()).map((item) => {
        return(
            <CellItem key={item + 1} id={item + 1}/>
        )
    });
    const setStartCells = (cellCount) => {
        let cellArr = [];
        for (let cell = 0; cell < cellProps.startingNumber; cell++) {
            let activeCell = Math.floor(Math.random()*10) + 1;
            if ( cellArr.includes(activeCell) ) {
                cell--;
            } else {
                cellArr.push(activeCell);
            }
        }
        return cellArr;
    }
    setStartCells();
    console.log(cellItemList);
    return(
        <div className='cell-block'>
            {cellItemList}
        </div>
    );
}

export default CellBlock;