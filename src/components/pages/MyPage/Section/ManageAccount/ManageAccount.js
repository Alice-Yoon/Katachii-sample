import React from 'react';
import styled from 'styled-components';

function manageAccount(props) {

    const { toggleOpenManageAccount } = props;

    const closeModal = (e) => {
        if(e.target.id === 'close') {
            toggleOpenManageAccount(false);
        }
    }

    return (
        <div className={props.className} onClick={closeModal} id="close">
            <div className="container">
                <div className="contents">
                    <h1>계정 관리</h1>
                    <form>
                        <div className="input-section">
                            <label>이름:</label>
                            <input />
                        </div>
                        <div className="input-section">
                            <label>이메일:</label>
                            <input />
                        </div>
                        <div className="input-section">
                            <label>비밀번호:</label>
                            <input />
                        </div>
                        <div className="input-section">
                            <label>전화번호:</label>
                            <input />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default styled(manageAccount)`
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & {
        .container {
            background-color: #fff;
            width: 40%;
            height: 80%;
        }
        .contents {
            border: 1px solid green;
            margin: 15px;
        }
        .input-section {
            
        }
    }
`;
