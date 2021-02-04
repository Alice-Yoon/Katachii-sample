const TOGGLE_LOGIN_STATUS = 'login/TOGGLE_LOGIN_STATUS';
const UPDATE_USER_NAME = 'login/UPDATE_USER_NAME';
const TOGGLE_ADMIN_STATUS = 'login/TOGGLE_ADMIN_STATUS';

export const updateLoginStatus = (payload) => ({
    type: TOGGLE_LOGIN_STATUS,
    payload
});

export const updateUserName = (payload) => ({
    type: UPDATE_USER_NAME,
    payload
})

export const updateAdminStatus = (payload) => ({
    type: TOGGLE_ADMIN_STATUS,
    payload
})

const initialState = {
    isLogin: false,
    isAdmin: false,
    userName: ''
}

function login(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_LOGIN_STATUS:
            return {
                ...state,
                isLogin: action.payload
            }
        case UPDATE_USER_NAME:
            return {
                ...state,
                userName: action.payload
            }
        case TOGGLE_ADMIN_STATUS:
            return {
                ...state,
                isAdmin: action.payload
            }
        default:
            return state;
    }
}

export default login;