import {
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_IN_PROGRESS,
  LOAD_PRODUCTS_SUCCESS,
} from "./actions";



const initialState = {isLoading: false, data: []};


export const products = (state = initialState, action) => { 
    const {type, payload } = action;
    switch (type) {
        case LOAD_PRODUCTS_SUCCESS:
            const {products} = payload;
            return {...state, isLoadin: false, data: products}
        case LOAD_PRODUCTS_IN_PROGRESS:
            return {...state, isLoading: true};
        case LOAD_PRODUCTS_FAILURE:
            return { ...state, isLoading: false };
        default:
            return state;
    }
}