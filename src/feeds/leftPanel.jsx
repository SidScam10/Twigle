import { useNavigate, Link } from 'react-router-dom';
import '../css files/leftPanel_css.css'
import Tree_Logo from '../assets/tree_logo.png'
import { GiTreehouse } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { GiTreeRoots } from "react-icons/gi";
import { AiOutlineBranches } from "react-icons/ai";
import { MdForest } from "react-icons/md";

export default function LeftPanel() {
    return (
        <div className="left-panel">
            <div className="menu">
                <div className="menu-item">
                        <GiTreehouse className='icon'/>
                    <h3 className="left_panel_text">
                        Home
                    </h3>
                </div>
                <div className="menu-item">
                    <MdOutlineExplore className='icon'/>
                    <h3 className="left_panel_text">
                        Explore
                    </h3>
                </div>
                <div className="menu-item">
                    <MdOutlineEnergySavingsLeaf className='icon'/>
                    <h3 className="left_panel_text">
                        Notifications
                    </h3>
                </div>
                <div className="menu-item">
                    <GiTreeRoots className='icon'/>
                    <h3 className="left_panel_text">
                        Messages
                    </h3>
                </div>
                <div className="menu-item">
                    <AiOutlineBranches className='icon'/>
                    <h3 className="left_panel_text">
                        Profile
                    </h3>
                </div>
                <div className="menu-item">
                    <MdForest className='icon'/>
                    <h3 className="left_panel_text">
                        More
                    </h3>
                </div>
                <button className="twigle-button">Twigle</button>
                <img src={Tree_Logo} className='left_panel_logo'></img>
            </div>
        </div>
    );
}
