import React from 'react';
import { URL } from '../../../../../../utils/url';
import { priceFormatter } from '../../../../../../utils/priceFormatter';
import { normalDeliveryFee } from '../../../../../../common_data/deliveryPrice'

function TbodyWeb({ item, onChangeCheckBox, moveToItemPage, clickToDelete }) {

    const toggleContentOnSoldStatus = () => {

        // const SOLD_OUT = 'SOLD OUT';
        // const delivery = {
        //     quantity: '1개',
        //     method: '택배',
        //     price: '3,000'
        // }

        return (
            item?.sold ? 
            <>
                <td className="sold-out">SOLD OUT</td>
                <td>-</td>
                <td>-</td>
                <td className="sold-out">SOLD OUT</td>
            </>
            :
            <>
                <td>1개</td>
                <td>택배</td>
                <td>{priceFormatter(normalDeliveryFee)}원</td>
                <td>{priceFormatter(item.price)} 원</td>
            </>
        )
    }

    return (
        <>
            <tr className="item">
                <td>
                    { !item.sold && <input type="checkbox" onChange={onChangeCheckBox} value={item.title} id={item._id} /> }
                </td> 
                <td className="name" onClick={() => moveToItemPage(item._id)}>
                    <img src={`${URL}/${item.images[0]}`} alt="img1" className="img" />
                    <span>{item.title}</span>
                </td>
                {toggleContentOnSoldStatus()}
                <td>
                    <button className="button del" onClick={() => clickToDelete(item._id)}>삭제</button>
                </td>
            </tr>
        </>
    )
}

export default TbodyWeb
