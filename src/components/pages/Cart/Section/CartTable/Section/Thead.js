import React from 'react';
import { cartTableHeadMenu } from '../../../data/cartTableHeadMenu';

function Thead({ screenSize }) {

    return (
        <tr>
            {screenSize < 768 ?
                <th colSpan="2">Items</th>
            :
                cartTableHeadMenu && cartTableHeadMenu.map(menu => (
                    <th key={menu.id}>{menu.title}</th>
                ))
            }
        </tr>
    )
}

export default Thead
