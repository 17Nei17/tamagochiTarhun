import React, { useState, useEffect } from 'react';


export function GameStats(props) {
    // const [count, setCount] = useState(0);


    // useEffect(() => {

    // });.
    return (
        <div>
            {/* <div>Текущее время {props.currentDateObj.getHours()}:{props.currentDateObj.getMinutes()}:{props.currentDateObj.getSeconds()}</div> */}
            <div>Здоровье {props.health}</div>
            <div>Сон {props.sleep}</div>
            <div>Голод {props.hunger}</div>
        </div>

    );
}