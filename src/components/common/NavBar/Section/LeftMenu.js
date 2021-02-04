import React from 'react';
import { Link } from 'react-router-dom';


function LeftMenu() {
    return (
        <div>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/guide">Shopping-guide</Link>
        </div>
    )
}

export default LeftMenu
