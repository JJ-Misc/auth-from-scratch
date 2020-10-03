import React from "react";

export default function FormWrapper({
    id,
    submitHandler,
    children,
    bttnText
}){
    
    return(
        <form 
            className="form" 
            id={id}
            onSubmit={submitHandler}
        >
            {children}
            <button type="submit" >Log In</button>
        </form>
    );
}