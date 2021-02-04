import React from 'react'

function Thead({ screenSize }) {
    return (
        <>
            <tr>
            {
            screenSize < 768 ?
                <th colSpan="4">주문내역</th>
            :
            <>
                <th>주문상품</th>
                <th>결제금액</th>
                <th>결제방식</th>
                <th>결제상태</th>
                <th>배송상태</th>
            </>
            }
            </tr>
        </>
    )
}

export default Thead
