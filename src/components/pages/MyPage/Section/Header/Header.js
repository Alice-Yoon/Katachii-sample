import React from 'react'

function Header({ screenSize, manageInquiries, deleteAccount }) {
    return (
        <>
            <h2>MY PAGE</h2>
            <div className="list-menu">
                <ul>
                    <li><span onClick={manageInquiries}>1:1문의</span></li>
                    <li><span onClick={deleteAccount}>회원탈퇴</span></li>
                </ul>
            </div>
            <h3>
                {screenSize > 768 && '[ 주문내역 ]'}
            </h3>
        </>
    )
}

export default Header;

// <span onClick={manageAccount}>계정관리</span>
