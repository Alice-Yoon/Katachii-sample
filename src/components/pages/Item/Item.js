import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ProductAPI from '../../../api/product';

import ProductDescription from './Section/ProductDescription/ProductDescription';
import PurchaseInfo from './Section/PurchaseInfo/PurchaseInfo';
import Notice from './Section/Notice/Notice';


function Item({ className, history, cookie, match}) {

    const [productData, setProductData] = useState({});
    const [imageLength, setImageLength] = useState(3);
    const [isSoldOut, setIsSoldOut] = useState(false);

    const productId = match.params.productId;

    useEffect(() => {
        window.scrollTo(0,0);

        ProductAPI.getProductById(productId).then(res => {
            setProductData(res?.data.product);
            setImageLength(res?.data.product.images.length);
            setIsSoldOut(res?.data.product.sold);
        })
    }, []);

    return (
        <div className={className}>
            <div className="top">
                <ProductDescription 
                    itemData={productData} 
                    imageLength={imageLength} 
                    isSoldOut={isSoldOut}
                />
            </div>
            <div className="bottom">
                <PurchaseInfo 
                    className="payment" 
                    history={history} 
                    itemPrice={productData.price} 
                    productId={productId}
                    isSoldOut={isSoldOut}
                    cookie={cookie}
                />
                <Notice className="warning" />
            </div>
        </div>
    )
}

export default styled(Item)`

    margin-bottom: 100px;

    & {
        .top {
            /* border: 1px solid red; */
            display: flex;
            margin-bottom: 20px;
        }
        .bottom {
            /* border: 1px solid blue; */
            width: 60%;
            margin: 0 auto;
        }
    }

    @media (max-width: 768px) {
        /* border: 2px solid aqua; */
        width: 100%;
        .bottom {
            width: 90%;
        }
    }

`;