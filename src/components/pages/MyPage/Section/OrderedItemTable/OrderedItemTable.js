import React from 'react';
import styled from 'styled-components';

import Thead from './Section/Thead';
import Tbody from './Section/Tbody';

function OrderedItemTable({ className, screenSize, historyData }) {
    return (
        <div className={className}>
            <table>
                <thead>
                    <Thead screenSize={screenSize} />
                </thead>
                <tbody>
                {
                    !historyData || historyData?.length === 0 ?
                    <tr>
                        <td>아직 주문내역이 없습니다.</td>
                    </tr>
                :
                    historyData.map((data, index) => <Tbody key={index} data={data} screenSize={screenSize} />).reverse()
                }
                </tbody>
            </table>
        </div>
    )
}

export default styled(OrderedItemTable)`
    /* border: 1px solid red; */
    height: 70vh;
    width: 80vw;
    margin: 0 auto;
    overflow: auto;

    & {
        table {
            /* border: 1px solid blue; */
            border-collapse: collapse;
            background-color: #fff;
            width: 100%;
            margin: 0 auto;
            margin-bottom: 100px;
            position: relative;
            tr, td, th {
                /* border-bottom: 1px dotted lightgray; */
                padding: 10px;
                text-align: center;
            }
            thead {
                th {
                    position: sticky;
                    top: 0;
                    background-color: #eeeeee;
                    color: #43464b;
                }
            }
        }
    }
`;
