import './App.css'
import Contact from './Sections/Contact/Contact'
import Footer from './Sections/Footer/Footer'
import Hero from './Sections/Hero/Hero'

import Project from './Sections/projects/Project'
import Skills from './Sections/Skills/Skills'
import Navbar from './Sections/Navbar/Navbar'
import Education from './Sections/Education/Education'
import Workexperience from './Sections/Work experience/Workexperience'

function App() {
  

  return (
    <>
      <Navbar/>
    <div className='mainDiv'>
    <Hero/>
    <Education/>
    <Project/>
    <Skills/>
    <Workexperience/>
    <Contact/>
    <Footer/>
    </div>
   </>
  )
}

export default App
