import * as actions from "./constant";

export const init = (payload) => (dispatch) => {
  dispatch({
    type: actions.INIT,
    payload,
  });
};
