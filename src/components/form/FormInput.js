import React from "react";

export default function FormInput({
    labelText,
    inputName,
    inputType,
    inputPlaceholder,
    inputOnChange,
    inputValue,
    inputLeftIconClass,
    inputRightIconClass,
    helpMessage
}){

    const 
    return(
        <div className="field">
            <label 
                htmlFor={inputName}
                className="label"
            >
                {labelText}
            </label>
            <div className="control has-icons-left has-icons-right">
                <input
                    id={inputName}
                    name={inputName}
                    className="input"
                    type={inputType}
                    placeholder={inputPlaceholder}
                    value={inputValue}
                    onChange={inputOnChange}
                />
                <span className="icon is-small is-left">
                    <i className={`fas fa-${inputLeftIconClass}`}></i>
                </span>
                <span className="icon is-small is-right">
                    <i className={`fas fa-${inputRightIconClass}`}></i>
                </span>
            </div>
            <p className={`help is-danger`}>{helpMessage}</p>
        </div>
    );
}