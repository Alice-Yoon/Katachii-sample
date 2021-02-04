import React, { useState } from 'react';
import styled from 'styled-components';
import ManageOrdersAPI from '../../../../../../../api/manageOrders';
import InfoBox from '../../../../../../common/Containers/InfoBox';
import OrderDetailsData from '../../data/OrderDetailsData';

function EachOrderDetails({ className, userInfo, orderInfo, deliveryInfo, cookie }) {
    const [openOrderDetails, setOpenOrderDetails] = useState(false);
    const [deliveryNumber, setDeliveryNumber] = useState('');

    const toggleOpenOrderDetails = () => {
        setOpenOrderDetails(!openOrderDetails);
    }

    const updateOrderStatus = () => {
        const payload = {
            orderId: orderInfo.orderId,
            userId: userInfo.id,
        }
        ManageOrdersAPI.updateOrderStatus(payload, cookie).then(res => {
            window.location.reload(false);
        });
    }

    const onChangeDeliveryNumber = (e) => {
        setDeliveryNumber(e.target.value);
    }

    const updateDeliveryNumber = () => {
        const payload = {
            orderId: orderInfo.orderId,
            userId: userInfo.id,
            deliveryNumber: deliveryNumber
        }
        ManageOrdersAPI.updateDeliveryNumber(payload, cookie).then(res => {
            window.location.reload(false);
        });
    }

    const cancelThisOrder = () => {
        const payload = {
            orderId: orderInfo.orderId,
            userId: userInfo.id,
            productsIds: orderInfo.orderItemsId 
        }
        ManageOrdersAPI.cancelThisOrder(payload, cookie).then(res => {
            window.location.reload(false);
        });
    }

    const infoParameter = {
        userInfo, 
        orderInfo, 
        deliveryInfo, 
        deliveryNumber, 
        updateOrderStatus, 
        onChangeDeliveryNumber, 
        updateDeliveryNumber
    }

    const info = OrderDetailsData(infoParameter);
    const { userInfoArray, orderInfoArray, deliveryInfoArray} = info;
    const generateSubtitleValueFormat = (subTitle, value) => <p><span className="title">{subTitle}:</span> {value}</p>;
    
    return (
        <div className={className}>
            {openOrderDetails ? 
             <p onClick={toggleOpenOrderDetails} className="more-btn">[ 닫기 ]</p>
             : 
             <p onClick={toggleOpenOrderDetails} className="more-btn">[ 자세히 ]</p>
            }
            { openOrderDetails &&
                <div className="container">
                    {orderInfo.orderStatus === '주문취소(미입금)' ? 
                        null
                    :
                        <button onClick={cancelThisOrder}>주문취소</button>
                    }

                    <ManageOrderInfoBox 
                        title="주문자 정보"
                        children={
                            userInfoArray.map(info => (
                                generateSubtitleValueFormat(info.title, info.value)
                            ))
                        }
                    />
                    <ManageOrderInfoBox 
                        title="주문 정보"
                        children={
                            orderInfoArray.map(info => (
                                generateSubtitleValueFormat(info.title, info.value)
                            ))
                        }
                    />
                    <ManageOrderInfoBox 
                        title="배송정보"
                        children={
                            deliveryInfoArray.map(info => (
                                generateSubtitleValueFormat(info.title, info.value)
                            ))
                        }
                    />
                </div>
            }
        </div>
    )
}

export default styled(EachOrderDetails)`
    & {
        .container {
            padding: 20px;
        }
        .more-btn {
            /* border: 1px solid blue; */
            font-size: 13px;
            text-align: center;
            color: gray;
            cursor: pointer;
        }
        .title {
            font-weight: 600;
            color: gray;
        }
    }
`;


const ManageOrderInfoBox = styled(InfoBox)`

`;