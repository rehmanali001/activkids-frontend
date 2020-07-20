export const initialState = {
    categories: []
};
export default function manageCategories(state = initialState, action) {
    switch (action.type) {
        case "ADD_CATEGORY_SUCCESS":
            return {
                ...state,
                categories: [...state.categories, action.category, action.ADD_CATEGORY_SUCCESS]
            };
        case "FETCH_CATEGORIES_SUCCESS":
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state;
    }
    }