import React from 'react';
import { useState } from "react";
import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';
import './App.css';
import { nanoid } from 'nanoid';

function App() {

  function addItem(date, link, description, priority) {
    setParkingLotItems (function (oldItems) {
        let newItems = [
            ...oldItems,
            {
                id: nanoid(),
                date,
                description,
                link,
                priority,
            },
        ];
        localStorage.setItem('items', JSON.stringify(newItems));
        return newItems;
});
}

function deleteItem(id) {
  setParkingLotItems( function (oldItems) { 
      let newItems = oldItems.filter((item) => item.id !== id);
      localStorage.setItem('items', JSON.stringify(newItems));
      return newItems;
});
}

function getInitialState() {
  let savedState = localStorage.getItem('items');
  if (typeof savedState === 'string') {
    return JSON.parse(savedState);
  }
  return [];
}

  const [parkingLotItems, setParkingLotItems] = useState(getInitialState());
  return (
    <div className="App">
      <header className="App-header">
          <h1>Browser Parking Lot</h1>
          <p>Send most of your browser tabs into retirement</p>
      </header>
      <main>
        <ParkingLotForm addItem={addItem} />
        <ParkingLotList 
          parkingLotItems={parkingLotItems}
          deleteItem={deleteItem} />
        
      </main>
    </div>
  );
}

export default App;
