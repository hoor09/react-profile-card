import React from 'react'

export const Skills = (props) => {
  return (
    <div>
        <p><b>Skills:</b></p>
        <p>{props.skill1}</p>
        <p>{props.skill2}</p>
        <p>{props.skill3}</p>
    </div>
  )
}
export default Skills;
