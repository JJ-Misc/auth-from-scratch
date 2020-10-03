import React from "react";
import useCustomForm from "../hooks/useCustomForm.js";
import Form from "./form/FormWrapper.js"
import Input from "./form/Input.js"

const initialValues = {
	fName: "",
	lName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

function aSubmitFunction(values){
    console.log(values);
}

export default function LogIn() {

    const uCF = useCustomForm({ initialValues, aSubmitFunction });

    // uCF contains
    // {
	// 	values,
	// 	errors,
	// 	touched,
	// 	handleChange,
	// 	handleBlur,
	// 	handleSubmit,
	// }

    return(
        <Form 
            id="regForm" 
            onSubmit={uCF.handleSubmit} 
            bttnText="Log In"
        >
            <Input 	
                labelFor="fName"
                labelText="First Name"
                inputId="fName"
                inputName="fName"
                inputType="text"
                inputPlaceholder="First Name"
                inputLeftIconClass="envelope"
                inputRightIconClass="exclamation-triangle"
                helpMessage="Please enter your first name."
                inputOnChange={uCF.handleChange}
                inputValue={uCF.values.fName}
            />
        </Form>
    )
}
