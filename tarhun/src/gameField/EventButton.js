import React, { useState, useEffect, useRef } from 'react';



export function EventButton(props) {
    const prevCountRef = useRef;
    useEffect(() => {
        prevCountRef.current = props.stats;
    }, [props.stats]);

    useEffect(() => {
        setInterval(() => {
            props.setNewValue((Number(prevCountRef.current) + 1))
        }, props.timeForUpdate)
    }, []);

    function SetFullValue() {
        props.setNewValue(100);
    }

    return (
        <button onClick={() => SetFullValue()}>{props.text}</button>
    );
}