import React from 'react';
import styled from 'styled-components';
import { priceFormatter } from '../../../../../../utils/priceFormatter';
import DetailedOrderInfo from './Parts/DetailedOrderInfo';

function Tbody({ className, data, screenSize }) {
    return (
        <>
        <tr className={className}>
            <td className='tbody-content'>
                {
                data.products.length > 1 ?
                <span>{data.products[0].name}(...)</span>
                :
                <span>{data.products[0].name}</span>
                }
            </td>
            <td className='tbody-content'>
                {priceFormatter(data.totalPrice)}원
            </td>

            {screenSize > 768 && <td>{data.paymentMethod}</td>}

            <td className='tbody-content'>
                {
                data.paymentStatus === '입금대기/입금확인중' ?
                <span style={{color: 'crimson'}}>입금대기/입금확인중</span>
                :
                data.paymentStatus === '주문취소(미입금)' ?
                <span style={{color: 'violet'}}>주문취소(미입금)</span>
                :
                <span style={{color: 'green'}}>{data.paymentStatus}</span>
                }
            </td>
            <td className='tbody-content'>
                {
                data.deliveryNumber ?
                <span style={{color: 'green'}}>배송완료 ({data.deliveryNumber})</span>
                :
                data.paymentStatus === '주문취소(미입금)'?
                <span>-</span>
                :
                <span style={{color: 'crimson'}}>배송 전</span>
                }
            </td>
        </tr>
        <tr>
            <DetailedOrderInfo data={data} screenSize={screenSize} />
        </tr>
        </>
    )
}

export default styled(Tbody)`

    @media (max-width: 768px) {
        .tbody-content {
            font-size: 0.7rem;
        }
    }
`;
