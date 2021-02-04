import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartAPI from '../../../../../api/cart';

import Modal from '../../../../common/Modal/Modal';
import OnClickTitleToggleContent from '../../../../common/Containers/OnClickTitleToggleContent';
import Content from './Section/Content';

const PurchaseInfo = ({ className, history, cookie, itemPrice, productId, isSoldOut }) => {
    const isLogin = useSelector(state => state.login.isLogin);

    const onClickAddToCartBtn = () => {
        if(isLogin) {
            // 로그인한 유저라면?
            addToCarthandler();
        } else {
            // 로그아웃 상태라면?
            alert("로그인이 필요한 기능입니다!");
        }
    }
    
    const [openModal, setOpenModal] = useState(false);

    const addToCarthandler = () => {
        const payload = {productId}
        CartAPI.addToCart(payload, cookie).then(res => {
            if(!res.data.success) {
                //이미 카트에 추가한 상품일때 or 카트 상품수가 3개를 초과했을때
                setOpenModal(false);
                alert(res.data.message)
            } else {
                setOpenModal(true);
            }
        });
    }

    // Modal - OnClickLeftBtn : Close Modal
    const stayOnPage = () => {
        setOpenModal(false);
        history.goBack();
    }
    // Modal - OnClickRightBtn : Move to Cart Page
    const moveToCart = () => {
        setOpenModal(false);
        history.push('/cart');
    }

    return (
        <div className={className}>
            <OnClickTitleToggleContent titleText="주문하기">
                <Content 
                    isSoldOut={isSoldOut}
                    itemPrice={itemPrice}
                    onClickAddToCartBtn={onClickAddToCartBtn}
                />
            </OnClickTitleToggleContent>
            {openModal && 
                <Modal 
                    modalText="선택하신 상품을 장바구니에 담았습니다."
                    leftBtnText="계속쇼핑"
                    onClickLeftBtn={stayOnPage} 
                    rightBtnText="장바구니"
                    onClickRightBtn={moveToCart} 
                />
            }
        </div>
    )
}

export default styled(PurchaseInfo)`
    margin-bottom: 50px;
`;