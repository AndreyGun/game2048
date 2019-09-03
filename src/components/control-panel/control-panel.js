import React from 'react';
import './control-panel.css';

const ControlPanel = ( { cellProps, keyEvent } ) => {

    //console.log(events, ' events');
    return(
        <div className='control-panel'>
            <button 
                className='btn btn-top'
                data-direction='top'
                onClick={keyEvent}>
                &#8593;</button>
            <button 
                className='btn btn-right'
                data-direction='right'
                onClick={keyEvent}>
                &#8594;</button>
            <button 
                className='btn btn-bottom'
                data-direction='bottom'
                onClick={keyEvent}>
                &#8595;</button>
            <button 
                className='btn btn-left'
                data-direction='left'
                onClick={keyEvent}>
                &#8592;</button>
        </div>
    );
}

export default ControlPanel;