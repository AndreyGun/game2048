import React from 'react';
import './control-panel.css';

const ControlPanel = ( { cellProps, events } ) => {

    console.log(events, ' events');
    return(
        <div className='control-panel'>
            <button 
                className='btn btn-top'
                data-direction='top'
                onClick={events.eventTop}>
                &#8593;</button>
            <button 
                className='btn btn-right'
                data-direction='right'
                onClick={events.eventRight}>
                &#8594;</button>
            <button 
                className='btn btn-bottom'
                data-direction='bottom'
                onClick={events.eventBottom}>
                &#8595;</button>
            <button 
                className='btn btn-left'
                data-direction='left'
                onClick={events.eventLeft}>
                &#8592;</button>
        </div>
    );
}

export default ControlPanel;