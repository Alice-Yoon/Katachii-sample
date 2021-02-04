import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function RightMenu({ className, isLogin, isAdmin,logoutHandler }) {

    const checkIsAdmin = () => {
        return (
            isAdmin ?
            <>
                <Link className="link" to="/upload">Upload</Link>
                <Link className="link" to="/manageorders">Orders</Link>
                <Link className="link" to="/manageproducts">Products</Link>
            </>
            :
            <>
                <Link className="link" to="/cart">Cart</Link>
                <Link className="link" to="/my">My</Link>
            </>
        )
    }

    return (
        <div className={className}>
        {
            isLogin ?
                <>
                    {checkIsAdmin()}
                    <span className="link" onClick={logoutHandler}>logout</span>
                </>
            :                
                <>
                    <Link className="link" to="/login">LOGIN</Link>
                    <Link className="link" to="/signup">JOIN</Link>
                </>
        }
        </div>
    )
}

export default styled(RightMenu)`
    position: absolute;
    right: 50px;    
`;
