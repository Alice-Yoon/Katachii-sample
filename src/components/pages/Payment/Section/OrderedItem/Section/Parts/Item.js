import React from 'react';
import { URL } from '../../../../../../../utils/url';
import { priceFormatter } from '../../../../../../../utils/priceFormatter';

function Item({ item, deleteItem }) {
    return (
        <div className="section flex-row">
            <div className="flex-row">
                <img src={`${URL}/${item.images[0]}`} alt="img1" />
                <p className="item-name">{item.title}</p>
                <small>1개</small>
            </div>
            <p>{priceFormatter(item.price)}원</p>
            <span className="delete-btn" onClick={() => deleteItem(item._id)}>x</span>
        </div>
    )
}

export default Item
