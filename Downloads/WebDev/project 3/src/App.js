import React from 'react';
import { useState } from "react";
import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';
import './App.css';
import { nanoid } from 'nanoid';

function App() {

  function deleteItem(id) {
    setParkingLotItems((oldItems) => 
        oldItems.filter((item) => item.id !== id)
  );
}
  
  function addItem(date, link, description, priority) {
    setParkingLotItems((oldItems) => [
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

  let [parkingLotItems, setParkingLotItems] = useState([
    {
      id: nanoid(),
      date: '05/14/2024',
      priority: 'Low',
      link: 'https://google.com/',
      description: 'Ultimate source of truth',
    },
    {
      id: nanoid(),
      date: '05/14/2024',
      priority: 'Medium',
      link: 'https://react.dev/',
      description: 'React documentation and tutorial',
    },
  ]);
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
