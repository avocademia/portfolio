'use client'

import { projects } from "@/data/projects"
import ProjectCard from "./components/ProjectCard"
import styles from './work.module.scss'

const work = () => {

  return (
    <main className={styles.main} >
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index}/>
      ))}
    </main>
  )
}
export default work