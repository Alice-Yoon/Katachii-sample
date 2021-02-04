import React from 'react';
import styled from 'styled-components';

function ManageInquiries({ className, toggleOpenManageInquiries }) {

    const closeModal = (e) => {
        if (e.target.id === 'close') {
            toggleOpenManageInquiries(false);
        }
    }

    return (
        <div className={className} onClick={closeModal} id="close">
            <div className="container">
                <h2>1:1 문의는 인스타그램 DM으로 문의 부탁드립니다</h2>
                <p><strong>@katachii__</strong></p>
            </div>
        </div>
    )
}

export default styled(ManageInquiries)`
    
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & {
        .container {
            border-radius: 10px;
            box-shadow: 0 3px 5px rgba(0,0,0,0.3);
            background-color: #fff;
            width: 50%;
            height: 25%;
            padding: 30px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h2 {
                font-size: 15px;
            }
        }
    }

    @media (max-width: 768px) {
        .container {
            width: 90%
        }
    }
`;
