import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotFound = ({className}) => {
  return (
    <div className={className}>
      <div className='container'>
        <h1>404 Not Found</h1>
        <p>"존재하지 않는 페이지 입니다."</p>
        <Link to='/'>홈으로 이동</Link>
      </div>
    </div>
  )
}

export default styled(NotFound)`
  display: flex;
  justify-content: center;
  
  & {
    .container {
      margin-top: 100px;
      text-align: center;
    }
  }
`;
