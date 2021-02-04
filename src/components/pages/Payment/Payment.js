import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { updateTotalPrice, updateIsDeliveryFar, updateNecklaceType } from '../../../modules/paymentInfo';
import { basicStringPrice_Black, silverStringPrice_One, silverStringPrice_Two } from '../../../common_data/necklaceStringPrice';
import { normalDeliveryFee, farDeliveryAdditionalFee } from '../../../common_data/deliveryPrice';

import CustomerInfo from './Section/CustomerInfo/CustomerInfo';
import PaymentMethod from './Section/PaymentMethod/PaymentMethod';
import OrderedItem from './Section/OrderedItem/OrderedItem';

function Payment({className, cookie, history}) {
    const dispatch = useDispatch();
    const updateTotalPriceInfo = (payload) => dispatch(updateTotalPrice(payload));
    const updateIsDeliveryFarInfo = (payload) => dispatch(updateIsDeliveryFar(payload));
    const updateNecklaceTypeInfo = (payload) => dispatch(updateNecklaceType(payload));

    useEffect(() => {
        return () => {
            if(window.performance.navigation.type === 1) return
            localStorage.setItem('itemsToPurchase', [])
        }
    }, [window.performance])

    const [priceInfo, setPriceInfo] = useState({
        itemsPrice: 0,
        deliveryFee: 0,
        totalPrice: 0,
        necklaceFee: 0
    });
    const { itemsPrice, deliveryFee, necklaceFee } = priceInfo;

    const onToggleIsDeliveryFar = (e) =>{
        const { checked } = e.target;
        const delivery = !checked ? normalDeliveryFee : normalDeliveryFee + farDeliveryAdditionalFee;
        const total = itemsPrice + delivery + necklaceFee;
        setPriceInfo({
            ...priceInfo,
            deliveryFee: delivery,
            totalPrice: total
        })
        updateTotalPriceInfo(total);
        updateIsDeliveryFarInfo(checked)
    }

    const [necklace, setNecklace] = useState(0);
    
    const onChangeNecklace = (e) => {
        let total;
        const value = Number(e.target.value);
        setNecklace(value);
        if (value === 1) {
            total = itemsPrice + deliveryFee + silverStringPrice_One;
            setPriceInfo({
                ...priceInfo,
                necklaceFee: silverStringPrice_One,
                totalPrice: total
            })
        } else if (value === 2) {
            total = itemsPrice + deliveryFee + silverStringPrice_Two;
            setPriceInfo({
                ...priceInfo,
                necklaceFee: silverStringPrice_Two,
                totalPrice: total
            })
        } else {
            total = itemsPrice + deliveryFee
            setPriceInfo({
                ...priceInfo,
                necklaceFee: basicStringPrice_Black,
                totalPrice: total
            })
        }
        updateTotalPriceInfo(total)
        updateNecklaceTypeInfo(value)
    }

    return (
        <div className={className}>
            <h2>ORDER</h2>
            <div className="container">
                <div className="top-section">
                    <CustomerInfo 
                        cookie={cookie} 
                        onToggleIsDeliveryFar={onToggleIsDeliveryFar} 
                        necklace={necklace}
                        onChangeNecklace={onChangeNecklace}
                    />
                    <OrderedItem 
                        history={history} 
                        cookie={cookie} 
                        priceInfo={priceInfo} 
                        setPriceInfo={setPriceInfo} 
                    />
                </div>
                <div className="bottom-section">
                    <PaymentMethod history={history} cookie={cookie} />
                </div>
            </div>
        </div>
    )
}

export default styled(Payment)`
    background-color: lightgray;
    padding: 30px;
    padding-bottom: 130px;
    
    & {
        h2 {
            margin: 0;
            margin-bottom: 20px;
        }
        .container {
            width: 80%;
            margin: 0 auto;
        }
        .top-section {
            /* border: 1px solid black; */
            display: flex;
            margin-bottom: 30px;
        }
        .bottom-section {
            /* border: 1px solid green; */
            display: flex;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 768px) {
        /* border: 1px solid aqua; */
        
        .container {
            width: 100%;
        }
        .top-section {
            /* border: 1px solid red; */
            flex-direction: column;
        }
        .bottom-section {
            /* border: 1px solid blue; */
        }

    }
`;
