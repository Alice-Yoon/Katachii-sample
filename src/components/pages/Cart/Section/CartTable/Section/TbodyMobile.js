import React from 'react';
import { URL } from '../../../../../../utils/url';
import { priceFormatter } from '../../../../../../utils/priceFormatter';
import { normalDeliveryFee } from '../../../../../../common_data/deliveryPrice'

function TbodyMobile({ item, onChangeCheckBox, moveToItemPage, clickToDelete }) {

    const toggleContentOnSoldStatus = () => {
        return (
                item?.sold ? 
                    <tr>
                        <td colSpan="2" className="sold-out">
                            <small>-- SOLD OUT --</small>
                        </td>
                    </tr>
                :
                <>
                    <tr className="priceArea">
                        <td>
                            <small><span className="miniTitle">상품가격: </span></small>
                        </td>
                        <td>
                            <small>{priceFormatter(item.price)}원</small>
                        </td>
                    </tr>
                    <tr className="priceArea">
                        <td>
                            <small><span className="miniTitle">배송: </span></small>
                        </td>   
                        <td>
                            <small>택배</small>
                        </td>                                     
                    </tr>
                    <tr className="priceArea">
                        <td>
                            <small><span className="miniTitle">배송비: </span></small>
                        </td>   
                        <td>
                            <small>{priceFormatter(normalDeliveryFee)}원</small>
                        </td>                                     
                    </tr>
                </> 
        )
    }

    return (
        <>
            <tr className="checkbox-border">
                <td colSpan="2">
                    {!item.sold && <input type="checkbox" onChange={onChangeCheckBox} value={item.title} id={item._id} />}
                </td>
            </tr>
            <tr className="itemArea">
                <td className="name" onClick={() => moveToItemPage(item._id)}>
                    <img src={`${URL}/${item.images[0]}`} alt={`img-${item.id}`} className="img" />
                    {item.title}
                </td>
                <td>
                    <small>1개</small>
                </td>
            </tr>
            {toggleContentOnSoldStatus()}
            <tr>
                <td colSpan="2">
                    <button className="button del" onClick={() => clickToDelete(item._id)}>삭제</button>
                </td>
            </tr>
        </>
    )
}

export default TbodyMobile
