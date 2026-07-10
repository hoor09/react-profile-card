import React from 'react'

export const Skill = ({name,level,experience,removeSkill}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>Level:{level}</p>
        <p>Experience:{experience}</p>
        <button onClick={()=>removeSkill(name)}>Remove Skill</button>
    </div>
  )
}
export default Skill;