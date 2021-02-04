import React from 'react';
import styled from 'styled-components';
import { priceFormatter } from '../../../../../../utils/priceFormatter';

function Description({ className, title, description, price, isSoldOut }) {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <p>
                {description}
                <br/>
                : when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            {isSoldOut ? <span className="sold-out">SOLD OUT</span> : <span className="price">₩ {priceFormatter(price)}</span>}
        </div>
    )
}

export default styled(Description)`
    margin-right: 15px;
    margin-left: 25px;
    padding: 15px;

    & {            
        .price {
            color: gray;
        }
        .sold-out {
            color: red;
        }
    }

    @media (max-width: 768px) {
        text-align: center;
    }

`;
