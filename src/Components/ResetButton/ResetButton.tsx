import React from 'react';
import './ResetButton.css';

interface IButton {
    resetGame: React.MouseEventHandler;
}

const ResetButton: React.FC<IButton> = ({resetGame}) => {
    return (
        <div className="button">
            <button type="button" onClick={resetGame}>Reset</button>
        </div>
    );
};

export default ResetButton;