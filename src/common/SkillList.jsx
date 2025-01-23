import React from 'react'


const SkillList = ({src,p}) => {
  return (
    <span>
      <img src={src} alt="" />
       <p>{p}</p>
    </span>
  )
}

export default SkillList