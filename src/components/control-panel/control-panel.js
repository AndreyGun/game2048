import React from 'react';
import './control-panel.css';

const ControlPanel = () => {
    return(
        <div className='control-panel'>
            <button className='btn btn-top'>Top</button>
            <button className='btn btn-right'>Right</button>
            <button className='btn btn-bottom'>Bottom</button>
            <button className='btn btn-left'>Left</button>
        </div>
    );
}

export default ControlPanel;