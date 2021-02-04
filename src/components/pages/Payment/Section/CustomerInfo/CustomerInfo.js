import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PaymentAPI from '../../../../../api/payment';
import { basicStringPrice_Black, silverStringPrice_One, silverStringPrice_Two } from '../../../../../common_data/necklaceStringPrice';

import { useDispatch } from 'react-redux';
import { updateDeliveryInfo } from '../../../../../modules/paymentInfo';

function CustomerInfo({ className, cookie, onToggleIsDeliveryFar, necklace, onChangeNecklace }) {
    const dispatch = useDispatch();
    const update_delivery_Info = (payload) => dispatch(updateDeliveryInfo(payload));
   
    const [userInfo, setUserInfo] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [address, setAddress] = useState({
        name: '',
        phone: '',
        address: '',
        detailedAddress: '',
    });

    const [isDeliveryFar, setIsDeliveryFar] = useState(false);

    useEffect(() => {
        PaymentAPI.getUsersInfo(cookie).then(res => {
            if (!res.data.userInfo) return;
            const userInfo = res.data.userInfo;                        
            setUserInfo({
                name: userInfo.name,
                phone: userInfo.contact,
                email: userInfo.email
            });
            setAddress({
                ...address,
                name: userInfo.name,
                phone: userInfo.contact,
            })
            update_delivery_Info({
                name: 'name',
                value: userInfo.name
            })
            update_delivery_Info({
                name: 'phone',
                value: userInfo.contact
            })
        })
    }, []);

    const onChangeAddressInfo = (e) => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value
        })
        update_delivery_Info({
            name,
            value
        })
    };

    const onChangeIsDeliveryFar = (e) => {
        const { checked } = e.target;
        setIsDeliveryFar(checked);
        onToggleIsDeliveryFar(e);
    }

    return (
        <div className={className}>
            <h2>주문자 정보</h2>
            <form>
                <div className="form-section">
                    <label>- 주문자 -</label>
                    <small className="notice">입금완료 확인 후, 해당 연락처로 문자 드리겠습니다.</small>
                    <div className="flex">
                        <p><span className="mini-title">이름: </span>{userInfo.name}</p>
                        <p><span className="mini-title">연락처: </span>0{userInfo.phone}</p>
                    </div>
                    <p><span className="mini-title">이메일: </span>{userInfo.email}</p>
                </div>
                <div className="form-section">
                    <label>- 배송지 정보 -</label>
                    <div className="flex">
                        <input name="name" type="text" placeholder="받으시는 분 이름" value={address.name} onChange={onChangeAddressInfo} />
                        <input name="phone" type="text" placeholder="받으시는 분 연락처" value={address.phone} onChange={onChangeAddressInfo} />
                    </div>
                    <input name="address" type="text" placeholder="받으시는 분 주소 (도, 시, 동/읍..)" value={address.address} onChange={onChangeAddressInfo} />
                    <input name="detailedAddress" type="text" placeholder="받으시는 분 상세주소 (예: 한국아파트 101동 101호)" value={address.detailedAddress} onChange={onChangeAddressInfo} />
                </div>
            </form>
            <div className='additional-selection'>
                <h3>추가 선택사항</h3>
                <h4># 목걸이 줄</h4>
                <div className='select-string'>
                    <select value={necklace} onChange={onChangeNecklace} >
                        <option value={0}>기본 - 검정 매듭줄 (+ {basicStringPrice_Black}원)</option>
                        <option value={1}>실버줄 1 (+ {silverStringPrice_One}원)</option>
                        <option value={2}>실버줄 2 (+ {silverStringPrice_Two}원)</option>
                    </select>
                </div>
                <h4># 배송지</h4>
                <div className='delivery-far'>
                    <input type='checkbox' onChange={onChangeIsDeliveryFar} />
                    <small style={{fontWeight: isDeliveryFar && 'bold'}}>
                        배송지가 도서산간이신가요?
                        <span style={{paddingLeft: '10px', color: 'crimson'}}>{isDeliveryFar && '네! (+ 2000원)'}</span>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default styled(CustomerInfo)`
    /* border: 1px solid red; */
    flex: 1;
    padding: 20px;
    background-color: #fff;
    margin: 10px;

    & {
        h2 {
            color: gray;
        }
        .notice {
            color: tomato;
        }
        .additional-selection {
            /* border: 1px dotted gray; */
            border-radius: 10px;
            background-color: #EBECF0;
            padding: 10px;
            padding-top: 5px;
            
            small {
                padding-left: 10px;
            }
            h3 {
                color: gray;
            }
            h4 {
                font-weight: bold;
                font-size: 0.8rem;
                margin-right: 15px;
                margin-bottom: 10px;
            }
            .select-string {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
            }
            .delivery-far {
                display: flex;
                align-items: center;
            }
        }
        form {
            /* border: 1px solid red; */
            .form-section {
                /* border: 1px solid blue; */
                padding: 10px;
                display: flex;
                flex-direction: column;
                label {
                    font-weight: bold;
                    color: black;
                    margin-bottom: 15px;
                }
                input, select {
                    border: none;
                    border-bottom: 1px solid lightgray;
                    padding: 10px;
                    margin-bottom: 5px;
                    &:focus {
                        outline: none;
                        border-bottom: 1.5px solid black;
                    }
                }
            }
            .flex {
                border: none;
                display: flex;
                align-items: center;
                input {
                    width: 100%;
                    &:first-of-type {
                        margin-right: 10px;
                    }
                }
                p {
                    width: 100%;
                    &:first-of-type {
                        margin-right: 15px;
                    }
                }
            }
            .mini-title {
                font-weight: bold;
                color: gray;
                margin-right: 5px;
            }
        }
    }

`;
