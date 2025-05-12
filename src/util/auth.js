import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase"

export function logoutUser()
{
    return signOut(auth);
}
export function useLoggedInUser()
{
    const [email,setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState('unknown');

    //Check if user is logged in or not while in dashboard
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user)
            {
                setUsername(user.email)
                setIsLoggedIn('yes')
            }
            else {
                setIsLoggedIn('no')
            }
        });
        return () => unsub();
    }, []);

    return [ isLoggedIn, email ]
}

export async function loginUser({username,password}) {
    try{
        await signInWithEmailAndPassword(auth, username, password);
        return { status: "success" };
    } catch(err) {
        return { status: "error", error: "Invalid credentials"};
    }
}

/**
 * return true if user is created
 * return false with error message if there is an error
 */

export async function createUser({ username, password })  {
    try {
        await createUserWithEmailAndPassword(auth, username, password);
        return { status: "success" };
    } catch(err) {
        let msg = "Unknown error";
        if (err.code === "auth/email-already-in-use") msg = "User already exists";
        else if (err.code === "auth/weak-password") msg = "Password too weak";
        return { status: "error", error: msg };
    }
}