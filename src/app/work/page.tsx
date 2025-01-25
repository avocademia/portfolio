import { projects } from "@/data/projects"
import ProjectCard from "./components/ProjectCard"
import styles from './work.module.scss'

const work = () => {
  return (
    <main className={styles.main}>
      {projects.map((project) => (
        <ProjectCard project={project}/>
      ))}
    </main>
  )
}
export default work