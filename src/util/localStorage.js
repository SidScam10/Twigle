import { useEffect, useState } from "react"

const USER_DB_KEY = "Account-Database"
const AUTH_USER_KEY = "Account-Authentication"

export function logoutUser()
{
    localStorage.removeItem(AUTH_USER_KEY)
}
export function useLoggedInUser()
{
    const [username,setUsername] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState('unknown')

    //Check if user is logged in or not while in dashboard
    useEffect(() => {
        const username = localStorage.getItem(AUTH_USER_KEY)
        
        if(username)
        {
            setUsername(username)
            setIsLoggedIn('yes')
        }
        else
        {
            setIsLoggedIn('no')
        }

    }, [])

    return [
        isLoggedIn,
        username
    ]
}

//Get Username and Password from console.log() data
export function _dumpLocalStorage() 
{
    console.log(localStorage.getItem(USER_DB_KEY))
}

export function loginUser({username,password})
{
    let usersKey = localStorage.getItem(USER_DB_KEY)

    if(!usersKey) 
    {
        //first time use
        return {
            status: "error",
            error: "Invalid Creditials"
        }
    }
    const usersArray = JSON.parse(usersKey)

    //Check if there is a user with username and password
    const user = usersArray.find(user => user.username === username && user.password === password)

    if(user)
    {
        localStorage.setItem(AUTH_USER_KEY,username)
        return {
            status: "success"
        }

    }
    else
    {
        return {
            status: "error",
            error: "Invalid Credintials"
        }
    }

}

/**
 * return true if user is created
 * return false with error message if there is an error
 */

export function createUser({username,password}) 
{
    let usersKey = localStorage.getItem(USER_DB_KEY)

    if(!usersKey) 
    {
        //first time use
        usersKey = "[]"
    }

    const usersArray = JSON.parse(usersKey)

    //Check if there is a user with similar username
    const duplicate = usersArray.find(user => user.username === username)

    if(duplicate)
    {
        return {
            status: "error",
            error: "User already exists"
        }
    }

    //Check password strength
    if(password.length < 5)
    {
        return {
            status: "error",
            error: "Password too weak"
        }
    }

    //Create account 
    usersArray.push({username,password})

    //store username and password into local storage as strings using stringify method
    localStorage.setItem(USER_DB_KEY, JSON.stringify(usersArray))

    return {
        status: 'success'
    }
}