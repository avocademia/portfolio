'use client'

import Image from "next/image";
import styles from "./landing.module.scss"
import {Icon} from '@iconify/react'
import 'swiper/css'
import Link from "next/link"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import {motion} from 'framer-motion'

export default function Home() {
  const [typeEffect] = useTypewriter({
    words: ['UI/UI Designer', 'Software Developer'],
    typeSpeed: 100,
    deleteSpeed: 40,
    loop: true,
  })

  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }

  const divVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const buttonVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  }

  return (
    <main className={styles.page}>
        <motion.section initial={{scale: 0}} animate={{scale: 1}} transition={transition}  className={styles.dp}>
          <Image
            className={styles.profile}
            src="/dev.jpeg"
            alt="profile picture"
            width={180}
            height={180}
            priority
          />
        </motion.section>
        <section className={styles.info}>
          <h1>Jotham Jami Ogeya</h1>
          <h3>
            {typeEffect}
            <Cursor/>
          </h3>
        </section>

        <section className={styles.action}>
          <motion.div variants={divVariants} initial='hidden' animate='show' className={styles.internal}>
            <Link href='/work'>
              <motion.button variants={buttonVariants} className={styles.pageBtn}>work</motion.button>
            </Link>    
            <Link href='/profile'>
              <motion.button variants={buttonVariants} className={styles.pageBtn}>profile</motion.button>
            </Link>
          </motion.div>
          <div className={styles.external}>
            <a href="https://www.linkedin.com/in/jotham-jami-705353187/" target="__blank">
              <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={transition}  className={styles.linkedin}>
                <Icon icon="mdi:linkedin" width={30} height={30} className={styles.linkedinIcon}/>
              </motion.button>
            </a>
            <a href="https://www.upwork.com/freelancers/~01b3277a379c95e007?mp_source=share" target="__blank">
              <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={transition}   className={styles.upworkBtn}>
                <Icon icon="simple-icons:upwork" width={30} height={30} className={styles.upworkIcon}/>
              </motion.button>
            </a>
            <a href="https://github.com/avocademia" target="__blank">
              <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={transition}   className={styles.githubBtn}>
                <Icon icon="mdi:github" width={40} height={40} className={styles.githubIcon}/>
              </motion.button>
            </a>
          </div>
        </section>
    </main>
  );
}
