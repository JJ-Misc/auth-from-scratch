import React from "react";
import useCustomForm from "../../hooks/useCustomForm.js";

export default function FormWrapper({
    id,
    submitHandler,
    children,
    initialValues
}){

	const {
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useCustomForm({
        // doesn't this object need to be spread?
        initialValues,
        // This is a placeholder for an actual submit function
        // someting is wrong here. why is this a key value pair?
		onSubmit: submitHandler,
    });
    
    return(
        <form 
            className="form" 
            id={id}
            onSubmit={submitHandler}
        >
            {children}
        </form>
    );
}