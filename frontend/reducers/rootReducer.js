import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import entitiesReducer from "./entitiesReducer";
import sessionReducer from "./session_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;

// {
//     entities: {
//       users: {}
//     },
//     session: {
//       id: null,
//     },
//     errors: {
//       session: ["Invalid credentials"]
//     }
//   }
