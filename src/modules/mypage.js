const TOGGLE_OPEN_MANAGE_ACCOUNT = 'mypage/TOGGLE_OPEN_MANAGE_ACCOUNT';
const TOGGLE_OPEN_MANAGE_INQUIRIES = 'mypage/TOGGLE_OPEN_MANAGE_INQUIRIES';

export const updateOpenManageAccount = (payload) => ({
    type: TOGGLE_OPEN_MANAGE_ACCOUNT,
    payload
});

export const updateOpenManageInquiries = (payload) => ({
    type: TOGGLE_OPEN_MANAGE_INQUIRIES,
    payload
});


const initialState = {
    openManageAccount: false,
    openManageInquiries: false
}

function mypage(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_OPEN_MANAGE_ACCOUNT:
            return {
                ...state,
                openManageAccount: action.payload
            }
        case TOGGLE_OPEN_MANAGE_INQUIRIES:
            return {
                ...state,
                openManageInquiries: action.payload
            }
        default:
            return state;
    }
}

export default mypage;