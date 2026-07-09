import React from 'react'

export const Skills = () => {
  const skills=[
  {
    id:1,
    name:"HTML"
  },
  {
    id:2,
    name:"CSS"
  },
  {
    id:3,
    name:"JavaScript"
  },
  {
    id:4,
    name:"React"
  },
   {
    id:5,
    name:"Node.js"
  },
   {
    id:6,
    name:"MongoDB"
  }
  ];
  return (
    <div>
      {skills.map((skill)=>{
        return <p key={skill.id}>{skill.name}</p>;
      })}
    </div>
  )
}
export default Skills;
