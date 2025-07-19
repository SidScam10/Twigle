import React, {useState} from 'react'
import { createUser, loginWithGoogle } from '../util/auth'
import { useNavigate } from 'react-router-dom'
import '../css files/register_css.css'
import Tree_Logo from '../assets/tree_logo.png'
import { FaGoogle } from "react-icons/fa";

function Register() 
{
    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function registerUser(event) 
    {
        event.preventDefault()
        const response = await createUser({username,password})

        if(response.status === 'success')
        {
            alert("Registration Successful,  Proceed to Login")
            //Reroute user to register page
            navigate("/login", {replace: true})
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
    <div className='register_body'>
        <form className="register_form" onSubmit={registerUser}>
            <h1 className='register_header'>Register Twigle Account</h1>
            <input type="email" placeholder="Email" value={username} onChange={event => setUsername(event.target.value)}/><br/>
            <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/><br/>
            <input type= "submit" value="Register" /><br/>
            <div className="divider">
                <span>OR</span>
            </div>
            <div onClick={handleGoogleLogin} className="google-div">
                <FaGoogle alt="user" className="google" />Register with Google
            </div>
            <img src={Tree_Logo} className='register_logo'></img>
        </form>
    </div>)
}

export default Register