import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Dashboard from './pages/dashboard.jsx'
import Logout from './pages/logout.jsx'
import "./App.css"
console.log(import.meta.env.VITE_FIREBASE_API_KEY)
//Function to create basic navigation through pages
function App() 
{
  return (     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  )
}

export default App;
