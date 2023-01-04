import React from 'react'
import { useParams } from 'react-router-dom'

function Productdescription() {
    const {id}=useParams()
    console.log(id)
  return (
    <div>Productdescription {id}</div>
  )
}

export default Productdescription