import React, {useEffect} from 'react'
import {logoutUser} from '../util/auth'
import {useNavigate} from 'react-router-dom'

function Logout() 
{
    const navigate = useNavigate()
    useEffect(() => {
        logoutUser()
        navigate('/', {replace: true})
    }, [])

    return <h1> Logging Out.. </h1>
}

export default Logout