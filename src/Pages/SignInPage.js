import React from 'react'
import "./SignInPage.css"
import { Link } from "react-router-dom"
import { Button, FormControl, TextField } from '@material-ui/core'

export default function SignInPage() {


	return (
		<div className="SignIn">
			<div className="SignIn__box">
				<h1 className="SignIn__h1">Sign in</h1>
				<form className="SignIn__form" autoComplete="off">
					<TextField required inputProps={{ minLength: 8 }} id="login" label="Login" variant="outlined" fullWidth="100%" />
					<TextField required inputProps={{ minLength: 8 }} style={{ marginTop: "20px" }} id="password" label="Password" type="password" variant="outlined" fullWidth="100%" />

					<Link className="SignIn__link" to="#">Forgot password?</Link>
					<Link className="SignIn__link" to="#">Sign up</Link>
					<div className="SignIn__button_wrap">
						<Button type="submit" style={{ marginTop: "20px" }} variant="contained" size="large" color="primary">
							Sign in
						</Button>
					</div>
				</form>
			</div>

		</div>
	)
}