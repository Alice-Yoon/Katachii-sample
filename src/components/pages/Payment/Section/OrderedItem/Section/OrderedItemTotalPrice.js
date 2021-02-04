import React from 'react';
import styled from 'styled-components';
import { priceFormatter } from '../../../../../../utils/priceFormatter';

function OrderedItemTotalPrice({ className, priceInfo }) {
    return (
        <div className={className}>
            <div className="section flex-column">
                <p><span className="label">상품가격</span> <span>{priceFormatter(priceInfo.itemsPrice)}원</span></p>
                <p><span className="label">배송비</span> <span>{priceFormatter(priceInfo.deliveryFee)}원</span></p>
                {
                priceInfo.necklaceFee !== 0 &&
                    <p><span className="label">목걸이줄</span> <span>{priceFormatter(priceInfo.necklaceFee)}원</span></p>
                }
            </div>
            <div className="section flex-column">
                <p><span className="label">총 결제금액</span> <span className="total-price">{priceFormatter(priceInfo.totalPrice)}원</span></p>
            </div>
        </div>
    )
}

export default styled(OrderedItemTotalPrice)`
    width: 80%;
    margin: 0 auto;
`;
