import React, {useState, useEffect} from "react";
export default function Home(){
    const [message, setMessage] = useState("Loading...");
    useEffect(
        () => {
            fetch('/api/home')
            .then(res => res.text())
            .then(res => setMessage(message=>res))
        }, [message]
    );
    return (
        <>
        <h1>You're Home</h1>
        <h2>{message}</h2>
        </>
    )
}