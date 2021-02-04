import React, { useState } from 'react';
import styled from 'styled-components';

function OnClickTitleToggleContent({ titleText, children, className }) {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleIsOpenStatus = () => {
        setIsOpen(!isOpen);
    }
    
    const titleColor = {
        color: isOpen ? "black" : "gray"
    }

    return (
        <div className={className}>
             <h2 className="title" onClick={toggleIsOpenStatus} style={titleColor}>
                {titleText}
                {!isOpen ? <small>click!</small> : null}
            </h2>
            {isOpen && children}
        </div>
    )
}

export default styled(OnClickTitleToggleContent)`
    & {
        .title {
            border-bottom: 1px solid lightgray;
            font-size: 20px;
            small {
                font-size: 10px;
                color: crimson;
                margin-left: 10px;
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
`;
