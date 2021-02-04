import React from 'react';
import styled from 'styled-components';

function Modal(props) {
    const { modalText, leftBtnText, rightBtnText, onClickLeftBtn, onClickRightBtn } = props;

    // modal text
    // modal leftbtn - leftBtnText, onClickLeftBtn
    // modal rightbtn - rightBtnText, onClickRightBtn

    return (
        <div className={props.className}>
            <div className="container">
                <p className="text">{modalText}</p>
                <div className="buttons">
                    <button onClick={onClickLeftBtn}>{leftBtnText}</button>
                    <button onClick={onClickRightBtn}>{rightBtnText}</button>
                </div>
            </div>
        </div>
    )
}

export default styled(Modal)`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    & {
        .container {
            width: 400px;
            height: 200px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
        }
        .text {
            /* border: 1px solid red; */
            flex: 1;
            text-align: center;
            /* padding: 30px; */
            padding-top: 70px;
        }
        .buttons {
            /* border: 1px solid blue; */
            flex: 1;
            display: flex;
        }
        p {
            margin: 0;
        }
        button {
            flex: 1;
            border: 1px solid lightgray;
            background-color: #fff;
            &:hover {
                cursor: pointer;
                background-color: lightgray;
            }
            &:focus {
                outline: none;
            }
            &:active {
                transform: scale(0.98);
            }
        }
    }
`;
