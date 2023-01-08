
  const initialState = {
    cart: [],
    visited:[]
  };
  
  export const CartReducer = (state = initialState, { type, payload }) => {
    if(type==="ADD TO CART"){
      return {...state,cart: {...payload}}
    }
    else if(type==="VISIT"){
      return {...state,visited: {...payload}}
    }
    return state
    
  };