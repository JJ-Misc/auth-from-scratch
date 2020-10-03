/** @format */

import React from "react";

export default function Form() {
	return (
		<form className="form">
			

			<div className="field">
				<label 
					htmlForm="" 
					className="label"
				>
					First Name
				</label>
				<div className="control has-icons-left has-icons-right">
					<input
						className="input is-success"
						type="text"
						placeholder="First Name"
						value="bulma"
					/>
					<span className="icon is-small is-left">
						<i className="fas fa-user"></i>
					</span>
					<span className="icon is-small is-right">
						<i className="fas fa-check"></i>
					</span>
				</div>
				<p className="help is-success">This username is available</p>
			</div>


			<div className="field">
				<label 
					htmlForm="" 
					className="label"
				>
					Last Name
				</label>
				<div className="control has-icons-left has-icons-right">
					<input
						className="input is-success"
						type="text"
						placeholder="Text input"
						value="bulma"
					/>
					<span className="icon is-small is-left">
						<i className="fas fa-user"></i>
					</span>
					<span className="icon is-small is-right">
						<i className="fas fa-check"></i>
					</span>
				</div>
				<p className="help is-success">This username is available</p>
			</div>

			<div className="field">
				<label 
					htmlFor="" 
					className="label"
				>
					Email
				</label>
				<div className="control has-icons-left has-icons-right">
					<input
						className="input is-danger"
						type="email"
						placeholder="Email input"
						value="hello@"
					/>
					<span className="icon is-small is-left">
						<i className="fas fa-envelope"></i>
					</span>
					<span className="icon is-small is-right">
						<i className="fas fa-exclamation-triangle"></i>
					</span>
				</div>
				<p className="help is-danger">This email is invalid</p>
			</div>
		
			<div className="field">
				<p className="control has-icons-left">
					<input
						className="input"
						type="password"
						placeholder="Password"
					/>
					<span className="icon is-small is-left">
						<i className="fas fa-lock"></i>
					</span>
				</p>
			</div>
		
			<div className="field">
				<p className="control">
					<button className="button is-success">Login</button>
				</p>
			</div>
			
		</form>
	);
}
