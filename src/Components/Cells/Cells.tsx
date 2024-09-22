import React from 'react';
import {Item} from '../../types';
import Cell from './Cell/Cell';

interface IProps {
    items: Item[];
    changeColor: (id: number) => void;
}

const Cells: React.FC<IProps> = ({items, changeColor}) => {

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            {items.map((item) => (
                <Cell
                    key={item.id}
                    item={item}
                    changeColor={() => changeColor(item.id)}
                />
            ))}
        </div>
    );
};

export default Cells;