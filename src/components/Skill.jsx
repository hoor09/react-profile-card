import React from 'react'

export const Skill = ({name,level,experience}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>Level:{level}</p>
        <p>Experience:{experience}</p>
    </div>
  )
}
export default Skill;