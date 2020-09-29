import React from "react";
import useCustomForm from "../../hooks/useCustomForm.js";

const initialValues = {
	fName: "",
	lName: "",
    email: "",
    password: ""
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
		onSubmit: (values) => console.log({ values }),
	});

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fName">First Name</label>
            <input
                type="fName"
                id="fName"
                name="fName"
                placeholder="First Name"
                value={values.fName}
                onChange={handleChange}
            />
            
            <label htmlFor="lName">Last Name</label>
            <input
                type="lName"
                id="lName"
                name="lName"
                placeholder="Last Name"
                value={values.lName}
                onChange={handleChange}
            />
            
            <label htmlFor="email">Email address</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
            />

            <button type="submit" >Log In</button>
        </form>
    )
}
