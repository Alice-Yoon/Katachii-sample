import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryList from './Section/CategoryList';
import categories from '../../data/categories';

function CategoryTab({ className, switchCategory}) {

    const [ showTab, setShowTab ] = useState(false);
    const [ currentTab, setCurrentTab ] = useState(0);

    const toggleShowTab = () => {
        setShowTab(!showTab);
    }
    
    const underlineCurrentTab = (listTitle) => {
        setCurrentTab(listTitle);
    }

    return (
        <div className={className}>
            <span className="title" onClick={toggleShowTab}>Category</span>
            {showTab ? null : <small className="small">-click!</small>}
            {showTab && 
                <CategoryList 
                    categories={categories}
                    currentTab={currentTab}
                    switchCategory={switchCategory}
                    underlineCurrentTab={underlineCurrentTab}
                />
            }
        </div>
    )
}

export default styled(CategoryTab)`
    /* border: 1px solid red; */
    padding: 10px;
    padding-top: 30px;
    padding-left: 50px;
    text-align: left;

    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 100;

    & {
        .title {
            font-weight: bold;
            &:hover {
                cursor: pointer;
            }
        }
        .small {
            margin-left: 10px;
            font-size: 8px;
            font-weight: bold;
            color: tomato;
        }
    }
`;
