import React from 'react';
import { useState, useEffect } from "react";
import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';
import './App.css';
import { nanoid } from 'nanoid';
import Timer from "./Components/Timer/Timer";

function App() {

const [parkingLotItems, setParkingLotItems] = useState(getInitialState());

function saveParkingLotItems() {
  localStorage.setItem("items", JSON.stringify(parkingLotItems));
}

useEffect(saveParkingLotItems, [ parkingLotItems ]);

function addItem(date, link, description, priority) {
    setParkingLotItems ( (oldItems) =>
        [
            ...oldItems,
            {
                id: nanoid(),
                date,
                description,
                link,
                priority,
            },
        ]);
}

function deleteItem(id) {
  setParkingLotItems(
    (oldItems) => oldItems.filter(item => item.id !== id)
); 
}

function getInitialState() {
  let savedState = localStorage.getItem('items');
  if (typeof savedState === 'string') {
    return JSON.parse(savedState);
  }
  return [];
}




  return (
    <div className="App">
      <header className="App-header">
          <h1>Browser Parking Lot</h1>
          <p>Send most of your browser tabs into retirement</p>
          <Timer />
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
