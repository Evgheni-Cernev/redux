import Api from '../../../Api/Api';

export const getComments = () => {
    return async dispatch => {
        const res = await Api.getComments();
        await dispatch({ type: "GET_ALL_COMMENTS", payload: res });
    };
};
