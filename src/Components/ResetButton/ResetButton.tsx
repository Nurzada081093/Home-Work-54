import React from 'react';

interface IButton {
    resetGame: React.MouseEventHandler;
}

const ResetButton: React.FC<IButton> = ({resetGame}) => {
    return (
        <div>
            <button type="button" onClick={resetGame}>Reset</button>
        </div>
    );
};

export default ResetButton;