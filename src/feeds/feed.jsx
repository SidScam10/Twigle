import React, { useState, useRef } from 'react';
import { GiPalmTree } from "react-icons/gi";
import { useLoggedInUser } from '../util/auth';
import { FaHeart } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { SiTreehouse } from "react-icons/si";
import '../css files/feed_css.css';

export default function Feed() {
    const [isLoggedIn, username] = useLoggedInUser();
    const inputTask = useRef(null);
    const [twigle, settwigle] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
        
    const feed = {
        //Creates a unique post ID each time
        postID: twigle.length === 0 ? 1 : twigle[twigle.length - 1].postID + 1, 
        contents: newPost,
        author: username.replaceAll(/@.*/g,""),
        createdOn: Date(Date.now()).toString().substring(0, 21),
        updatedOn: Date.now(),
    };

    const handleChange = function(event) {
        setNewPost(event.target.value);
    };

    const addPost = function() {
        if (inputTask.current.value === '') {
            alert('Post Content Empty');
        } else if (inputTask && !toggleSubmit) {
            settwigle(
                twigle.map((task) => {
                    if (task.postID === isEditItem) {
                        return { ...task, contents: newPost };
                    }
                    return task;
                })
            );

            setToggleSubmit(true);
            setNewPost('');
            setIsEditItem(null);
        } else {
            settwigle([...twigle, feed]);
        }
        inputTask.current.value = '';
        setNewPost('');
        console.log(twigle);
        console.log(feed);
    };

    const deletePost = (postID) => {
        const newtwigle = twigle.filter((post) => {
            return post.postID !== postID;
        });
        settwigle(newtwigle);
    };

    const editItem = (id) => {
        let newEditItem = twigle.find((elem) => {
            return elem.postID === id;
        });
        console.log(newEditItem);
        setToggleSubmit(false);
        inputTask.current.value = newPost;
        setNewPost(newEditItem.contents);
        setIsEditItem(id);
    };

    const likedBtn = (id) => {
        settwigle(
            twigle.map((item) => {
                if (item.postID === id) {
                    return { ...item, liked: !item.liked };
                }
                return item;
            })
        );
    };

    return (
        //If user is admin display special profile_pic
        <div className="feed-container">
            <div className="feed-post">
                <div className="profile-pic">
                    {(username === "admin@gmail.com") ? (
                        <SiTreehouse className='img'/>
                    ) : (
                        <GiPalmTree className='img'/>
                    )}
                </div>
                <div className="post-content">
                    <textarea
                        className={`post-textarea ${toggleSubmit ? 'original-post' : ''}`}
                        placeholder="What's sprouting..."
                        type="text"
                        value={newPost}
                        ref={inputTask}
                        maxLength="100"
                        onChange={handleChange}
                    />
                    <div className="button-container">
                        {toggleSubmit ? (
                            <button className="post-button" onClick={addPost}>
                                Twigle
                            </button>
                        ) : (
                            <button className="post-button" onClick={addPost}>
                                Edit
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="post-list">
                {[...twigle].reverse().map((task) => { //Reverse order of posts
                    //If user is admin display special profile_pic and enable special administrative buttons
                    return (
                        <div className="post-item" key={task.postID}>
                            <div className="profile-pic">
                                {(username === "admin@gmail.com") ? (
                                    <SiTreehouse className='img'/>
                                ) : (
                                    <GiPalmTree className='img'/>
                                )}
                            </div>
                            <div className="post-details">
                                <div className="post-header">
                                    <h3 className="author">@{task.author}</h3>
                                    <p className="timestamp">{task.createdOn}</p>
                                </div>
                                <div className={`post-content ${toggleSubmit ? 'original-post' : ''}`}>
                                    {/*Option where hashtag gets highlighted word when typed in a new post*/}
                                    {task.contents.split(' ').map((word, index) => {
                                        if (word.startsWith('#')) {
                                            return <span key={index} className="hashtag">{word} </span>;
                                        }
                                        return word + ' ';
                                    })}
                                </div>
                                <div className="post-button-container">
                                {username === "admin@gmail.com" ? (
                                        <>
                                            <FaHeart onClick={() => likedBtn(task.postID)} className="like-button" fill={task.liked ? 'rgb(74, 169, 92)' : 'white'} />
                                            <MdDelete onClick={() => deletePost(task.postID)} className="delete-button" />
                                            <MdEdit onClick={() => editItem(task.postID)} className="edit-button" />
                                        </>
                                    ) : (
                                        <FaHeart onClick={() => likedBtn(task.postID)} className="like-button" fill={task.liked ? 'rgb(74, 169, 92)' : 'white'} />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
