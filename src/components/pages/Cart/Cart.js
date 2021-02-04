import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartAPI from '../../../api/cart';
import { useSelector } from 'react-redux';

import Header from './Section/Header/Header';
import CartTable from './Section/CartTable/CartTable';


const Cart = ({ className, history, cookie}) => {
    const screenSize = useSelector(state => state.responsive.screenSize);
    const [itemList, setItemList] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        window.scrollTo(0,0);
        CartAPI.getCartItems(cookie)
        .then(res => {
            setItemList(res?.data?.cartItems)
        });
    }, []);

    const onChangeCheckBox = (e) => {        
        const checkedItem = {
            id: e.target.id,
            value: e.target.value
        }
        
        if (e.target.checked) {
            setCheckedItems([...checkedItems, checkedItem])
        } else {
            const newItemList = checkedItems.filter(item => (
                item.id !== e.target.id
            ))
            setCheckedItems(newItemList)
        }
    }

    const clickToOrder = () => {
        if (!checkedItems || checkedItems.length === 0 || !itemList || itemList.length === 0) {
            return alert("주문할 상품을 선택해 주세요!");
        }

        localStorage.setItem('itemsToPurchase', JSON.stringify(checkedItems))
        history.push('/purchase')
    };

    const clickToDelete = (itemId) => {
        const newItems = [...itemList].filter(item => item._id !==itemId);
        setItemList(newItems);
        CartAPI.deleteCartItem(itemId, cookie);
    };

    const moveToItemPage = (itemId) => {
        history.push(`/products/${itemId}`);
    };

    return (
        <div className={className}>
            <Header screenSize={screenSize} clickToOrder={clickToOrder} />
            <div className="table-container">
                <CartTable 
                    itemList={itemList} 
                    onChangeCheckBox={onChangeCheckBox} 
                    moveToItemPage={moveToItemPage} 
                    clickToDelete={clickToDelete}  
                />
            </div>
        </div>
    )
}

export default styled(Cart)`
    /* border: 1px solid red; */
    background-color: lightgray;
    padding: 30px;
    height: 100vh;

    & {
        h2 {
            margin-bottom: 50px;
            text-align: center;
        }
        .sold-out {
            color: crimson;
        }
        .table-container {
            /* border: 1px solid blue; */
            height: 70vh;
            width: 90%;
            margin: 0 auto;
            overflow: auto;
        }
        .button-container {
            /* border: 1px solid green; */
            display: flex;
            justify-content: flex-end;
            margin-bottom: 25px;
        }
        .button {
            background-color: #000;
            color: #fff;
            border: 1px solid lightgray;
            border-radius: 10px;
            padding: 10px 15px;
            margin-right: 10px;
            &:hover {
                cursor: pointer;
                background-color: #fff;
                color: #000
            }
            &:focus {
                outline: none;
            }
            &:active {
                transform: scale(0.98);
            }
            &.del {
                background-color: #fff;
                color: #000;
                border: 1px dotted lightgray;
                &:hover {
                    cursor: pointer;
                    background-color: #000;
                    color: #fff; 
                }
            }
        }
        table {
            /* border: 1px solid blue; */
            border-collapse: collapse;
            background-color: #fff;
            width: 100%;
            margin: 0 auto;
            margin-bottom: 100px;
            position: relative;
            tr, td, th {
                border-bottom: 1px dotted lightgray;
                padding: 10px;
                text-align: center;
            }
            thead {
                th {
                    position: sticky;
                    top: 0;
                    background-color: #eeeeee;
                }
            }
            .item td {
                padding-top: 30px;
            }
            .name {
                /* border: 1px solid green; */
                width: 100%;
                text-align: start;
                display: flex;
                align-items: center;
                padding-left: 20px;
                &:hover {
                    cursor: pointer;
                }
                .img {
                    /* border: 1px solid pink; */
                    width: 70px;
                    height: 70px;
                    margin-right: 70px;
                }
            }

        }
    }

    @media (max-width: 768px) {
        .title-container-mobile {
            /* border: 1px solid green; */
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        h2 {
            margin: 0;
        }
        table {
            tr, td, th {
                border: none;
            }
            .miniTitle {
                font-weight: bold;
                color: gray;
            }
        }
        .itemArea {
            /* border-bottom: 1px dotted lightgray; */
        }
        .priceArea {
            > td {
                text-align: start;
                padding-left: 20px;
            }
        }
        .checkbox-border {
            border-top: 1px solid black;
        }
        .button.del {
            width: 100%;
            border: 1px solid lightgray;
            font-size: 12px;
        }
        .sold-out {
            text-align: center;
        }
    }
`;
