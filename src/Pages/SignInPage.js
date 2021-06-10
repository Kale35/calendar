import React from 'react'
import "./SignInPage.css"
import { Link } from "react-router-dom"
import { Button, FormControl, TextField } from '@material-ui/core'

export default function SignInPage() {
	return (
		<div className="SignIn">
			<div className="SignIn__box">
				<h1 className="SignIn__h1">Sign In</h1>
				<form className="SignIn__content">
					<TextField variant="outlined" label="Username/Email"></TextField>
					<TextField variant="outlined" label="Password"></TextField>

					<Link className="SignIn__link" to="#">Forgot password?</Link>
					<Link className="SignIn__link" to="/signup">Sign up</Link>
					<div className="SignIn__submit">
						<Button classes={{ label: "SignIn__button" }}>Login</Button>
					</div>
				</form>
			</div>

		</div>
	)
}