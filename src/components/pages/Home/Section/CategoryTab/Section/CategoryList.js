import React from 'react';
import styled from 'styled-components';

function CategoryList({ className, categories, currentTab, switchCategory, underlineCurrentTab }) {
    return (
        <ul className={className}>
            {categories && categories.map(list => (
                <li 
                    className="list" 
                    key={list.id} 
                    style={currentTab === list.id ? {color: 'black', fontSize: '18px'} : null}
                    onClick={() => {
                        switchCategory(list.id);
                        underlineCurrentTab(list.id);
                    }}
                >
                    {list.title}
                </li>
            ))}
        </ul>
    )
}

export default styled(CategoryList)`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: start;
    
    & {
        .list {
            list-style: none;
            margin: 0;
            padding: 10px;
            color: gray;
            &:hover {
                cursor: pointer;
                color: black;
            }
        }
    }
`;
