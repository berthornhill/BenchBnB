import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const _NULL_STATE = {
  id: null,
};

const sessionReducer = (state = _NULL_STATE, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return _NULL_STATE;
    default:
      return state;
  }
};

export default sessionReducer;

// session: {
//     id: 1
//   },
