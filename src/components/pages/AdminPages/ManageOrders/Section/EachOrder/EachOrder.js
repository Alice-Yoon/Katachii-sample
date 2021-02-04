import React from 'react';
import styled from 'styled-components';
import { millisecToDate } from '../../../../../../utils/millisecToDate';
import { priceFormatter } from '../../../../../../utils/priceFormatter';
import EachOrderDetails from './Section/EachOrderDetails';

function EachOrder({ className, cookie, data, deleteOrderRecord }) {
    const userInfo = {
        id: data.user[0].id,
        name: data.user[0].name,
        email: data.user[0].email,
        contact: data.user[0].contact
    }

    const orderInfo = {
        orderId: data._id,
        orderDate: millisecToDate(data.dateOfPurchase),
        orderPrice: data.totalPrice,
        orderStatus: data.paymentStatus,
        orderItems: data.products.map(item => item.item_name),
        orderItemsId: data.products.map(item => item.unique),
        paymentMethod: data.data[0]?.method_name,
        depositor: data.depositor,
        necklaceType: data.necklaceType
    }

    const deliveryInfo = {
        receiver: data.deliveryInfo[0].receiver,
        deliveryAddr: data.deliveryInfo[0].address,
        deliveryDetailedAddr: data.deliveryInfo[0].detailedAddr,
        deliveryContact: data.deliveryInfo[0].contact,
        // deliveryCompany: '택배사',
        deliveryNumber: data.deliveryNumber,
        isDeliveryFar: data.isDeliveryFar
    }

    return (
        <div className={className}>
            <table>
                <thead>
                    <tr>
                        <th>주문번호</th>
                        <th>주문자</th>
                        <th>주문날짜</th>
                        <th>주문상품</th>
                        <th>주문금액</th>
                        <th>결제상태</th>
                        <th>배송상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{orderInfo.orderId}</td>
                        <td>{userInfo.name}</td>
                        <td>{orderInfo.orderDate}</td>
                        <td>
                            {orderInfo.orderItems.map((item, index) => (
                                <span key={index} className="items">{item}</span>
                            ))}
                        </td>
                        <td>{priceFormatter(orderInfo.orderPrice)} 원</td>
                        <td>
                            {orderInfo.orderStatus === '입금대기/입금확인중' ? 
                                <span style={{color: 'crimson'}}>입금대기/입금확인중</span>
                                :
                                orderInfo.orderStatus === '주문취소(미입금)' ? 
                                <span style={{color: 'violet'}}>주문취소(미입금)</span>
                                :
                                <span style={{fontWeight: 'bold', color: 'green'}}>{orderInfo.orderStatus}</span>
                            }
                        </td>
                        <td>
                            {deliveryInfo.deliveryNumber ?
                                <span style={{color: '#0160bc'}}>배송완료 ({deliveryInfo.deliveryNumber})</span>
                                :
                                orderInfo.orderStatus === '주문취소(미입금)' ?
                                <span>-</span>
                                :
                                <span style={{color: 'crimson'}}>배송 전</span>
                            }
                        </td>
                    </tr>
                </tbody>
            </table>

            <EachOrderDetails 
                userInfo={userInfo}
                orderInfo={orderInfo}
                deliveryInfo={deliveryInfo}
                cookie={cookie}
            />

            <button className='del-btn' onClick={() => deleteOrderRecord(data._id)}>삭제</button>
        </div>
    )
}

export default styled(EachOrder)`
    border: 2px dotted grey;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10px;
    padding-top: 10px;
    position: relative;

    & {
        table {
            /* border: 1px solid red; */
            width: 100%;
            border-collapse: collapse;
            thead>tr>td {
                font-weight: bold;
            }
            th, td {
                /* border: 1px solid gray; */
                padding: 0 5px;
                text-align: center;
            }
        }
        .items {
            padding-right: 5px;
            margin-right: 5px;
            border-right: 1.5px solid gray;
            &:last-of-type {
                border: none;
            }
        }

        .del-btn {
            border: none;
            border-bottom: 1px dotted black;
            background-color: lightgray;
            color: black;
            padding: 5px 10px;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50px, 30px);
            cursor: pointer;
            &:hover {
                border: none;
                background-color: red;
                font-weight: bold;
                color: #fff;
            }
        }
    }
`;
