import Skill from "./Skill"

export const Skills = () => {
  const skills=[
  {
    id:1,
    name:"HTML",
    level:"🟢Advance",
    experience: "3 years"
  },
  {
    id:2,
    name:"CSS",
    level:"🟢Advance",
experience: "3 years"
  },
  {
    id:3,
    name:"JavaScript",
    level:"🟢Advance",
    experience: "3 years"
  },
  {
    id:4,
    name:"React",
    level:"🟡Beginner",
    experience: "1 years"
  },
   {
    id:5,
    name:"Node.js",
    level:"🟠Intermediate",
    experience: "2 years"
  },
   {
    id:6,
    name:"MongoDB",
    level:"🟠Intermediate",
    experience: "2 years"
  }
  ];
  const removeSkill=(name)=>{
     alert(`Removing ${name}`);
  }
  return (
    <div>
      {skills.map((skill)=>{
        return (
        <Skill
        key={skill.id}
        name={skill.name}
        level={skill.level}
        experience={skill.experience}
        removeSkill={removeSkill}
        />
        );
      })}
    </div>
  )
}
export default Skills;
