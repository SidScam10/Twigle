import React, {useState} from 'react'
import { _dumpLocalStorage, createUser } from '../util/localStorage'
import { useNavigate } from 'react-router-dom'
import '../css files/register_css.css'
import Tree_Logo from '../assets/tree_logo.png'

function Register() 
{
    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    function registerUser(event) 
    {
        event.preventDefault()
        const response = createUser({username,password})

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

        _dumpLocalStorage()
    }

    return (
    <div className='register_body'>
        <form className="register_form" onSubmit={registerUser}>
            <h1 className='register_header'>Register Twigle Account</h1>
            <input type="text" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)}/><br/>
            <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/><br/>
            <input type= "submit" value="Register" /><br/>
            <img src={Tree_Logo} className='register_logo'></img>
        </form>
    </div>)
}

export default Register