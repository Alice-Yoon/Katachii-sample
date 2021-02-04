import React from 'react';
import styled from 'styled-components';

const Page = ({className, history, content, currentPage, routePath}) => {

  const onClickChangePage = () => {
    history.push(`${routePath}/${content}`)
  }

  return (
    <div 
      className={className} 
      onClick={onClickChangePage} 
      style={Number(currentPage) === content ? { backgroundColor: '#000', color: '#fff' } : {}}
    >
      {content}
    </div>
  )
}

export default styled(Page)`
  height: 20px;
  width: 20px;
  margin: 0 5px;
  margin-top: 15px;
  text-align: center;
  color: gray;
  cursor: pointer;
`;
