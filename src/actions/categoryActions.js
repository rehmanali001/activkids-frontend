export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_ERROR = "ADD_CATEGORY_ERROR";
export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";

export function loadCategories() {
  return function(dispatch) {
    dispatch({ type: FETCH_CATEGORIES_START });
    fetch("/categories")
      .then(resp => resp.json())
        .then(categories => {
        dispatch({
          type: FETCH_CATEGORIES_SUCCESS,
          categories
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_CATEGORIES_ERROR,
          error
        });
      });
  };
}

export function addCategory(category) {
  return function(dispatch) {
    const body = JSON.stringify({ category });
    const headers = {
      "Content-Type": "application/json"
    };
    fetch("/categories", { method: "POST", body, headers })
      .then(resp => resp.json())
      .then(category => {
        dispatch(addCategorySuccess(category));
      })
      .catch(error => {
        dispatch(addCategoryError(error));
      });
  };
}

export function addCategorySuccess(category) {
  return {
    type: ADD_CATEGORY_SUCCESS,
    category
  };
}
export function addCategoryError(error) {
  return {
    type: ADD_CATEGORY_ERROR,
    error
  };
}
export function fetchCategoriesPending() {
  return {
    type: FETCH_CATEGORIES_START
  };
}
export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  };
}