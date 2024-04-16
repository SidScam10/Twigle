import React, {useState} from 'react'
import { loginUser } from '../util/localStorage'
import { useNavigate } from 'react-router-dom'
import '../css files/login_css.css'
import Tree_Logo from '../assets/tree_logo.png'

export default function Login() 
{
    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    function attemptloginUser(event) 
    {
        event.preventDefault()
        const response = loginUser({username,password})

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

    return (
    <div className="login_body">
        <form className="login_form" onSubmit={attemptloginUser}>
            <h1 className="login_header">Login to Twigle</h1>
            <input type="text" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)}/><br/>
            <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/><br/>
            <input type= "submit" value="Login" /><br/>
            <img src={Tree_Logo} className='login_logo'></img>
        </form>
    </div>)
}
