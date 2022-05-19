const initialState = {
    comments: []
}


const getComments = (state = initialState, action) => {
    // {type: "GET_ALL_COMMENTS", payload: "resp"}
    switch (action.type) {
        case "GET_ALL_COMMENTS":
            return { ...state, comments: action.payload }
        default:
            return state
    }
}

export default getComments;