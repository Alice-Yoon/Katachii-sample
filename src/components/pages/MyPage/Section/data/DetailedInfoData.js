import React from 'react';
import { useSelector } from 'react-redux';
import { millisecToDate } from '../../../../../utils/millisecToDate';
import { priceFormatter } from '../../../../../utils/priceFormatter';

const DetailedInfoData = (data) => {

    const screenSize = useSelector(state => state.responsive.screenSize);

    const orderInfoArray = [
        {
            id: 1,
            title: '주문번호',
            value: data.orderId
        },
        {
            id: 2,
            title: '주문날짜',
            value: millisecToDate(data.dateOfPurchase)
        },
        {
            id: 4,
            title: '추가사항',
            value: (
                data.necklaceType === 1 ?
                    '실버줄1'
                : data.necklaceType === 2 ?
                    '실버줄2'
                :   
                    '-'
            )
        }
    ];

    const paymentInfoArray = [
        {
            id: 1,
            title: '결제금액',
            value: `${priceFormatter(data.totalPrice)} 원`
        },
        {
            id: 2,
            title: '결제방식',
            value: data.paymentMethod
        },
        {
            id: 3,
            title: '결제상태',
            value: (
                data.paymentStatus === '입금대기/입금확인중' ?
                    <span style={{color: 'crimson'}}>입금대기/입금확인중</span>
                    :
                    data.paymentStatus === '주문취소(미입금)' ?
                    <span style={{color: 'violet'}}>주문취소(미입금)</span>
                    :
                    <span style={{color: 'green'}}>{data.paymentStatus}</span>
            )
            
        }
    ];

    const deliveryInfoArray = [
        {
            id: 1,
            title: '받는사람',
            value: data.deliveryInfo[0].receiver
        },
        {
            id: 2,
            title: '연락처',
            value: data.deliveryInfo[0].contact
        },
        {
            id: 3,
            title: '주소',
            value: `${data.deliveryInfo[0].address} ${data.deliveryInfo[0].detailedAddr}`
        },
        {
            id: 4,
            title: '배송상태',
            value: (
                data.deliveryNumber ?
                    <span style={{color: 'green'}}> 배송완료 <span style={{color: 'black'}}>
                    {screenSize < 768 ? <br/> : null}** 송장번호: {data.deliveryNumber} **</span></span>
                    :
                    data.paymentStatus === '주문취소(미입금)'?
                    <span>-</span>
                    :
                    <span style={{color: 'crimson'}}> 배송 전</span>
                
            )
        }
    ];

    return {
        orderInfoArray,
        paymentInfoArray,
        deliveryInfoArray
    }
}

export default DetailedInfoData;