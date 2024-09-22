import React from 'react';
import {Item} from '../../types';
import Cell from './Cell/Cell';

interface IProps {
    items: Item[];
    changeColor: (id: number) => void;
    gameOver: boolean;
}

const Cells: React.FC<IProps> = ({items, changeColor, gameOver}) => {

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }}>
            {items.map((item) => (
                <Cell
                    key={item.id}
                    item={item}
                    changeColor={() => changeColor(item.id)}
                    gameOver={gameOver}
                />
            ))}
        </div>
    );
};

export default Cells;