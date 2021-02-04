import React from 'react'

function Header({ screenSize, clickToOrder }) {
    return (
        <>
        {
            screenSize < 768 ?
            <>
                <div className="title-container-mobile">
                    <h2>CART</h2>
                    <button className="button" onClick={clickToOrder}>주문하기</button>
                </div>
            </>
            :
            <>
                <h2>CART</h2>
                <div className="button-container">
                    <button className="button" onClick={clickToOrder}>주문하기</button>
                </div>
            </>
        }
        </>
    )
}

export default Header
