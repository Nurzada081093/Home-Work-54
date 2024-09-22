import React from 'react';
import {Item} from '../../../types';
import './Cell.css';

interface IProps {
    item: Item;
    changeColor: React.MouseEventHandler;
    gameOver: boolean;
}

const Cell: React.FC<IProps> = ({item, changeColor, gameOver}) => {

    let bgColor;

    const color = () => {
        if (gameOver === false) {
            bgColor = 'grey';
            if (item.clicked) {
                bgColor = 'white';
            } else {
                bgColor = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIIOUZ8yVXusrCxGt4zGkQjw6145EfAAhg_hjX8okXFfqaNC03UMp3V6erwehBdh0V64&usqp=CAU")';
            }
        }
    };

    color();

    return (
        <div
            onClick={changeColor}
            style={{
                width: '70px',
                height: '70px',
                border: '1px solid white',
                borderRadius: '8px',
                fontSize: '30px',
                background: bgColor,
                marginBottom: '10px',
            }}>{item.hasItem && item.clicked ? <img className="icon" src="https://img.icons8.com/emoji/48/sparkling-heart.png" alt="sparkling-heart"/> : ''}</div>
    );
};

export default Cell;

