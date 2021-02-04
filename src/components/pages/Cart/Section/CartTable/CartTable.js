import React from 'react';
import { useSelector } from 'react-redux';
import Thead from './Section/Thead';
import TbodyMobile from './Section/TbodyMobile';
import TbodyWeb from './Section/TbodyWeb';

function CartTable({ itemList, onChangeCheckBox, moveToItemPage, clickToDelete  }) {
    const screenSize = useSelector(state => state.responsive.screenSize);

    return (
        <table>
            <thead>
                <Thead screenSize={screenSize} />
            </thead>
            <tbody>
            {
            !itemList || itemList.length === 0 ?
                <tr>
                    <td>카트에 담은 상품이 없습니다.</td>
                </tr>
            :
            itemList && itemList?.map(item => (
                screenSize < 768 ?
                    <TbodyMobile 
                        key={item._id}
                        item={item}
                        itemList={itemList} 
                        onChangeCheckBox={onChangeCheckBox} 
                        moveToItemPage={moveToItemPage} 
                        clickToDelete={clickToDelete} 
                    />
                :
                    <TbodyWeb 
                        key={item._id}
                        item={item}
                        onChangeCheckBox={onChangeCheckBox} 
                        moveToItemPage={moveToItemPage} 
                        clickToDelete={clickToDelete} 
                    />
            ))
            }  
            </tbody>
        </table>
    )
}

export default CartTable
