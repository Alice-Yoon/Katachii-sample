import React from 'react'
import { silverStringPrice_One, silverStringPrice_Two } from '../../../../../../common_data/necklaceStringPrice'
import { priceFormatter } from '../../../../../../utils/priceFormatter'

const OrderDetailsData = ({ 
    userInfo, 
    orderInfo, 
    deliveryInfo, 
    deliveryNumber, 
    updateOrderStatus, 
    onChangeDeliveryNumber, 
    updateDeliveryNumber
    }) => {

    // 주문자 정보
    const userInfoArray = [
        {
            id: 1,
            title: '이름',
            value: userInfo.name
        },
        {
            id: 2,
            title: '이메일',
            value: userInfo.email
        },
        {
            id: 2,
            title: '전화번호',
            value: userInfo.contact
        }
    ];

    // 주문 정보
    const orderInfoArray = [
        {
            id: 1,
            title: '주문번호',
            value: orderInfo.orderId
        },
        {
            id: 2,
            title: '주문일자',
            value: orderInfo.orderDate
        },
        {
            id: 3,
            title: '주문금액',
            value: priceFormatter(orderInfo.orderPrice)
        },
        {
            id: 4,
            title: '결제수단',
            value: orderInfo.paymentMethod
        },
        {
            id: 5,
            title: '입금자명',
            value: (
                orderInfo.depositor ?
                <span style={{fontWeight: 'bold'}}>{orderInfo.depositor}</span>
                :
                <span style={{fontWeight: 'bold'}}>{userInfo.name}</span>
            )
        },
        {
            id: 6,
            title: '결제상태',
            value: (
                orderInfo.orderStatus === '입금대기/입금확인중' ?
                <>
                    <span style={{color: 'crimson'}}>입금대기/입금확인중</span>
                    <button onClick={updateOrderStatus}>입금완료</button>
                </>
                :
                orderInfo.orderStatus === '주문취소(미입금)' ? 
                    <span style={{color: 'violet'}}>주문취소(미입금)</span>
                :
                <span style={{fontWeight: 'bold', color: 'green'}}>{orderInfo.orderStatus}</span>
            )
        },
        {
            id: 7,
            title: '주문상품',
            value: (
                <ul>
                    {orderInfo.orderItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )
        },
        {
            id: 8,
            title: '목걸이줄',
            value: (
                orderInfo.necklaceType === 1 ?
                    <span>실버줄1 (+ {silverStringPrice_One}원)</span>
                : orderInfo.necklaceType === 2 ?
                    <span>실버줄2 (+ {silverStringPrice_Two}원)</span>
                : 
                    <span>기본 검정매듭줄</span>
            )
        },
    ];

    // 배송 정보
    const deliveryInfoArray = [
        {
            id: 1,
            title: '받는사람',
            value: deliveryInfo.receiver
        },
        {
            id: 2,
            title: '배송주소',
            value: `${deliveryInfo.deliveryAddr} ${deliveryInfo.deliveryDetailedAddr}`
        },
        {
            id: 3,
            title: '도서산간',
            value: deliveryInfo.isDeliveryFar ? 'O' : 'X'
        },
        {
            id: 4,
            title: '운송장번호',
            value: (
            deliveryInfo.deliveryNumber ?       
                deliveryInfo.deliveryNumber
                :
                orderInfo.orderStatus === '주문취소(미입금)' ?
                <span>-</span>
            :
            <>
                <input 
                    placeholder="운송장번호를 입력하세요." 
                    value={deliveryNumber}
                    onChange={onChangeDeliveryNumber}
                />
                <button onClick={updateDeliveryNumber}>등록</button>
            </>      
            )
        }
    ];

    return {
        userInfoArray,
        orderInfoArray,
        deliveryInfoArray
    }
}

export default OrderDetailsData
