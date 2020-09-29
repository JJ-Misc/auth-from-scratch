import React from "react";
import { Link } from "react-router-dom";

// A component to render our nav links
export default function Nav(){

    const divStyle= {
        // margin: "1em",
        width: "100%",
        height: "auto",
        position: "relative",
        display:"flex",
        justifyContent: "spaceAround",
        alignItems: "center",
    }

    const linkStyle = {
        margin:"1em", 
        padding:"1em",
        width:"3em",
        height: "auto",
        color:"#fff",
        backgroundColor:"darkGray"
    }

    // The job of the Links here is to make sure that any navigation passes through React Router, which will deal with the linked URLs in Route components.

    return (
        <div style={divStyle}>
            <a href="/secret">Secret without a Link</a>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/secret" style={linkStyle}>Secret</Link>
        </div>
    )
}