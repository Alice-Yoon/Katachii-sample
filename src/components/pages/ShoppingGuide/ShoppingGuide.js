import React, {useEffect} from 'react';
import styled from 'styled-components';

function ShoppingGuide(props) {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className={props.className}>
            <h2>Shopping Guide</h2>
            <div className="contents">
                <h3>-주문안내-</h3>
                <p>
                    * 입금은 주문한 다음날 낮 12시까지 해주셔야 하며, 기한을 넘길 시 자동 취소됩니다.<br/><br/>

                    * 현재는 "무통장입금"만 가능하며 입금자명과 실제 입금자의 성명이 일치해야 합니다.<br/><br/>

                    * 기본 배송비는 3000원 이며 8만원 이상 구매 시 무료배송입니다.  ( 도서산간지역, 제주도는 2000원이 추가됩니다. )<br/><br/>
                    
                </p>



                <h3>-주의사항-</h3>
                <p>
                    * 모든 유리는 하나뿐 이며 직접 하나하나 형태를 다듬는 수작업 을 통해 만들어집니다.<br/><br/>

                    * 유리에 생기는 기포, 스크래치는 불량이 아닌 자연스러운 현상입니다.<br/><br/>

                    * 유리특성상 강한 충격이 가해지면 깨질수 있으니 주의부탁드립니다.<br/><br/>
                </p>



                <h3>-교환 및 반품-</h3>
                <p>
                    * 단순 변심으로 교환/환불 불가하니 신중하게 고민 후 구매결정 부탁드립니다. <br/>
                    ( 배송 중 파손되어 수령하셨다면 24시간 이내 @katachii__ 로 연락을 남겨주세요 ) <br/><br/>
                    
                    * A/S 는 유리가 깨진경우에서는 불가능하며 "목걸이 끊어짐"에 한해서만 가능합니다. <br/>
                    ( 무상1회 가능하며 왕복 배송비는 본인 부담입니다. )<br/><br/>
                </p>
            </div>
        </div>
    )
}

export default styled(ShoppingGuide)`
    /* border: 1px solid red; */
    background-color: #eeeeee;
    height: 100vh;
    padding-top: 20px;
    padding-bottom: 60px;
    & {
        h2 {
            text-align: center;
        }
        .contents {
            background-color: #fff;
            border: 1px solid lightgray;
            width: 70%;
            margin: 0 auto;
            padding: 10px 20px;
            overflow: auto;
            h3 {
                font-size: 15px;
            }
        }
    }

    @media (max-width: 768px) {
        height: 100%;
        .contents {
            height: 100%;
        }
    }
`;