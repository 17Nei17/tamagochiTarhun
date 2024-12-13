import React, { useState, useEffect, useRef } from 'react';



export function EventButton(props) {
    function setLocation() {
        props.setLocation(props.locationName)
    }

    return (
        <button onClick={() => setLocation()}>{props.text}</button>
    );
}