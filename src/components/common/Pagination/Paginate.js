import React from 'react'
import styled from 'styled-components'
import Page from './Page'
import { Route } from 'react-router-dom'

const Paginate = ({ className, totalPages, currentPage, routePath }) => {
  return totalPages > 1 && (
    <div className={className}>
      {
        [...Array(totalPages).keys()].map(content => (
          <Route 
            key={content+1} 
            render={({ history }) => <Page history={history} content={content+1} currentPage={currentPage} routePath={routePath} />} 
          />
        ))
      }
    </div>
  )
}

export default styled(Paginate)`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: baseline;
`;
