import React from 'react';
import {Item} from '../../../taypes';

const Cell: React.FC<Item>= (item) => {
    return (
        <div style={{
            width: '80px',
            height: '80px',
            border: '1px solid red',
            fontSize: '30px'
        }}>{item.hasItem ? 'O' : ''}</div>
    );
};

export default Cell;


