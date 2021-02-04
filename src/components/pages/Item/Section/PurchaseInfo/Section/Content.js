import React from 'react';
import styled from 'styled-components';
import { priceFormatter } from '../../../../../../utils/priceFormatter';
import { normalDeliveryFee, freeDeliveryIsOver } from '../../../../../../common_data/deliveryPrice';

function Content({isSoldOut, itemPrice, onClickAddToCartBtn, className}) {
    return (
        <div className={className}>
            <div className="delivery-info">
                <span><strong>배송비</strong> {priceFormatter(normalDeliveryFee)}원 ({priceFormatter(freeDeliveryIsOver)}원 이상 무료배송) </span>
                <span className="sub-text"> | 도서산간 배송비 추가</span>
            </div>
            <div className="quantity-container">
                <p>수량</p>
                <div className="quantity-contents">
                    <div className="quantity">
                        <span className="quantity-item number">1</span>
                    </div>
                    <div>
                        {isSoldOut ? <p className="sold-out">SOLD OUT</p> : <p>{priceFormatter(itemPrice)} 원</p>}
                    </div>
                </div>
            </div>
            {isSoldOut ? 
                null 
            :
                <div className="buttons">
                    <button onClick={onClickAddToCartBtn}>장바구니 추가</button>
                </div>
            }
        </div>
    )
}

export default styled(Content)`
    border: 1px dotted lightgray;
    margin: 20px 0;
    padding: 20px;

    & {
        .delivery-info {
            font-size: 15px;
        }
        .sub-text {
            color: grey;
            font-size: 12px;
        }
        .quantity-container {
            background-color: #eeeeee;
            padding: 10px;
            margin: 10px 0;
            .quantity-contents {
                border-top: 1px dotted gray;
                display: flex;
                justify-content: space-between;
                padding: 10px 30px;
            }
            .quantity {
                display: flex;
                justify-content: center;
                align-items: center;
                .quantity-item {
                    padding: 10px;
                    border: 1px solid gray;
                }
                .number {
                    background-color: #fff;
                    width: 50px;
                    text-align: center;
                }
            }
            .sold-out {
                color: red;
            }
        }
        .buttons {
            >button {
                width: 100%;
                flex: 1;
                padding: 10px;
                background-color: #eeeeee;
                color: #000;
                border: 1px solid lightgray;
                cursor: pointer;
                &:first-of-type {
                    margin-right: 10px;
                }
                &:hover {
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
