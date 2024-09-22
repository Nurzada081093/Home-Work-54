import React from 'react';
import {Item} from '../../taypes';
import Cell from './Cell/Cell';


interface IProps {
    items: Item[]
}

const Cells: React.FC<IProps> = ({items}) => {

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            {items.map((item, index) => (
                <Cell key={index} hasItem={item.hasItem} clicked={item.clicked}/>
            ))}
        </div>
    );
};

export default Cells;