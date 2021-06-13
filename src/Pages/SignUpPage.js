import React from 'react'
import "./SignInPage.css"
import { Link } from "react-router-dom"
import { Button, FormControl, TextField } from '@material-ui/core'

export default function SignUpPage() {
	return (
		<div className="SignIn">
			<div className="SignIn__box">
				<h1 className="SignIn__h1">Sign Up</h1>
				<form className="SignIn__content">
					<TextField variant="outlined" label="Email"></TextField>
					<TextField variant="outlined" label="Create Username"></TextField>
					<TextField variant="outlined" label="Create Password"></TextField>
					<Link to="/" className="SignIn__link">Return to Login</Link>
					<div className="SignIn__submit">
						<Button classes={{ label: "SignIn__button" }}>Submit</Button>
					</div>
				</form>
			</div>

		</div>
	)
}