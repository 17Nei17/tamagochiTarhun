import './App.css';
import React, { useState, useEffect } from 'react';
import { GameField } from './gameField/GameField';
import { GameStats } from './gameStats/GameStats';
import { setDateInLS } from './core/core';


function App() {
  const [currentDateObj, setCurrentDateObj] = useState(new Date());
  const [health, setCurrentHealth] = useState(localStorage.getItem("health"));
  const [sleep, setCurrentSleep] = useState(localStorage.getItem("sleep"));
  const [hunger, setCurrentHunger] = useState(localStorage.getItem("hunger"));

  useEffect(() => {
    setInterval(() => {
      setDateInLS(currentDateObj);
    }, 10000)
    setInterval(() => {
      setCurrentDateObj(new Date());
    }, 1000)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <GameField currentDateObj={currentDateObj} hunger={hunger} setCurrentHunger={setCurrentHunger}></GameField>
        <GameStats currentDateObj={currentDateObj} health={health} sleep={sleep} hunger={hunger}></GameStats>
      </header>
    </div>
  );
}

export default App;
