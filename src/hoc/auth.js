import React, { useEffect } from 'react';
import UserAPI from '../api/user';
import { useCookies } from 'react-cookie';

import { useDispatch } from 'react-redux';
import { updateLoginStatus, updateAdminStatus } from '../modules/login';

const Auth = (SpeficifComponent, option, adminRoute = null) => {

    const [cookies, _] = useCookies(['x_auth']);

    // 리덕스로 로그인 state 관리
    const dispatch = useDispatch();
    const toggleLoginStatus = (payload) => dispatch(updateLoginStatus(payload));
    const toggleAdminStatus = (payload) => dispatch(updateAdminStatus(payload));
    
    // < option >
        // null -> 아무나 출입 가능한 페이지
        // true -> 로그인한 유저만 출입 가능한 페이지
        // false -> 로그인한 유저는 출입 불가

    const AuthenticationCheck = (props) => {

        useEffect(() => {
            
            UserAPI.auth(cookies).then(res => {
                // 로그인 하지 않은 상태
                if(!res?.data?.isAuth) {
                    toggleLoginStatus(false);
                    // option === true (회원만 이용가능 페이지) || adminRoute === true (어드민만 이용가능 페이지) 들어가려 try?
                    if(option || adminRoute) props.history.push('/login');
                } else {
                    // 로그인 한 상태
                    toggleLoginStatus(true);
                    if (res?.data.isAdmin) toggleAdminStatus(true);
                    if (adminRoute && !res?.data?.isAdmin) props.history.push('/');
                    if (option === false) props.history.push('/');
                }
            })

        }, []);


        return (
            <SpeficifComponent {...props} cookie={cookies} />
        )

    }

    return AuthenticationCheck
}

export default Auth;