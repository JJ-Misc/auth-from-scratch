import React, {useState, useEffect} from "react";

// I explain how this component works in Home.js
export default function Secret(){

    const [message, setMessage] = useState("Loading...");

    useEffect(
        () => {
            fetch('/api/secret')
            .then(res => res.text())
            .then(res => setMessage(message=>res))
        }, [message]
    );

    return (
        <>
        <h1>You're at Secret! Shhhhhhh!</h1>
        <h2>{message}</h2>
        </>
    )
}