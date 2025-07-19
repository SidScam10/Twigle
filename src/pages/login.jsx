import React, {useState} from 'react'
import { loginUser, loginWithGoogle } from '../util/auth'
import { useNavigate } from 'react-router-dom'
import '../css files/login_css.css'
import Tree_Logo from '../assets/tree_logo.png'
import { FaGoogle } from "react-icons/fa";

export default function Login() 
{
    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function attemptloginUser(event) 
    {
        event.preventDefault()
        const response = await loginUser({username,password})

        if(response.status === 'success')
        {
            alert("Login Successful")
            //Reroute user to dashboard page
            navigate("/dashboard", {replace: true})
        }
        else
        {
            alert(response.error)
        }
    }

    async function handleGoogleLogin() {
        const response = await loginWithGoogle();
        if(response.status === "success"){
            alert("Google Login Successful");
            navigate("/dashboard", {replace: true});
        }
        else {
            alert(response.error);
        }
    }

    return (
    <div className="login_body">
        <form className="login_form" onSubmit={attemptloginUser}>
            <h1 className="login_header">Login to Twigle</h1>
            <input type="email" placeholder="Email" value={username} onChange={event => setUsername(event.target.value)}/><br/>
            <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/><br/>
            <input type= "submit" value="Login" /><br/>
            <div className="divider">
                    <span>OR</span>
            </div>
            <div onClick={handleGoogleLogin} className="google-div">
                <FaGoogle alt="user" className="google" />Login with Google
            </div>
            <img src={Tree_Logo} className='login_logo'></img>
        </form>
    </div>)
}
