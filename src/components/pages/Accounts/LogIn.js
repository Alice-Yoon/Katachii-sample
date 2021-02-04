import React, {useState} from 'react';
import styled from 'styled-components';
import UserAPI from '../../../api/user';
import { useCookies } from 'react-cookie';

function LogIn(props) {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const onChangeInputs = (e) => {
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value
        })
    }

    const [_, setCookie] = useCookies(['x_auth']);

    const onSubmitForm = (e) => {
        e.preventDefault();
        
        if (loginInfo.email.trim() === '' || loginInfo.password.trim() === '') return alert("이메일과 비밀번호를 입력하세요 :)");
        
        const payload = {
            email: loginInfo?.email,
            password: loginInfo?.password
        }

        UserAPI.login(payload).then((res) => {
            if(!res.data.loginSuccess) return alert("회원정보가 일치하지 않습니다. 다시 시도해 주세요.");
            setCookie('x_auth', res.data.token, {
                path: '/'
            })
        });
    };

    return (
        <div className={props.className}>
            <div className="container">
                <h2>LOG-IN</h2>
                <form className="form" onSubmit={onSubmitForm}>
                    <input name="email" type="email" placeholder="이메일" value={loginInfo.email} onChange={onChangeInputs} />
                    <input name="password" type="password" placeholder="비밀번호" value={loginInfo.password} onChange={onChangeInputs} />
                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    )
}

export default styled(LogIn)`
    background-color: lightgray;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    & {
        .container {
            background-color: #fff;
            width: 500px;
            padding: 20px;
            h2 {
                /* border: 1px solid red; */
                text-align: center;
            }
        }
        .form {
            /* border: 1px solid blue; */
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            input {
                border: none;
                border-bottom: 1px solid lightgray;
                width: 60%;
                padding: 15px;
                margin: 30px 0;
                &:focus {
                    outline: none;
                    border-bottom: 1.5px solid black;
                }
            }
            button {
                border: 1px solid lightgray;
                background-color: #fff;
                width: 65%;
                padding: 15px;
                margin: 20px 0;
                &:hover {
                    cursor: pointer;
                    background-color: #000;
                    color: #fff;
                }
                &:focus {
                    outline: none;
                }
                &:active {
                    transform: scale(0.98);
                }
            }
        }
    }
`;
