import React from 'react';
import TreeImage from '../assets/tree.png';
import '../css files/tree_animation.css';

const Tree = () => {
  return (
    <body className="Tree_Grove_Body">
        <div className="Tree_Grove">
        <img className="swing_tree" src={TreeImage} alt="Tree" /> 
      </div>
    </body>
  );
};

export default Tree;
