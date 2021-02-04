import React, {useState} from 'react';
import styled from 'styled-components';
import InfoBox from '../../../../../../common/Containers/InfoBox';
import DetailedInfoData from '../../../data/DetailedInfoData';
import { silverStringPrice_One, silverStringPrice_Two } from '../../../../../../../common_data/necklaceStringPrice';
import { normalDeliveryFee, farDeliveryAdditionalFee } from '../../../../../../../common_data/deliveryPrice';

function DetailedOrderInfo({ className, data, screenSize }) {
    const [openDetails, setOpenDetails] = useState(false);
    const toggleOpenDetails = () => {
        setOpenDetails(!openDetails);
    }

    const info = DetailedInfoData(data);
    const { orderInfoArray, paymentInfoArray, deliveryInfoArray } = info;

    const generateInfoBoxChildrenFormat = ( id, subTitle, value, name, quantity, price, isTitleValueFormat = true) => {
        if (!isTitleValueFormat) {
           return (
                <div key={id} className="item-container">
                    <span>{name}</span>
                    <span>{quantity} 개</span>
                    <span>{price} 원</span>
                </div>
            )
        } else {
            return <p key={id}><span className="sub-title">{subTitle}:</span> {value}</p>
        }        
    };

    const underBoxText = (
        <div style={{color: 'grey', textAlign: 'end'}}>
            {
                !data.isDeliveryFar ?
                    <small> (+ 배송비: {normalDeliveryFee} 원)</small>
                : 
                    <small> (+ 배송비: {normalDeliveryFee + farDeliveryAdditionalFee} 원)</small>
            }
            {
                data.necklaceType === 1 ?
                    <small> (+ 실버줄1: {silverStringPrice_One} 원)</small>
                : data.necklaceType === 2 ?
                    <small> (+ 실버줄2: {silverStringPrice_Two} 원)</small>
                :
                    null
            }
        </div>
    )

    return (
        <td className={className} colSpan="5" onClick={toggleOpenDetails}>
            {!openDetails && <small style={{color: 'gray', cursor: 'pointer'}}>- 자세히 -</small>}
            {openDetails &&
            <>
            {
                screenSize > 768 ?
                <>
                    <p>** 입금기한은 주문 다음날 <span style={{color: 'crimson'}}>낮12시까지</span> 입니다. 
                        입금기한을 넘길 시, 주문이 <strong>자동취소</strong>됩니다. **</p>
                    <small>( 계좌번호: 신한 xxx-xxx-xxx 신나라 )</small>
                </>
                :
                <>
                    <p>** 입금기한은 주문 다음날 <span style={{color: 'crimson'}}>낮12시까지</span> 입니다. <br/> 
                        입금기한을 넘길 시, 주문이 <strong>자동취소</strong>됩니다. **</p>
                    <small>( 계좌번호: 신한 xxx-xxx-xxx 신나라 )</small>
                </>
            }
            
            <MyStyledInfoBox 
                title="주문상품"
                children={
                    data.products.map(item => generateInfoBoxChildrenFormat(item.id, null, null, item.name, item.quantity, item.price, false))
                }
                underBoxText={
                    underBoxText
                }
            />
            <MyStyledInfoBox 
                title="주문정보"
                children={
                    orderInfoArray.map(item => generateInfoBoxChildrenFormat(item.id, item.title, item.value, null, null, null))
                }
            />

            <MyStyledInfoBox 
                title="결제정보"
                children={
                    paymentInfoArray.map(item => generateInfoBoxChildrenFormat(item.id, item.title, item.value, null, null, null))
                }
            />

            <MyStyledInfoBox 
                title="배송정보"
                children={
                    deliveryInfoArray.map(item => generateInfoBoxChildrenFormat(item.id, item.title, item.value, null, null, null))
                }
            />
            </>
            }
        </td>
    )
}

export default styled(DetailedOrderInfo)`
    background-color: #eeeeee;

    & {
        .item-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 5px;
            width: 70%;
            overflow: auto;
        }
        .sub-title {
            font-weight: bold;
            color: gray;
        }
    }

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const MyStyledInfoBox = styled(InfoBox)`
    text-align: start;
    padding: 10px 45px;
    & {
        .infobox_title {
            text-align: start; 
            font-size: 1.15rem;
        }
        .infobox_box-style {
            border: 1.5px dotted grey;
            padding: 10px;
            width: 100%;
        }
    } 
`;