import './App.css';
import React, { useState, useEffect } from 'react';
import { GameField } from './gameField/GameField';
import { GameStats } from './gameStats/GameStats';
import { setDateInLS } from './core/core';
import { initNewGame } from './core/core';
import { LeKirillBaguette } from './gameField/LeKirillBaguette'
import { TarhunHome } from './gameField/TarhunHome'

function App() {
  const [currentDateObj, setCurrentDateObj] = useState(new Date());
  if (!localStorage.getItem("date")) {
    initNewGame(currentDateObj);
  }
  const [health, setCurrentHealth] = useState(localStorage.getItem("health"));
  const [sleep, setCurrentSleep] = useState(localStorage.getItem("sleep"));
  const [hunger, setCurrentHunger] = useState(localStorage.getItem("hunger"));
  const [location, setLocation] = useState('tarhunHome');

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
          setCurrentSleep={setCurrentSleep}
          setCurrentHealth={setCurrentHealth}
          setLocation={setLocation}
        >
        </GameField >
        {location == 'leKirillBaguette' && <LeKirillBaguette setLocation={setLocation} locationName="tarhunHome"  hunger={hunger} setCurrentHunger={setCurrentHunger}></LeKirillBaguette>}
        {location == 'tarhunHome' && <TarhunHome setLocation={setLocation}></TarhunHome>}
        <GameStats currentDateObj={currentDateObj} stats={hunger} setCurrentStats={setCurrentHunger} timeForUpdate="1000" statsName="Голод"></GameStats>
        <GameStats currentDateObj={currentDateObj} stats={sleep} setCurrentStats={setCurrentSleep} timeForUpdate="2000" statsName="Сонливость"></GameStats>
        <GameStats currentDateObj={currentDateObj} stats={health} setCurrentStats={setCurrentHealth} timeForUpdate="3000" statsName="Здоровье"></GameStats>
      </header>
    </div>
  );
}

export default App;
