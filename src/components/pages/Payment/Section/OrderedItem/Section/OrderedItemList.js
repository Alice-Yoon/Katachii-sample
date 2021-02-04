import React from 'react';
import styled from 'styled-components';
import Item from './Parts/Item';

function OrderedItemList({ className, orderedItems, deleteItem }) {
    return (
        <div className={className}>
            {
            !orderedItems || orderedItems?.length === 0 ? 
                <div className="section">
                    <p className="no-item">주문 상품이 없습니다.</p>
                </div>
                :
            orderedItems?.map(item => (
                <Item  key={item._id} item={item} deleteItem={deleteItem} />
            )) 
            }
        </div>
    )
}

export default styled(OrderedItemList)`
    padding: 20px 5px;
    height: 300px;
    overflow: auto;
`;
