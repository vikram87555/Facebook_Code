import React from "react";
import "./LoginPage.css"
import { Link } from 'react-router-dom'
function LoginPage() {
    return(
    <div className="Login">
        <div className="facebook">
            <div className="facebooktext">
                facebook
            </div>
            <div className="title">
            Facebook helps you connect and share <br></br>with the people in your life
            </div>
        </div>
        <div classNaame="logincontainer">
            <div className="logindettail">
                <input type="email" placeholder="mail address or phone number"/>
                <br></br>
                <input type="Password" placeholder="Password"/>
                <br></br>
                <button className="btn">
                   <Link to="/HeaderArea">Login</Link>
                </button>
                <div className="forget">
                <a href="forget">Forgotten password?</a>
                <br></br>
            </div>
            </div>
            
            <div className="create">
                <br></br>
                <button className="btns">
                Create New Account
                </button>
            </div>
            <p></p>
            <br></br>
            <div className="page">
                <a href="createpage">Create a Page</a> for a celebrity, brand or business.
            </div>
        </div>
    </div>
    )
}
export default LoginPage