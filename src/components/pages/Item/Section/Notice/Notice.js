import React from 'react';
import styled from 'styled-components';
import OnClickTitleToggleContent from '../../../../common/Containers/OnClickTitleToggleContent';

function Notice(props) {
    return (
        <div className={props.className}>
            <OnClickTitleToggleContent titleText="주의사항">
                <div className="desc">
                    <p>
                        <strong>-상품 주의사항-</strong>

                        <br/><br/>
                        
                        * 모든 유리는 하나뿐 이며 직접 하나하나 형태를 다듬는 수작업 을 통해 만들어집니다.<br/><br/>

                        * 유리에 생기는 기포, 스크래치는 불량이 아닌 자연스러운 현상입니다.<br/><br/>

                        * 유리특성상 강한 충격이 가해지면 깨질수 있으니 주의부탁드립니다.<br/><br/>

                        <strong>-교환 및 반품-</strong>

                        <br/><br/>
                    
                        * 단순 변심으로 교환/환불 불가하니 신중하게 고민 후 구매결정 부탁드립니다. <br/>
                        ( 배송 중 파손되어 수령하셨다면 24시간 이내 @katachii__ 로 연락을 남겨주세요 ) <br/><br/>
                        
                        * A/S 는 유리가 깨진경우에서는 불가능하며 "목걸이 끊어짐"에 한해서만 가능합니다. <br/>
                        ( 무상1회 가능하며 왕복 배송비는 본인 부담입니다. )<br/><br/>
                    </p>
                </div>
            </OnClickTitleToggleContent>
        </div>
    )
}

export default styled(Notice)`

    & {
        .desc {
            border: 1px dotted lightgray;
            padding: 0 50px;
            margin: 30px 0;
            color: gray;
        }
    }
`;