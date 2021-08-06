import React from 'react'
import Header from '../Components/Header'
const Login = () => {

    return (
        <div>
        <Header props="Login Page"></Header>
            <br></br>
            <form action="/HomeInventory">
            <label>Username:</label>
            <input type="text" name="username"></input>
            <br></br>
            <label>Password:</label>
            <input type="text" name="password"></input>
            <br></br>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
