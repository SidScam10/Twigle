import React, { useState } from 'react';
import Neuralink from '../assets/neuralink.png';
import { useLoggedInUser } from '../util/auth';
import { TbBinaryTree2 } from "react-icons/tb";
import { GiPalmTree } from "react-icons/gi";
import { SiTreehouse } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { PiTreePalmBold } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { FaGoogle } from "react-icons/fa";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import '../css files/rightPanel_css.css'

export default function RightPanel() {
    const [isLoggedIn, username] = useLoggedInUser();
    const [isConnected1, setIsConnected1] = useState(false);
    const [isConnected2, setIsConnected2] = useState(false);
    const [isConnected3, setIsConnected3] = useState(false);
    const [isConnected4, setIsConnected4] = useState(false);
    const [isConnected5, setIsConnected5] = useState(false);
    const [isConnected6, setIsConnected6] = useState(false);
    const [showMoreUsers, setShowMoreUsers] = useState(false);
    const [showMoreNews, setShowMoreNews] = useState(false);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const handleConnectToggle1 = () => {
        setIsConnected1(!isConnected1);
    };
    const handleConnectToggle2 = () => {
        setIsConnected2(!isConnected2);
    };
    const handleConnectToggle3 = () => {
        setIsConnected3(!isConnected3);
    };
    const handleConnectToggle4 = () => {
        setIsConnected4(!isConnected4);
    };
    const handleConnectToggle5 = () => {
        setIsConnected5(!isConnected5);
    };
    const handleConnectToggle6 = () => {
        setIsConnected6(!isConnected6);
    };
    const toggleShowMoreUsers = () => {
        setShowMoreUsers(!showMoreUsers);
    };
    const toggleShowMoreNews = () => {
        setShowMoreNews(!showMoreNews);
    };
    
    //Functions to add comments and delete comments on news posts
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const addComment = () => {
        if (comment.trim() !== '') {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    const deleteComment = (index) => {
        const newComments = [...comments];
        newComments.splice(index, 1);
        setComments(newComments);
    };

    return (
        <div className="right-panel">
            <div className="search-container">
                <TbBinaryTree2 className="search-icon"/>
                <input
                    placeholder="Search Twigle"
                    className="search-input"    
                />
            </div>
            <div className="whats-sprouting">
                <h3 className="whats-sprouting-title">What's Sprouting</h3>
                <div className="news-item">
                    <div className="news-info">
                        <p className="news-meta">Breaking News - LIVE</p>
                        <h6 className="news-heading">First Neuralink subject makes history to post a Twigle just by "Thinking"</h6>
                        {showMoreNews && (
                            <>
                            <p className="additional-text">
                                The groundbreaking achievement of <span className='news-highlight'>Noland Arbor</span> (29) marks a pivotal moment in the realm of neuroscience and technology. Through the seamless integration of cutting-edge neurotechnology developed by <span className='news-highlight'>Neuralink</span>, a company spearheaded by visionary entrepreneur Elon Musk, the subject was able to post a <span className='news-highlight'>Twigle</span> simply through the power of thought.
                            </p>
                            <h3 className='comments-header'>Comments:</h3>
                            <>
                                {comments.map((comment, index) => (
                                    <div key={index}>
                                        <p className="comment">
                                            {comment} 
                                            {/*If admin enable delete comment button otherwise disable it*/}
                                            {(username === "admin@gmail.com") ? (
                                                <button onClick={() => deleteComment(index)} className='comment-delete-button'>-</button>
                                            ) : ("")}
                                        </p>
                                    </div>
                                ))}
                            </>
                            <textarea
                                className="post-comment"
                                placeholder="Comment Here..."
                                value={comment}
                                onChange={handleCommentChange}
                            />
                            <button className="comment-submit-button" onClick={addComment}>+</button>
                        </> 
                        )}
                        <p className="news-tags">Trending with <span className="tag"> #Neuralink #ElonMusk</span></p>
                    </div>
                    <div className="news-image">
                        <img src={Neuralink} alt="Neuralink Patient" className="news-img" />
                    </div>
                </div>
                <h3 className="show-more" onClick={toggleShowMoreNews}>
                    {showMoreNews ? "Show less" : "Show more"}
                </h3>
            </div>
            <div className="node-suggestions">
                <h3 className="node-suggestions-title">Node Suggestions</h3>

                <div className="node-item">
                    <div className="profile-info">
                        <RiTwitterXFill alt="Elon_Musk" className="profile-img" />
                        <div className="profile-details">
                            <h6 className="profile-name">Elon Musk</h6>
                            <p className="profile-handle">@musk_elon</p>
                        </div>
                    </div>
                    <button 
                        className={`connect-button ${isConnected1 ? 'connected' : ''}`} 
                        onClick={handleConnectToggle1}
                    >
                        {isConnected1 ? 'Connected' : 'Connect'}
                    </button>
                </div>

                <div className="node-item">
                    <div className="profile-info">
                        <GiBrain alt="Neuralink" className="profile-img" />
                        <div className="profile-details">
                            <h6 className="profile-name">Neuralink</h6>
                            <p className="profile-handle">@neuralink_ai</p>
                        </div>
                    </div>
                    <button 
                        className={`connect-button ${isConnected2 ? 'connected' : ''}`} 
                        onClick={handleConnectToggle2}
                    >
                        {isConnected2 ? 'Connected' : 'Connect'}
                    </button>
                </div>
                {(username === "admin@gmail.com") ? (
                    <>
                        <div className="node-item">
                            <div className="profile-info">
                                <GiPalmTree alt="user" className="profile-img" />
                                <div className="profile-details">
                                    <h6 className="profile-name">Siddhanth MK</h6>
                                    <p className="profile-handle">@sidscam10</p>
                                </div>
                            </div>
                            <button 
                                className={`connect-button ${isConnected3 ? 'connected' : ''}`} 
                                onClick={handleConnectToggle3}
                            >
                                {isConnected3 ? 'Connected' : 'Connect'}
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="node-item">
                        <div className="profile-info">
                            <SiTreehouse alt="admin" className="profile-img" />
                            <div className="profile-details">
                                <h6 className="profile-name">Twigle Admin</h6>
                                <p className="profile-handle">@admin</p>
                            </div>
                        </div>
                        <button 
                            className={`connect-button ${isConnected3 ? 'connected' : ''}`} 
                            onClick={handleConnectToggle3}
                        >
                            {isConnected3 ? 'Connected' : 'Connect'}
                        </button>
                    </div>
                    
                )}
                <div className="node-item">
                    <div className="profile-info">
                        <LiaPrayingHandsSolid alt="user" className="profile-img" />
                        <div className="profile-details">
                            <h6 className="profile-name">Narendra Modi</h6>
                            <p className="profile-handle">@namoPM</p>
                        </div>
                    </div>
                    <button 
                        className={`connect-button ${isConnected4 ? 'connected' : ''}`} 
                        onClick={handleConnectToggle4}
                    >
                        {isConnected4 ? 'Connected' : 'Connect'}
                    </button>
                </div>
                <div className="node-item">
                    <div className="profile-info">
                        <FaGoogle alt="user" className="profile-img" />
                        <div className="profile-details">
                            <h6 className="profile-name">Larry Page</h6>
                            <p className="profile-handle">@google</p>
                        </div>
                    </div>
                    <button 
                        className={`connect-button ${isConnected5 ? 'connected' : ''}`} 
                        onClick={handleConnectToggle5}
                    >
                        {isConnected5 ? 'Connected' : 'Connect'}
                    </button>
                </div>
                {showMoreUsers && (
                    <>
                        <div className="node-item">
                            <div className="profile-info">
                                <PiTreePalmBold alt="user" className="profile-img" />
                                <div className="profile-details">
                                    <h6 className="profile-name">Arulkumar V</h6>
                                    <p className="profile-handle">@arul_k</p>
                                </div>
                            </div>
                            <button 
                                className={`connect-button ${isConnected6 ? 'connected' : ''}`} 
                                onClick={handleConnectToggle6}
                            >
                            {isConnected6 ? 'Connected' : 'Connect'}
                            </button>
                        </div>
                    </>
                )}
                <h3 className="show-more" onClick={toggleShowMoreUsers}>
                    {showMoreUsers ? "Show less" : "Show more"}
                </h3>
            </div>
        </div>
    );
}
