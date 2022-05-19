import { combineReducers } from 'redux'

import getAllProducts from './getAllProducts/reducers/getAllProducts.reducer'
import getComments from './getAllProducts/reducers/getComments.reducer';

const rootReducer = combineReducers({
    allProducts: getAllProducts,
    comments: getComments
})

export default rootReducer