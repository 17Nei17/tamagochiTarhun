import React, { useState, useEffect } from 'react';
import { EventButton } from './EventButton';

export function GameField(props) {
    return (
        <div className='game-field'>
            <div>Текущее время {props.currentDateObj.getHours()}:{props.currentDateObj.getMinutes()}:{props.currentDateObj.getSeconds()}</div>
            <EventButton
                currentDateObj={props.currentDateObj}
                setNewValue={props.setCurrentHunger}
                stats={props.hunger}
                timeForUpdate={1000}
                text="Покормить"
            ></EventButton>
            <EventButton
                currentDateObj={props.currentDateObj}
                setNewValue={props.setCurrentSleep}
                stats={props.sleep}
                timeForUpdate={2000}
                text="Положить спать"
            ></EventButton>
        </div>
    );
}