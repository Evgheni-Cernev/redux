const countReducer = (count = 0, action) => {
    console.log(action)
    switch (action.type) {
        case "INC":
            return count + 1;
        case "DEC":
            return count - 1;
        default:
            return count;
    }
};

export default countReducer;
