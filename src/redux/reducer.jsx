import { ACTIONS } from "./actions";

const initialState = {
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return {
        products: [...action.payload],
      };
    case ACTIONS.SEARCH:
      const filterData = state.products.filter((item) =>
        item.title.toLowerCase().trim().includes(action.payload)
      );
      return {
        products: filterData,
      };
    default:
      return state;
  }
};
