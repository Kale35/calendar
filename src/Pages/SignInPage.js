import React from 'react'
import "./SignIn.css"
import {Link} from "react-router-dom"

export default function SignInPage() {



    return (
        <div className="SignIn">
            <div className="SignIn__box">
                <h1 className="SignIn__h1">Sign in</h1>
                {/* input:login */}
                {/* input:password */}
                <Link to="#">Forgot password?</Link>
                <Link to="#">Sign up</Link>
            </div>

        </div>
    )
}