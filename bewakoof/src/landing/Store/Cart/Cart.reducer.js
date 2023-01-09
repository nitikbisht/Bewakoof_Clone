
  const initialState = {
    cart: [],
    visited:[]
  };
  
  export const CartReducer = (state = initialState, { type, payload }) => {
    if(type==="ADD TO CART"){
      return {...state,cart:[...state.cart,payload]}
    }
    else if(type==="VISIT"){
      return {...state,visited:[...state.visited,payload]}
    }
    else if(type==="REMOVE"){
      console.log(state.cart[payload])
      return {...state,cart:[...state.cart,state.cart.splice(payload,1)]}
    }
    return state
    
  };