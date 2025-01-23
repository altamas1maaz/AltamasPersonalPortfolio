import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero3.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/MERN_STACK_ALTAMAS_Resume.pdf'
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {

  const {theme , toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark ;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img className={styles.hero} src={heroImg}  style={{backgroundColor:'#000000', borderRadius:"50%"}} alt="profile picture of Altamas" />
      <img className={styles.colorMode} src={themeIcon} alt="" onClick={toggleTheme} />
    </div>
    <div className={styles.info}>
      <h1>
       Mohammed <br /> Altamas
      </h1>
      <h2>Full-Stack Developer</h2>
      <span>
        <a href="https://x.com/ZainuMaaz" target='_blank'> 
        <img src={twitterIcon} alt="" />
        </a>
        <a href="https://github.com/altamas1maaz" target='_blank'> 
        <img src={githubIcon} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/mohammedaltamasmaaz" > 
        <img src={linkedinIcon} alt="" />
        </a>
      </span>
      <p className={styles.description}>I specialize in crafting user-friendly, scalable web applications using the MERN stack. Let's innovate together!</p>
      <a href={CV} download>
        <button className='hover'>Resume</button>
      </a>
    </div>
    </section>
  )
}

export default Hero