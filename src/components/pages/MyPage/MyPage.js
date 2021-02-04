import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { updateOpenManageInquiries } from '../../../modules/mypage';

import ManageInquiries from './Section/ManageInquiries/ManageInquiries';
import MyAPI from '../../../api/my';
import UserAPI from '../../../api/user';
import Header from './Section/Header/Header';
import OrderedItemTable from './Section/OrderedItemTable/OrderedItemTable';
import Modal from '../../common/Modal/Modal';

function My(props) {
    const screenSize = useSelector(state => state.responsive.screenSize);
    const openManageInquiries = useSelector(state => state.mypage.openManageInquiries);

    const dispatch = useDispatch();
    const toggleOpenManageInquiries = (payload) => dispatch(updateOpenManageInquiries(payload));

    const [historyData, setHistoryData] = useState([]);
    const [modal, setModal] = useState(false);

    const [cookies, _, removeCookie] = useCookies(['x_auth']);

    useEffect(() => {
        window.scrollTo(0,0);
        MyAPI.getHistoryItems(props.cookie).then(res => setHistoryData(res.data.historyInfo));
    }, [])

    const manageInquiries = () => {
        // 1:1 문의
        toggleOpenManageInquiries(true);
    }

    // 회원탈퇴
    const manageDeleteAccount = () => {
        setModal(true)
    }

    const onClickYes = () => {
        UserAPI.deleteAccount(props.cookie).then(res => {
            setModal(false);
            props.history.push('/')
            removeCookie("x_auth");
        })
    }

    const onClickNo = () => {
        setModal(false);
    }

    return (
        <div className={props.className}>
            <Header screenSize={screenSize} manageInquiries={manageInquiries} deleteAccount={manageDeleteAccount} />
            <OrderedItemTable screenSize={screenSize} historyData={historyData} />
            {openManageInquiries && 
                <ManageInquiries toggleOpenManageInquiries={toggleOpenManageInquiries} />
            }
            {modal && 
                <Modal 
                    modalText="정말 회원탈퇴를 진행하시겠습니까?"
                    leftBtnText="네, 탈퇴합니다"
                    onClickLeftBtn={onClickYes} 
                    rightBtnText="아니요"
                    onClickRightBtn={onClickNo} 
                />
            }
        </div>
    )
}

export default styled(My)`
    background-color: lightgray;
    padding: 30px;
    height: 100vh;
    & {
        h2 {
            color: #43464b;
            text-align: center;
        }
        h3 {
            /* border: 1px solid red; */
            margin-top: 50px;
            margin-bottom: 30px;
            padding-left: 30px;
            color: #43464b;
        }
        .list-menu {
            /* border: 1px solid blue; */
            text-align: end;
            padding-right: 15px;
            li {
                list-style: none;
                margin-bottom: 10px;
                & span {
                    border-bottom: 1.5px dotted grey;
                    cursor: pointer;
                    padding: 0 5px;
                    font-size: 0.8rem;
                    &:first-of-type {
                        /* border-right: 1.5px dotted grey; */
                    }
                    &:hover {
                        color: crimson;
                        border-bottom: 1.5px dotted crimson;
                    }
                }
            }
        }
    }
`;

// import ManageAccount from './Section/ManageAccount';
// const openManageAccount = useSelector(state => state.mypage.openManageAccount);
// const toggleOpenManageAccount = (payload) => dispatch(updateOpenManageAccount(payload));
// const manageAccount = () => {
//     // 계정관리
//     toggleOpenManageAccount(true);
// }