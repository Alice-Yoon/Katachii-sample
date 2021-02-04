import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Slider from '../../../../common/Slider/Slider';
import Description from './Section/Description';

function ProductDescription(props) {
    const { title, description, price, images } = props.itemData;
    const { imageLength, isSoldOut } = props;
    
    const screenSize = useSelector(state => state.responsive.screenSize);

    const switchOrdersOnChangeScreenSize = () => {
        return (
            screenSize < 768 ?
            <>
                <div className="photo">
                    <Slider images={images} imageLength={imageLength} />
                </div>
                <Description title={title} description={description} price={price} isSoldOut={isSoldOut} />
            </>
            :
            <>
                <Description title={title} description={description} price={price} isSoldOut={isSoldOut} />
                <div className="photo">
                    <Slider images={images} imageLength={imageLength} />
                </div>
            </>
        )
    }

    return (
        <div className={props.className}>
            {switchOrdersOnChangeScreenSize()}
        </div>
    )
}

export default styled(ProductDescription)`
    background-color: #EEEEEE;
    height: 80vh;
    padding: 50px 20px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
   
    & {
        .photo {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width: 768px) {
            display: block;
            height: 100vh;
    }
`;