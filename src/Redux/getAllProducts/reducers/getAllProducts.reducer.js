const initialState = {
    data: []
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default countReducer;