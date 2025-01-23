import React from 'react'
import styles from './ProjectStyles.module.css'
import portfolio from '../../assets/projectPortfolio.png'
import tekiskyMart from '../../assets/tekiskyMart.png'
import ProjectsCard from '../../common/ProjectsCard'
import hipsster from '../../assets/megaProject.jpg'
import fitLift from '../../assets/fitlift.png'


const Project = () => {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectsCard src={portfolio} h3="Portfolio" p="PersonalPortfolion" link='https://google.com' codeLink="https://github.com/altamas1maaz/AltamasPersonalPortfolio"/>
       <ProjectsCard src={tekiskyMart} h3="Tekisky Mart" p="Buy & Sell Platform"  link="https://tekiskymart.com/" codeLink="https://github.com/altamas1maaz"/>
       <ProjectsCard src={hipsster} h3="Mega Project" p="Glasses Shop" link="./ProjectMsg.html" codeLink="https://github.com/altamas1maaz"/>
       <ProjectsCard src={fitLift} h3="FitLift" p="Fitness App" link="./ProjectMsg.html" codeLink="https://github.com/altamas1maaz"/>
    
      </div>
    </section>
  
  )
}

export default Project