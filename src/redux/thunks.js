import {
  loadProductsSuccess,
  loadProductsFailure,
  loadProductsInProgress,
} from "./actions";
import carService from '../services/carService' 

export const displayAlert = (text) => {
  alert(text);
};

export const loadProducts = () => async (dispatch, getState) => {
  try {
    dispatch(loadProductsInProgress());
    const response = await fetch("http://localhost:8090/cars-delay");
    const products = await response.json();
    products?.images.map(img => { 
    })
    dispatch(loadProductsSuccess(products));
  } catch (error) {
    dispatch(loadProductsFailure());
    dispatch(displayAlert(error));
  }
};
