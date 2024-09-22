import React from 'react';

interface ICount {
    counter: number;
}

const Count: React.FC<ICount> = ({counter}) => {
    return (
        <div>Tries: {counter}</div>
    );
};

export default Count;