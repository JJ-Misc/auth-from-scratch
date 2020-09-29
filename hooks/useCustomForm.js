import { useState, useEffect, useRef } from "react";

const useCustomForm = ({ initialValues, onSubmit }) => {
	const [values, setValues] = useState(initialValues || {});
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});
	const [onSubmitting, setOnSubmitting] = useState < boolean > false;
	const [onBlur, setOnBlur] = useState < boolean > false;

	const formRendered = useRef(true);

	useEffect(() => {
		if (!formRendered.current) {
			setValues(initialValues);
			setErrors({});
			setTouched({});
			setOnSubmitting(false);
			setOnBlur(false);
        }
		formRendered.current = false;
	}, [initialValues]);

	const handleChange = (event) => {
        const { target: {name, value} } = event;
        event.persist();
		setValues({ ...values, [name]: value });
	};

	const handleBlur = (event) => {
		const { target: {name} } = event;
		setTouched({ ...touched, [name]: true });
		setErrors({ ...errors });
	};

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors({ ...errors });
		onSubmit({ values, errors });
	};

	return {
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};

export default useCustomForm;
