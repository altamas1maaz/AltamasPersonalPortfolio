import React from 'react'
import styles from '../Sections/projects/ProjectStyles.module.css'

const ProjectsCard = ({src, link,h3, p, codeLink}) => {
  return (
    <a  href={link} target='_blank'>
      <img className='hover' src={src} alt={`${h3} logo`} />
            <h3>{h3}</h3>
            <p>{p}</p>
            <p className={styles.githubL} ><a href={codeLink}>Code</a></p>
    </a>
      
  )
}
export default ProjectsCard;