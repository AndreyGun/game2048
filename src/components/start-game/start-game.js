import React from 'react';
import './start-game.css'

const StartGame = (props) => {
    return(
        <button 
          className='start-game-btn'
          onClick={props.startNewGame}>
          Start
        </button>
    );
}

export default StartGame;