// import React from 'react';
// import styled from 'styled-components';
// import BootPay from "bootpay-js";
// import { useSelector } from 'react-redux';

// import { application_id } from '../../../../confidential';
// import API from '../../../../api/api';

// function Bootpay(props) {

// 	const { history, cookie } = props;

// 	const fetchedOrderedItems = useSelector(state => state.paymentInfo?.orderedItems);
// 	const fetchedUserInfo = useSelector(state => state.paymentInfo?.userInfo);
// 	const fetchedTotalPrice = useSelector(state => state.paymentInfo?.totalPrice);
	
// 	const fetchedPaymentInfo_receiver = useSelector(state => state.paymentInfo?.deliveryInfo_receiver);
//     const fetchedPaymentInfo_contact = useSelector(state => state.paymentInfo?.deliveryInfo_contact);
//     const fetchedPaymentInfo_address = useSelector(state => state.paymentInfo?.deliveryInfo_address);
//     const fetchedPaymentInfo_detailedAddr = useSelector(state => state.paymentInfo?.deliveryInfo_detailedAddr);

// 	const orderedItemsList = fetchedOrderedItems?.map(item => {
// 		return {
// 			item_name: item.title,
// 			qty: 1,
// 			unique: item._id,
// 			price: item.price,
// 			cat1: item.categories
// 		}
// 	});

// 	console.log("주문할 제품들::", orderedItemsList)

// 	const orderedItemNames = fetchedOrderedItems?.map(item => {
// 		return item.title
// 	})
	
// 	const userInfo = {
// 		username: fetchedUserInfo.name,
// 		email: fetchedUserInfo.email,
// 		addr: "주소주소",
// 		phone: fetchedUserInfo.contact
// 	}

// 	const activateBootPay = () => {

// 		const productOrderId = 20120712345;

// 		BootPay.request({
// 			price: fetchedTotalPrice, 
// 			application_id: application_id,
// 			name: orderedItemNames, 
// 			pg: 'inicis',
// 			method: 'card', 
// 			show_agree_window: 0, 
// 			items: orderedItemsList,
// 			user_info: {
// 				username: userInfo.username,
// 				email: userInfo.email,
// 				addr: userInfo.addr,
// 				phone: userInfo.contact
// 			},
// 			order_id: productOrderId
// 		}).error(function (data) {
// 			console.log("결제 진행시 에러 발생::", data);
// 			alert('결제 중 에러가 발생하였습니다.');
// 		}).cancel(function (data) {
// 			console.log("결제 취소", data);
// 			alert('결제가 취소되었습니다.');
// 		}).ready(function (data) {
// 			console.log("가상계좌 입금 계좌번호 발급::", data);
// 		}).confirm(function (data) {
// 			console.log("결제 실행 전, 주로 재고를 확인하는 로직::", data);
// 			var enable = true;
// 			if (enable) {
// 				BootPay.transactionConfirm(data); 
// 			} else {
// 				BootPay.removePaymentWindow();
// 			}
// 		}).close(function (data) {
// 			console.log("결제창 닫힘::", data);
// 		}).done(function (data) {
// 			console.log("결제 정상적으로 완료됨::", data);

// 			const orderedProductInfo = {
// 				items: orderedItemsList,
// 				totalPrice: fetchedTotalPrice,
// 				productOrderId,
// 				deliveryInfo: {
// 					receiver: fetchedPaymentInfo_receiver,
// 					contact: fetchedPaymentInfo_contact,
// 					address: fetchedPaymentInfo_address,
// 					detailedAddr: fetchedPaymentInfo_detailedAddr
// 				}
// 			};
	
// 			API.addPaymentInfo(orderedProductInfo, cookie).then(res => {
// 				console.log("paymentHandled??::", res)
// 				console.log("payment-_id::", res.data.doc._id)
	
// 				if (!res.data.success) return alert("결제내역 저장에 실패하였습니다.");

// 				// 결제 검증
// 				const payload = {
// 					orderId: res.data.doc._id,
// 					receipt_id: data.receipt_id
// 				}
// 				API.verifyPayment(payload, cookie).then(res => {
// 					console.log("결제 검증 완료??::", res);
// 					alert("결제에 성공하였습니다!");
// 					// history.push('/my');
// 				});
					
// 			});

// 		});
// 	}

// 	const paymentHandler = () => {
// 		if (
//             fetchedPaymentInfo_receiver === '' || 
//             fetchedPaymentInfo_contact === '' ||
//             fetchedPaymentInfo_address === '' ||
//             fetchedPaymentInfo_detailedAddr === ''
//         ) {
//             alert('배송지 정보를 다 입력해 주세요!')
// 		} else if (
// 			fetchedOrderedItems.length === 0 ||
// 			fetchedOrderedItems === !undefined 
// 			// fetchedTotalPrice < 3000
// 		) {
// 			alert('주문할 상품을 선택해주세요!')
// 		} else {            
// 			activateBootPay();
//         }
// 	}


//     return (
//         <div className={props.className}>
//             <button className="payment-btn" onClick={paymentHandler}>카드결제</button>
//         </div>
//     )
// }

// export default styled(Bootpay)`
// 	width: 100%;
// 	margin-right: 10px;
// 	flex: 8;
// `;
