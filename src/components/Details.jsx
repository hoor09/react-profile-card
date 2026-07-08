import React from 'react'

export const Details = (props) => {
  return (
    <div id="details">
    <h3> {props.name}</h3>
    <p><strong>Goal:</strong> {props.goal}</p>
    <p><strong>Email:</strong> {props.email}</p>
    <p><strong>Country:</strong> {props.country}</p>

     </div>
  )
}
export default Details;
