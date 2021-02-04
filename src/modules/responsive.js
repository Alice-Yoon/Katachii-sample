const UPDATE_SCREEN_SIZE = 'responsive/UPDATE_SCREEN_SIZE';


export const updateScreenSize = (payload) => ({
    type: UPDATE_SCREEN_SIZE,
    payload
});

const initialState = {
    screenSize: window.innerWidth,
}

function responsive(state = initialState, action) {
    switch(action.type) {
        case UPDATE_SCREEN_SIZE:
            return {
                ...state,
                screenSize: action.payload
            }
        default:
            return state;
    }
}

export default responsive;