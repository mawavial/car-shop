export const LOAD_PRODUCTS_IN_PROGRESS = "LOAD_PRODUCTS_IN_PROGRESS";
export const loadProductsInProgress = () => ({
  type: LOAD_PRODUCTS_IN_PROGRESS,
});

export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
export const loadProductsSuccess = (products) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload: { products },
});

export const LOAD_PRODUCTS_FAILURE = "LOAD_PRODUCTS_FAILURE";
export const loadProductsFailure = () => ({
  type: LOAD_PRODUCTS_FAILURE,
});