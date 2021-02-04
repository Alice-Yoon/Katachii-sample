import React from 'react';
import styled from 'styled-components';

import nara_banner2 from '../../../../../asset/img/nara_banner2.png'

function HomeBanner(props) {
    return (
        <div className={props.className}>
            <img src={nara_banner2} alt="katachi_banner" className="banner-img" />
        </div>
    )
}

export default styled(HomeBanner)`
    font-family: 'Reenie Beanie', cursive;
    background-color: #EEEEEE;
    height: 1000px;
    position: relative;
    display: flex;
    justify-content: center;
    padding-bottom: 100px;

    & {
        .banner-img {
            height: 350px;
            width: 400px;
            position: sticky;
            top: 200px;
        }
    }
`;