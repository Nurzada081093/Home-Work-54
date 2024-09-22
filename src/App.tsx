import './App.css';
import {useState} from 'react';
import {Item} from './types';
import Cells from './Components/Cells/Cells';
import Count from './Components/Count/Count';
import ResetButton from "./Components/ResetButton/ResetButton";

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

        let count: number = counts + 1;
        setCounts(count);
    };

    const resetGame = () => {
        setCounts(0);
        setItems(createItems);
    };

    return (
        <div>
            <h1>Поиск предмета</h1>
            <div className="container">
                <Cells items={items} changeColor={changeColor}/>
            </div>
            <Count counter={counts}/>
            <ResetButton resetGame={resetGame}/>
        </div>
    );
};

export default App;
