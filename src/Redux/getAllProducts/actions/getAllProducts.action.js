import Api from '../../../Api/Api';
import GET_ALL_PRODUCTS from '../../../Redux/action.types';

export const getAllProducts = () => {
  return async dispatch => {
    const res = await Api.getProducts()
    dispatch({ type: GET_ALL_PRODUCTS, payload: res })
  }
};

export const decrement = () => {
  return async dispatch => {
    await setTimeout(() => {
      dispatch({ type: "DEC" });
    }, 3000);
  };
};