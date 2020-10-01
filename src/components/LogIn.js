import React from "react";
import useCustomForm from "../hooks/useCustomForm.js";

const initialValues = {
	fName: "",
	lName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

export default function LogIn() {
	const {
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useCustomForm({
        initialValues,
        // This is a placeholder for an actual submit function
		onSubmit: (values) => console.log({ values }),
    });
    
    // Do we need the ref attribute?

    return(
        <form onSubmit={handleSubmit}  >
            <label htmlFor="fName">First Name</label>
            <input
                type="text"
                id="fName"
                name="fName"
                placeholder="First Name"
                value={values.fName}
                onChange={handleChange}
            />
            
            <label htmlFor="lName">Last Name</label>
            <input
                type="text"
                id="lName"
                name="lName"
                placeholder="Last Name"
                value={values.lName}
                onChange={handleChange}
            />
            
            <label htmlFor="email">Email address</label>
            <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
                required
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
            />
            
            <label htmlFor="password">Confirm Password</label>
            <input
                required
                type="text"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
            />

            <button type="submit" >Log In</button>
        </form>
    )
}
