import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PaymentAPI from '../../../../../api/payment';
import { useDispatch } from 'react-redux';
import { updateOrderedItems, updateTotalPrice } from '../../../../../modules/paymentInfo';
import OrderedItemList from './Section/OrderedItemList';
import OrderedItemTotalPrice from './Section/OrderedItemTotalPrice';

function OrderedItem({ className, cookie, priceInfo, setPriceInfo }) {
    const dispatch = useDispatch();
    const updateOrderedItemsInfo = (payload) => dispatch(updateOrderedItems(payload));
    const updateTotalPriceInfo = (payload) => dispatch(updateTotalPrice(payload));
    
    const [orderedItems, setOrderedItems] = useState([]);
    const setDeliveryFee = priceInfo.deliveryFee || 3000;

    useEffect(() => {        
        const itemsToPurchaseFromStorage = localStorage.getItem('itemsToPurchase') ? JSON.parse(localStorage.getItem('itemsToPurchase')) : [];
        const ids = itemsToPurchaseFromStorage.map(x => x.id);
        PaymentAPI.getItemsById(ids, cookie).then(products => {
            setOrderedItems(products.data);
            setInitialItemsPrice(products.data);
            updateOrderedItemsInfo(products.data);
            })

    }, []);

    const setInitialItemsPrice = (items) => {
        if(items?.length === 0) return;
        const priceArr = items? [...items].map(item => item.price) : null;
        const initialItemsPriceSum = priceArr?.reduce((acc, curr) => acc + curr);
        const initialTotalPrice = initialItemsPriceSum + setDeliveryFee;
        setPriceInfo({
            ...priceInfo, 
            itemsPrice: initialItemsPriceSum, 
            deliveryFee: setDeliveryFee, 
            totalPrice: initialTotalPrice
        });
        updateTotalPriceInfo(initialTotalPrice);
    };

    const deleteItem = (item_to_remove) => {
        const newItemList = [...orderedItems].filter(item => item._id !== item_to_remove);
        setOrderedItems(newItemList);
        updateOrderedItemsInfo(newItemList);

        const setNewItemsPrice = () => {
            if(newItemList?.length === 0) {
                setPriceInfo({
                    ...priceInfo, 
                    itemsPrice: 0, 
                    deliveryFee: 0, 
                    totalPrice: 0,
                    necklaceFee: 0
                });
                updateTotalPriceInfo(0);
            } else {
                const priceArr = [...newItemList].map(item => item.price);
                const newItemsPrice = priceArr.reduce((acc, item) => acc + item);
                const newTotalPrice = newItemsPrice + setDeliveryFee + priceInfo.necklaceFee;
                setPriceInfo({
                    ...priceInfo, 
                    itemsPrice: newItemsPrice, 
                    deliveryFee: setDeliveryFee, 
                    totalPrice: newTotalPrice
                });
                updateTotalPriceInfo(newTotalPrice);
            }
        };
        setNewItemsPrice();

        const itemsToPurchaseFromStorage = localStorage.getItem('itemsToPurchase') ? JSON.parse(localStorage.getItem('itemsToPurchase')) : [];
        const filtered = itemsToPurchaseFromStorage.filter(item => item.id !== item_to_remove);
        localStorage.setItem('itemsToPurchase', filtered.length === 0 ? [] : JSON.stringify(filtered))
    }

    return (
        <div className={className}>
            <h2>주문 상품정보</h2>
            <OrderedItemList orderedItems={orderedItems} deleteItem={deleteItem} />
            <OrderedItemTotalPrice priceInfo={priceInfo} />
        </div>
    )
}

export default styled(OrderedItem)`
    /* border: 1px solid green; */
    flex: 1;
    background-color: #fff;
    margin: 10px;
    padding: 20px;

    & {
        h2 {
            color: gray;
        }
        .section {
            /* border: 1px solid blue; */
            border-bottom: 1px solid gray;
            padding-right: 10px;
            position: relative;

            img {
                width: 40px;
                height: 40px;
                margin-right: 20px;
            }
            .delete-btn {
                /* border: 1px solid green; */
                position: absolute;
                right: -6px;
                color: lightgray;
                &:hover {
                    cursor: pointer;
                    color: red;
                }
            }
            
        }
        .flex-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
        }
        .flex-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .label {
            margin-right: 20px;
            font-size: 15px;
            color: gray;
        }
        .total-price {
            font-weight: bold;
            font-size: 18px;
        }
        small {
            margin-left: 10px;
            color: crimson;
        }
        .no-item {
        /* border: 1px solid green; */
        color: gray;
        text-align: center;
        }
        .item-name {
            font-size: 18px;
            /* font-weight: bold */
        }
    }
`;  
