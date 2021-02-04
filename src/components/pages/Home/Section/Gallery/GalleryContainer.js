import React from 'react';
import styled from 'styled-components';
import GalleryPhoto from './Section/GalleryPhoto';

function GalleryContainer({ className, galleryData, history }) {
    return (
        <div className={className}>
            {
            !galleryData || galleryData.length === 0 ?
                <p>준비중인 항목입니다!</p>
            :
            galleryData && galleryData?.map(img => (
                <GalleryPhoto 
                    key={img._id} 
                    imgLink={img.images[0]} 
                    onClickPhoto={() => history.push(`/products/${img._id}`)}
                />
                ))
            }
        </div>
    )
}

export default styled(GalleryContainer)`
    width: 80%;
    margin: 0 auto;
    padding-bottom: 100px;
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;

    & {
        p {
            color: gray;
        }
    }
            
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
