import React, { useState, useEffect } from 'react';
import { useLoggedInUser } from '../util/localStorage';
import { useNavigate, Link } from 'react-router-dom';
import Feed from '../feeds/feed.jsx';
import LeftPanel from '../feeds/leftPanel.jsx';
import RightPanel from '../feeds/rightPanel.jsx';
import Tree from './tree.jsx'
import '../css files/dashboard_css.css'

export default function Dashboard() {
    const [isLoggedIn, username] = useLoggedInUser();
    const navigate = useNavigate();
    const [showTree, setShowTree] = useState(true);

    useEffect(() => {
        if (isLoggedIn === 'no') {
            navigate('/');
        }
    }, [isLoggedIn]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTree(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    if (isLoggedIn === 'unknown') {
        return <h2>Loading...</h2>;
    }

    return (
        <div className='dashboard-container'>
            {showTree && <Tree className="Tree_Anim_Body"/>}
            <div className='left-panel'>
                <LeftPanel />
                <div className='user-info-container'>
                    <div className='user-info'>Hello, <span className="user-info-username">{username}</span> </div>
                    <Link to='/logout'>
                        <button className='logout-button'>
                            Logout
                        </button>
                    </Link>
                </div>
            </div>
            <Feed />
            <RightPanel />
        </div>
    );
}
