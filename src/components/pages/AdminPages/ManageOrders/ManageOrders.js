import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ManageOrdersAPI from '../../../../api/manageOrders';
import EachOrder from './Section/EachOrder/EachOrder';
import Paginate from '../../../common/Pagination/Paginate';

function ManageOrders({ className, cookie, match }) {
    const pageNumber = match.params.pageNumber || 1;
    const [loading, setLoading] = useState(false);
    const [ordersData, setOrdersData] = useState({
        orders: [],
        totalPages: null
    });
    const { orders, totalPages } = ordersData;

    useEffect(() => {
        setLoading(true)
        ManageOrdersAPI.manageOrders(cookie, pageNumber).then(res =>{ 
            setLoading(false);
            setOrdersData({
                ...ordersData,
                orders: res?.data.ordersInfo,
                totalPages: res?.data.totalPages
            });
        })
    }, [cookie, pageNumber])

    const deleteOrderRecord = (orderId) => {
        ManageOrdersAPI.removeOrderRecord(orderId, cookie).then(res => {
            window.location.reload(false);
        })
    }

    return (
        <div className={className}>
            <h1>주문관리</h1>
            <div className="main-area">
                {
                loading ? 
                    <p style={{textAlign: 'center'}}>Loading...</p>
                    :
                    !orders || orders.length === 0 ?
                    <p>주문 내역이 아직 없습니다.</p>
                    :
                    <>
                    {orders.map(data => (
                        <EachOrder
                            key={data._id}
                            data={data}
                            cookie={cookie}
                            deleteOrderRecord={deleteOrderRecord}
                        />
                    ))}
                    <Paginate totalPages={totalPages} currentPage={pageNumber} routePath='/manageOrders' />
                    </>
                }
            </div>
        </div>
    )
}

export default styled(ManageOrders)`
    background-color: lightgray;
    padding: 30px;
    height: 100vh;

    & {
        .main-area {
            /* border: 1px solid red; */
            height: 75vh;
            overflow: auto;
        }
    }
`;
