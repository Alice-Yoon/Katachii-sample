const UPDATE_ORDERED_ITEMS = 'paymentInfo/UPDATE_ORDERED_ITEMS';
const UPDATE_USER_INFO = 'paymentInfo/UPDATE_USER_INFO';
const UPDATE_TOTAL_PRICE = 'paymentInfo/UPDATE_TOTAL_PRICE';
const UPDATE_DELIVERY_INFO = 'paymentInfo/UPDATE_DELIVERY_INFO';
const UPDATE_IS_DELIVERY_FAR = 'paymentInfo/UPDATE_IS_DELIVERY_FAR';
const UPDATE_NACKLACE_TYPE = 'paymentInfo/UPDATE_NACKLACE_TYPE';

export const updateOrderedItems = (payload) => ({
    type: UPDATE_ORDERED_ITEMS,
    payload
});

export const updateUserInfo = (payload) => ({
    type: UPDATE_USER_INFO,
    payload
})

export const updateTotalPrice = (payload) => ({
    type: UPDATE_TOTAL_PRICE,
    payload
})

// 주문시, 배송지 정보 업데이트
export const updateDeliveryInfo = (payload) => ({
    type: UPDATE_DELIVERY_INFO,
    payload
})

// 도서산간 배송지 여부
export const updateIsDeliveryFar = (payload) => ({
    type: UPDATE_IS_DELIVERY_FAR,
    payload
})

// 목걸이줄 
export const updateNecklaceType = (payload) => ({
    type: UPDATE_NACKLACE_TYPE,
    payload
})


const initialState = {
    orderedItems: [],
    userInfo: {
        username: '',
        email: '',
        addr: '',
        phone: ''
    },
    totalPrice: 0,
    deliveryInfo: {
        name: '',
        phone: '',
        address: '',
        detailedAddress: ''
    },
    isDeliveryFar: false,
    necklaceType: 0
}

function paymentInfo(state = initialState, action) {
    switch(action.type) {
        case UPDATE_ORDERED_ITEMS:
            return {
                ...state,
                orderedItems: action.payload
            }
        case UPDATE_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case UPDATE_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            }
        case UPDATE_DELIVERY_INFO:
            return {
                ...state,
                deliveryInfo: {
                    ...state.deliveryInfo,
                    [action.payload.name]: action.payload.value
                }
            }
        case UPDATE_IS_DELIVERY_FAR:
            return {
                ...state,
                isDeliveryFar: action.payload
            }
        case UPDATE_NACKLACE_TYPE:
            return {
                ...state,
                necklaceType: action.payload
            }
        default:
            return state;
    }
}

export default paymentInfo;