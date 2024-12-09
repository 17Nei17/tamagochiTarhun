import React, { useState, useEffect } from 'react';


export function GameField(props) {
    // const [count, setCount] = useState(0);


    // useEffect(() => {

    // });

    return (
        <div className='game-field'>
            <div>Текущее время {props.currentDateObj.getHours()}:{props.currentDateObj.getMinutes()}:{props.currentDateObj.getSeconds()}</div>
            <button onClick={() => props.setCurrentHunger(100)}>Покормить</button>
        </div>
    );
}