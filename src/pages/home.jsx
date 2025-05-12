import React, { useEffect } from 'react'
import { useLoggedInUser } from '../util/auth'
import { Link, useNavigate } from 'react-router-dom'
import '../css files/home_css.css'
import Tree_Logo from '../assets/tree_logo.png'

function Home()
{
    const navigate = useNavigate();
    const [isLoggedIn, user] = useLoggedInUser();
    
    //If logged in reroute to dashboard page
    useEffect(() => {
        if(isLoggedIn === 'yes')
        {
            navigate('/dashboard')
        }
    }, [isLoggedIn])
    if(isLoggedIn === 'unknown')
    {
        return <div>Loading...</div>
    }
    return (
    <div className="home_body"> 
        <div className="home_navigation">
            <h1 className="home_header">Welcome to <span className="Twigle">Twigle</span></h1>
            <ul className="home_list">
                <li className="home_element"><Link to="/register">Register</Link></li>
                <li className="home_element"><Link to="/login">Login</Link></li>
                <li><img src={Tree_Logo} className='logo'></img></li>
            </ul>
        </div>
    </div>)
}

export default Home