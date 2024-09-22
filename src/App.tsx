import './App.css';
import {useState} from 'react';
import {Item} from './types';
import Cells from './Components/Cells/Cells';
import Count from './Components/Count/Count';
import ResetButton from './Components/ResetButton/ResetButton';

const App = () => {

    const createItems = () => {
        const arrayItems: Item[] = [];

        for (let i:number = 0; i < 36; i++) {
           arrayItems.push({hasItem: false, clicked: false, id: i});
        }

        const randomItem:number = Math.floor(Math.random() * arrayItems.length);

        for (let i:number = 0; i < arrayItems.length; i++) {
            if (i === randomItem) {
                arrayItems[i].hasItem = true;
            }
        }

        return arrayItems;
    };

    const [items, setItems] = useState(createItems());
    const [counts, setCounts] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const resetGame = () => {
        setCounts(0);
        setItems(createItems());
        setGameOver(false);
    };

    const changeColor = (id: number) => {

        const copyItems = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    clicked: true,
                };
            }
            return item;
        });

        setItems(copyItems);

        const count: number = counts + 1;
        setCounts(count);

        copyItems.find(item => {
            if (item.clicked && item.hasItem) {
                setTimeout(() => {
                    setGameOver(true);
                    alert('Поздравляю! Вы успешно нашли предмет. Если хотите продолжить игру, то нажмите на кнопку "Reset".');
                }, 50);
            }
        });
    };

    return (
        <div className="container">
            <div className="game-board">
                <Cells items={items} changeColor={changeColor} gameOver={gameOver}/>
            </div>
            <div className="content">
                <Count counter={counts}/>
                <ResetButton resetGame={resetGame}/>
            </div>
        </div>
    );
};

export default App;
