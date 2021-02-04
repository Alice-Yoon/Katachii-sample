import React from 'react'
import styled from 'styled-components'
import { terms } from '../../../common_data/terms';
import { privacy } from '../../../common_data/privacy';

const TermsConditions = ({ className, closeTerms }) => {
  return (
    <div className={className}>
      <div className='terms-container'>
        <small>이용약관 동의</small>
        <div className='terms'>
          <p>{terms}</p>
        </div>

        <small>개인정보 수집 및 이용</small>
        <div className='terms'>
          <p>{privacy}</p>
        </div>

        <div className='agree'>
          <span>이용약관, 개인정보 수집 및 이용에 모두 동의합니다. <small style={{color: 'crimson'}}>(필수)</small></span>
          <button className='agree-btn' onClick={closeTerms}>모두 동의</button>
        </div>
      </div>
    </div>
  )
}

export default styled(TermsConditions)`
  /* border: 1px solid red; */
  background-color: rgba(0,0,0,0.3);

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  & {
    .terms-container {
      background-color: #fff;
      width: 60%;
      height: 75%;
      padding: 15px;
      overflow: auto;
    }
    .terms {
      border: 1px solid gray;
      height: 180px;
      padding: 20px;
      overflow: auto;
      margin-bottom: 10px;
    }
    .agree {
      display: flex;
      align-items: center;
    }
    .agree-btn {
      padding: 5px;
      margin-left: 10px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .terms-container {
      width: 90%;
      height: 75%;
      padding: 20px;
    }
    .agree {
      margin-top: 40px;
    }
  }
`;
