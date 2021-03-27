import * as actions from "./constant";

const initialState = {
  init: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT:
      return {
        ...state,
        init: true,
      };
    default:
      return state;
  }
};
