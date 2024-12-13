import React, { useState, useEffect, useRef } from 'react';


export function GameStats(props) {
    const prevCountRef = useRef();
    useEffect(() => {
        prevCountRef.current = props.stats;
    }, [props.stats]);

    useEffect(() => {
        setInterval(() => {
            props.setCurrentStats((Number(prevCountRef.current) - 1))
        }, props.timeForUpdate)
    }, []);

    return (
        <div>
            <div>{props.statsName} {props.stats}</div>
        </div>

    );
}