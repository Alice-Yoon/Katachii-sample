import React from 'react';
import styled from 'styled-components';
import UserAPI from '../../../api/user';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';

import { updateLoginStatus, updateAdminStatus } from '../../../modules/login';
import LeftMenu from './Section/LeftMenu';
import RightMenu from './Section/RightMenu';

function NavBar ({className, isLogin, isAdmin}) {
    const dispatch = useDispatch();
    const toggleLoginStatus = (payload) => dispatch(updateLoginStatus(payload));
    const toggleAdminStatus = (payload) => dispatch(updateAdminStatus(payload));
    
    const [cookies, _, removeCookie] = useCookies(['x_auth']);

    const logoutHandler = () => {
        UserAPI.logout(cookies).then((res) => {
            removeCookie("x_auth");
            toggleLoginStatus(false);
            toggleAdminStatus(false);
        });
    }

    return (
        <div className={className}>
            <LeftMenu />
            <RightMenu isLogin={isLogin} isAdmin={isAdmin} logoutHandler={logoutHandler} />
        </div>
    )
}

export default styled(NavBar)`
    /* border: 1px solid hotpink; */
    background-color: #000;
    color: #fff;
    padding: 15px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    padding: 20px;
    margin: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    & {
        .link {
            /* border: 1px solid yellow; */
            text-decoration: none;
            color: #fff;
            margin-right: 20px;
            &:hover {
                cursor: pointer;
            }
        }
    }

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;