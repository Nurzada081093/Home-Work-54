import './App.css';

interface Items {
    hasItem: boolean;
    clicked: boolean;
}

const App = () => {

    const createItems = () => {
        const arrayItems: Items[] = [];

        for (let i:number = 0; i < 36; i++) {
           arrayItems.push({clicked: false, hasItem: false});
        }

        const randomItem:number = Math.floor(Math.random() * arrayItems.length);
        console.log(randomItem);

        for (let i:number = 0; i < arrayItems.length; i++) {
            if (i === randomItem) {
                arrayItems[i].hasItem = true;
                console.log(i);
                console.log(arrayItems[i]);
            }
        }

        return arrayItems;
    };

    console.log(createItems());


    return (
        <div className="container">
        </div>
    );
};

export default App;
