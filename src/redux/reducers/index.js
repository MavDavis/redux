import { combineReducers} from 'redux'
import { productsReducer, selectedProduct } from './productsReducers' 
const reducers = combineReducers({
    allProducts:productsReducer,
    product : selectedProduct
})
export default reducers