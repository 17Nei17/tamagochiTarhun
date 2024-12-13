import React, { useState, useEffect } from 'react';
import { EventButton } from './EventButton';

export function GameField(props) {
    return (
        <div className='game-buttons-wrap'>
            <div>Текущее время {props.currentDateObj.getHours()}:{props.currentDateObj.getMinutes()}:{props.currentDateObj.getSeconds()}</div>
            <EventButton
                setNewValue={props.setCurrentHunger}
                stats={props.hunger}
                text="Покормить"
                setLocation={props.setLocation}
                locationName='leKirillBaguette'
            ></EventButton>
            <EventButton
                setNewValue={props.setCurrentSleep}
                stats={props.sleep}
                text="Положить спать"
                setLocation={props.setLocation}
                locationName='sleep'
            ></EventButton>
        </div>
    );
}