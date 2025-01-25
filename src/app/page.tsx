import Image from "next/image";
import styles from "./landing.module.scss"
import {Icon} from '@iconify/react'
import 'swiper/css'
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.page}>
        <section>
          <Image
          className={styles.profile}
          src="/next.svg"
          alt="profile picture"
          width={180}
          height={180}
          priority
         />

         <h1>Jotham Jami Ogeya</h1>
         <h3>Software Developer</h3>
        </section>

        <section className={styles.action}>
          <Link href='/work'>
            <button className={styles.pageBtn}>work</button>
          </Link>
          
          <button className={styles.pageBtn}>profile</button>
          <div className={styles.external}>
            <button className={styles.upworkBtn}>
              <Icon icon="simple-icons:upwork" width={30} height={30} className={styles.upworkIcon}/>
            </button>
            <button className={styles.githubBtn}>
              <Icon icon="mdi:github" width={40} height={40} className={styles.githubIcon}/>
            </button>
          </div>
        </section>
    </main>
  );
}
