import React, {useState} from 'react';
import styled from 'styled-components';
import UserAPI from '../../../api/user';
import TermsConditions from '../../common/JoinNotice/TermsConditions';

function SignUp(props) {
    const [openTerms, setOpenTerms] = useState(true);

    const closeTerms = () => {
        setOpenTerms(false)
    }

    const [signUpInfo, setSignUpInfo] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        contact: ''
    });

    const onChangeInputs = (e) => {
        const { name, value } = e.target;

        setSignUpInfo({
            ...signUpInfo,
            [name]: value
        })
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (
            signUpInfo.email.trim() === '' || 
            signUpInfo.password.trim() === '' || 
            signUpInfo.passwordConfirm.trim() === '' || 
            signUpInfo.name.trim() === '' || 
            signUpInfo.contact.trim() === ''
        ) return alert("회원가입 정보를 입력하세요 :)");

        if (signUpInfo.password.trim().length <  5) return alert('비밀번호는 최소 5자리를 입력해 주세요.')
        
        if (signUpInfo.password.trim() !== signUpInfo.passwordConfirm.trim()) return alert("비밀번호가 일치하지 않습니다!");

        const payload = {
            email: signUpInfo?.email,
            password: signUpInfo?.password,
            name: signUpInfo?.name,
            contact: signUpInfo?.contact
        }

        UserAPI.signup(payload).then(res => {
            if (!res.data.success) return alert(res.data.message);
            props.history.push('/login')
        });
    };

    return (
        <div className={props.className}>
            <div className="container">
                <h2>JOIN</h2>
                <form className="form" onSubmit={onSubmitForm}>
                    <input name="email" type="email" placeholder="이메일" value={signUpInfo.email} onChange={onChangeInputs} />
                    <input name="password" type="password" placeholder="비밀번호 (최소 5자리)" value={signUpInfo.password} onChange={onChangeInputs} />
                    <input name="passwordConfirm" type="password" placeholder="비밀번호 확인" value={signUpInfo.passwordConfirm} onChange={onChangeInputs} />
                    <input name="name" type="name" placeholder="이름" value={signUpInfo.name} onChange={onChangeInputs} />
                    <input name="contact" type="contact" placeholder="연락처" value={signUpInfo.contact} onChange={onChangeInputs} />
                    <button type="submit">회원가입</button>
                </form>
            </div>
            {openTerms && <TermsConditions closeTerms={closeTerms} />}
        </div>
    )
}

export default styled(SignUp)`
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
                text-align: center;
            }
        }
        .form {
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
                margin: 10px 0;
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
