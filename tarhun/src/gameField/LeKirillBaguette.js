import React, { useEffect, useRef } from 'react';
import leKirill from '../images/leKirill.jpg'


export function LeKirillBaguette(props) {
    const prevCountRef = useRef;
    useEffect(() => {
        prevCountRef.current = props.hunger;
    }, [props.hunger]);


    function returnHome() {
        props.setLocation(props.locationName)
    }
    function feed(value) {
        if (Number(prevCountRef.current) + value >= 100) {
            props.setCurrentHunger(100);
        } else {
            props.setCurrentHunger((Number(prevCountRef.current) + value));
        }
    }

    return (
        <div className='game-field flex-center flex-col'>
            <img src={leKirill} className='kirillArt'></img>
            <button className="return-button" onClick={() => returnHome()}>Вернуться</button>
            <div className='list'>
                <div onClick={() => feed(10)}>1. Еда-1</div>
                <div onClick={() => feed(20)}>2. Еда-2</div>
                <div onClick={() => feed(100)}>3. Еда-3</div>
            </div>
        </div>
    );
}




