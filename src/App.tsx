import './App.css';
import {useState} from 'react';
import {Item} from './taypes';
import Cells from './Components/Cells/Cells';

const App = () => {

    const createItems = () => {
        const arrayItems: Item[] = [];

        for (let i:number = 0; i < 36; i++) {
           arrayItems.push({hasItem: false, clicked: false});
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


    return (
        <div>
            <h1>Поиск предмета</h1>
            <div className="container">
                <Cells items={items}/>
            </div>
        </div>
    );
};

export default App;
