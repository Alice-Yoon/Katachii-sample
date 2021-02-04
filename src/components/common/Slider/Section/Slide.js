import React from 'react';
import styled from 'styled-components';

function Slide(props) {

    const { img } = props;

    return (
        <img src={img} alt="slide-img" className={props.className} />
    )
}

export default styled(Slide)`
    /* border: 1px solid red; */
    width: 100%;
    height: 70vh;

    @media (max-width: 768px) {
        /* border: 1px solid blue; */
        width: 100%;
        height: 100%;
    }
`;
