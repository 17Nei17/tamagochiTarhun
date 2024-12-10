import './App.css';
import React, { useState, useEffect } from 'react';
import { GameField } from './gameField/GameField';
import { GameStats } from './gameStats/GameStats';
import { setDateInLS } from './core/core';
import { initNewGame } from './core/core';

function App() {
  const [currentDateObj, setCurrentDateObj] = useState(new Date());
  if (!localStorage.getItem("date")) {
    initNewGame(currentDateObj);
  }
  const [health, setCurrentHealth] = useState(localStorage.getItem("health"));
  const [sleep, setCurrentSleep] = useState(localStorage.getItem("sleep"));
  const [hunger, setCurrentHunger] = useState(localStorage.getItem("hunger"));

  useEffect(() => {
    setInterval(() => {
      setCurrentDateObj(new Date());
    }, 1000)
  }, []);

  useEffect(() => {
    setDateInLS(currentDateObj, health, sleep, hunger);
  }, [health, sleep, hunger]);

  return (
    <div className="App">
      <header className="App-header">
        <GameField
          currentDateObj={currentDateObj}
          hunger={hunger}
          sleep={sleep}
          health={health}
          setCurrentHunger={setCurrentHunger}
          setCurrentHealth={setCurrentHealth}
          setCurrentSleep={setCurrentSleep}
        ></GameField>
        <GameStats currentDateObj={currentDateObj} health={health} sleep={sleep} hunger={hunger}></GameStats>
      </header>
    </div>
  );
}

export default App;
