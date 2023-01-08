import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Authreducer } from "./Auth/auth.reducer";


const rootReducer = combineReducers({
 
  auth: Authreducer,
 
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
