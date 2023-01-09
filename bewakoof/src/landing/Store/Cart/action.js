
import React from 'react'

export const myaction=(payload,dispatch)=>{
  dispatch({
      type:"ADD TO CART",
      payload
  })
  }
  
  export const visiting=(payload,dispatch)=>{
    dispatch({
        type:"VISIT",
        payload
    })
    }
    export const remove=(payload,dispatch)=>{
      dispatch({
          type:"REMOVE",
          payload
      })
      }
    