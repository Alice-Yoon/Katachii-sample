import React from 'react'
import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <p>대표 신나라</p>
      <p>서울특별시 강동구 성내로 83, 8층</p>
      <p>사업자등록번호 116-40-00790</p>
      <p>통신판매번호 ?</p>
      <p>Bank info. 신한 xxx-xxxx-xxxx 신나라</p>
      <p>Copyright &#169;	2021 KATACHII All rights reserved</p>
    </div>
  )
}

export default styled(Footer)`
  border-top: 1px solid lightgray;
  padding-bottom: 80px;
  padding-left: 20px;

  & {
    p {
      font-size: 10px;
      color: gray;
    }
  }
`;
