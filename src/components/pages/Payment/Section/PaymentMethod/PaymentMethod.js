import React, {useState} from 'react';
import styled from 'styled-components';
import PayToBank from './Section/PayToBank';

function PaymentMethod({ className, history, cookie }) {
    const [selectPaymentMethod, setSelectPaymentMethod] = useState('0');

    const onChangeSelectPaymentMethod = (e) => {
        const value = e.target.value;
        setSelectPaymentMethod(value)
    }

    const onCancelPurchase = () => {
        localStorage.setItem('itemsToPurchase', [])
        history.push('/')
    }

    return (
        <div className={className}>
            <h2>결제하기</h2>
            {selectPaymentMethod === '0' && <p className="small-notice">* 현재 무통장 입금만 가능합니다 *</p>}
            <select className="select-style" value={selectPaymentMethod} onChange={onChangeSelectPaymentMethod}>
                <option value="0">- 결제방식선택 -</option>
                <option value="1">무통장입금</option>
            </select>
            <div className="buttons-container">
                {
                    selectPaymentMethod === '0' ?
                    <div className="buttons-container select_0">
                        <button className="cancel-btn" onClick={onCancelPurchase}>결제취소</button>
                    </div>
                    :
                    selectPaymentMethod === '1' ?
                    <div className="buttons-container select_2">
                        <PayToBank history={history} cookie={cookie} />
                        <button className="cancel-btn" onClick={onCancelPurchase}>결제취소</button>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default styled(PaymentMethod)`
    /* border: 1px solid blue; */
    margin: 10px;
    background-color: #fff;
    width: 47.5%;
    padding-top: 10px;

    & {
        h2 {
            color: gray;
            padding-left: 10px;
        }
        .small-notice {
            /* border: 1px solid blue; */
            color: tomato;
            text-align: center;
            margin: 0;
            font-size: 0.8rem;
        }
        .select-style {
            width: 90%;
            padding: 10px;
            margin: 15px;
            cursor: pointer;
        }
        .buttons-container {
            /* border: 1px solid blue; */
            margin: 0 auto;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            &.select_0 {
                width: 80%;
            }
            &.select_1 {
                width: 95%;
            }
            &.select_2 {
                width: 95%;
                display: block;
            }
        }
        .cancel-btn {
                border: 1px solid gray;
                border-radius: 5px;
                background-color: #fff;
                width: 100%;
                flex: 2;
                color: #000;
                font-weight: 500;
                padding: 10px 15px;
                cursor: pointer;
                &:hover {
                    background-color: red;
                    color: #fff;
                }
            }
        .payment-btn {
                border: 1px solid gray;
                border-radius: 5px;
                background-color: #000;
                color: #fff;
                font-weight: 500;
                width: 100%;
                padding: 15px 25px;
                cursor: pointer;
                &:hover {
                    background-color: green;
                    color: #fff;
                }
                &:focus {
                    outline: none;
                }
                &:active {
                    transform: scale(0.9);
                }
            }
    }

    @media (max-width: 768px) {
        width: 100%;
    }

`;
