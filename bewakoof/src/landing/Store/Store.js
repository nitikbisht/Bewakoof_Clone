import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Authreducer } from "./Auth/auth.reducer";
import { CartReducer } from "./Cart/Cart.reducer";


const rootReducer = combineReducers({
  
  auth: Authreducer,
  cart: CartReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));