import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { URL } from '../../../../../../utils/url';

const GalleryPhoto = ({ className, onClickPhoto, imgLink }) => {
    return (
        <div 
            className={className} 
            onClick={onClickPhoto}
        >
            <LazyLoadImage 
                effect='blur'
                src={`${URL}/${imgLink}`} 
                alt={`productImg-${imgLink}`} 
            />
        </div>
    )
}

export default styled(GalleryPhoto)`
    margin-bottom: 20px;

    & {
        &:hover {
            cursor: pointer;
        }
        img {
            height: 100%;
            width: 100%;
        }
    }
`;