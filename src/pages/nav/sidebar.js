import React from 'react';
import { supabase } from '../../lib/helper/supabaseClient';
import { Link } from 'react-router-dom';
import '../../assets/sidebar.css';
import logo from '../../assets/images/logo.png';

const Sidebar = () => {
    const logout = async () => {
        await supabase.auth.signOut();
    };

    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/goals">Goals</Link></li>
                <li><Link to="/food-chart">Food Chart</Link></li>
                <li><Link to="/diet-plans">Diet Plans</Link></li>
                <hr />
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    );
}

export default Sidebar;
