import React from 'react'
import styles from './SkillsStyles.module.css'
import Html from '../../assets/skills/HTML5.png'
import css from '../../assets/skills/CSS3.png'
import js from '../../assets/skills/JavaScript.png'
import react from '../../assets/skills/React.png'
import redux from '../../assets/skills/Redux.png'
import node from '../../assets/skills/nodejs.png'
import expressJS from '../../assets/skills/Express.png' 
import tailwind from '../../assets/skills/Tailwind CSS.png'
import mongoDb from '../../assets/skills/mongodb-icon-2.svg'
import Canva from '../../assets/skills/canva-png.png'
import reactBoot from '../../assets/skills/React Bootstrap.png'
import saas from '../../assets/skills/Sass.png'
import reactNative from '../../assets/skills/reactNative.png'
import linux from '../../assets/skills/Linux.png'
import aws from '../../assets/skills/AWS.png'
import autocad from '../../assets/skills/autocad.png'
import SkillList from '../../common/SkillList'

const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
         <SkillList src={Html} p="html"/>
         <SkillList src={css} p="css"/>
         <SkillList src={js} p="javascript"/>
         <SkillList src={node} p="NodeJs"/>
         </div>
        <hr />
        <div className={styles.skillList}>
        <SkillList src={react} p="react"/>
        <SkillList src={redux} p="Redux"/>
        <SkillList src={expressJS} p="Expressjs"/>
        <SkillList src={mongoDb} p="MongoDb"/>
        </div>
        <hr />
        <div className={styles.skillList}>
        <SkillList src={tailwind} p="TailwindCss"/>
        <SkillList src={Canva} p="Canva"/>
        <SkillList src={reactBoot} p="React-Bootstrap"/>
        <SkillList src={saas} p="SaasCss"/>
        </div>
        <hr />
        <h3>Learing:</h3>
        <div className={styles.skillList}>
        <SkillList src={reactNative} p="React-Native"/>
        <SkillList src={linux} p="Linux"/>
        <SkillList src={aws} p="AWS"/>
        <SkillList src={autocad} p="AutoCAD"/>
        </div>

      
        
    </section>
  )
}

export default Skills;