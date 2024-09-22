import React from 'react';
import {Item} from '../../../types';

interface IProps {
    item: Item;
    changeColor: React.MouseEventHandler;
}

const Cell: React.FC<IProps> = ({item, changeColor}) => {
     const color = item.clicked ? 'white' : 'grey';

    return (
        <div
            onClick={changeColor}
            style={{
                width: '80px',
                height: '80px',
                border: '1px solid red',
                fontSize: '30px',
                backgroundColor: color,
            }}>{item.hasItem && item.clicked ? 'O' : ''}</div>
    );
};

export default Cell;

