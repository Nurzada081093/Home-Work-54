import React from 'react';
import './Count.css';

interface ICount {
    counter: number;
}

const Count: React.FC<ICount> = ({counter}) => {
    return (
        <div className="tries">Tries: {counter}</div>
    );
};

export default Count;