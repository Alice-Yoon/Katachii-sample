import React, {useState} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getTmrDate } from '../../../../../../utils/getTmrDate';
import PaymentAPI from '../../../../../../api/payment';

const getDateOfTomorrow = getTmrDate();

function PayToBank({ className, cookie, history}) {
    const screenSize = useSelector(state => state.responsive.screenSize);
    const fetchedOrderedItems = useSelector(state => state.paymentInfo?.orderedItems);
    const fetchedTotalPrice = useSelector(state => state.paymentInfo?.totalPrice);
    const fetchedDeliveryInfo = useSelector(state => state.paymentInfo?.deliveryInfo);
    const fetchedIsDeliveryFar = useSelector(state => state.paymentInfo?.isDeliveryFar);
    const fetchedNecklaceType= useSelector(state => state.paymentInfo?.necklaceType);
        
    const [depositor, setDepositor] = useState('');

    const onChangeDepositor = (e) => {
        const { value } = e.target;
        setDepositor(value);
    }
    	
	const orderedItemsList = fetchedOrderedItems?.map(item => {
		return {
			item_name: item.title,
			qty: 1,
			unique: item._id,
			price: item.price,
			cat1: item.categories
		}
    });
    
    const orderedProductInfo = {
        items: orderedItemsList,
        totalPrice: fetchedTotalPrice,
        deliveryInfo: {
            receiver: fetchedDeliveryInfo.name,
            contact: fetchedDeliveryInfo.phone,
            address: fetchedDeliveryInfo.address,
            detailedAddr: fetchedDeliveryInfo.detailedAddress
        },
        isDeliveryFar: fetchedIsDeliveryFar,
        necklaceType: fetchedNecklaceType,
        depositor
    };

    const paymentHandler = () => {
        if (
            fetchedDeliveryInfo.name === '' || 
            fetchedDeliveryInfo.phone === '' ||
            fetchedDeliveryInfo.address === '' ||
            fetchedDeliveryInfo.detailedAddress === ''
        ) {
            alert('배송지 정보를 다 입력해 주세요!')
        } else if (
			fetchedOrderedItems.length === 0 ||
			fetchedOrderedItems === !undefined ||
			fetchedTotalPrice < 3000
		) {
			alert('주문할 상품을 선택해주세요!')
		} else {      
            
            PaymentAPI.paymentToBank(orderedProductInfo, cookie).then(res => {
                if(!res.data.success) return alert(res.data.msg);
                localStorage.setItem('itemsToPurchase', []);
                alert("주문에 성공하셨습니다! 입금기한 (다음날 낮12시) 맞추어 입금 부탁드립니다!");
                history.push('/my');
            })
        }
    }
    
    return (
        <div className={className}>
            <p>(신한) xxx-xxxxx-xxxx 신나라</p>
            <div className="input-container">
                <input placeholder="여기에 입금자명을 입력해주세요. (미입력시 주문자명)" value={depositor} onChange={onChangeDepositor} />
                {
                    screenSize < 768 ?
                    <small>** 내일 ({getDateOfTomorrow}) - [ 낮 12시 ] <br/> 이전까지 미입금시 자동 취소됩니다. **</small>
                    :
                    <small>** 내일 ({getDateOfTomorrow}) - [ 낮 12시 ] 이전까지 미입금시 자동 취소됩니다. **</small>
                }
            </div>
            <button className="payment-btn" onClick={paymentHandler}>무통장입금</button>
        </div>
    )
}

export default styled(PayToBank)`
    /* border: 1px solid red; */
    width: 100%;
	margin-right: 10px;
    margin-bottom: 7px;
	flex: 8;
    & {
        p {
            text-align: center;
            font-weight: bold;
            margin-bottom: 30px;
            font-size: 20px;
        }
        .input-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
            > input {
                border: none;
                border-bottom: 1px dotted black;
                width: 80%;
                padding: 10px;
                margin: 0 auto;
                margin-bottom: 15px;
                text-align: center;
                &::placeholder {
                    text-align: center;
                    /* font-size: 15px; */
                }
            }
            > small {
                color: crimson;
            }
        }
    }
`;
