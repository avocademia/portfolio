"use client";

import { AnimatePresence } from "framer-motion"; // Fixed import
import { motion } from "framer-motion"; // Fixed import
import { useState } from "react";
import styles from './profile.module.scss';
import { Icon } from "@iconify/react";
import Image from "next/image";

const profile = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'ExpressJs',
    'Strapi',
    'MySql',
    'unit testing',
    'e2e testing',
    'Figma',
    'Illustrator'
  ]
  const learning = [
    'Python',
    'Algorithms',
    'TensorFlow',
    'React Native'
  ]
  const interests = [
    'Physics',
    ' AI',    
    'LLMs',
    'Digital Art',
    'Painting'
  ]
  const tabs = [
    {  label: "skills", list: skills},
    {  label: "learning", list: learning},
    { label: "interests", list: interests },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].label);

  const selectedIngredient = tabs.find(
    (tab) => tab.label === selectedTab
  )

  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }


  return (
    <main className={styles.page}>
      <div className={styles.info}>
        <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={transition} className={styles.photo}>
          <Image 
            className={styles.profile} 
            src="/dev.jpeg" 
            alt="profile picture"
            width={180}
            height={180}
            priority
          />
        </motion.div>
        <h1>Jotham Jami Ogeya</h1>
        <motion.p initial={{opacity: 0}} animate={{opacity: 1}}>
          I’ve been fascinated by computers from a young age, which led me to pursue a degree in Applied Computer 
          Science. Unfortunately, due to financial strain and other unavoidable circumstances, I couldn’t continue after 
          my first year. I embraced the self-taught route, dedicating my time and resources to building a strong foundation 
          in software development and honing my skills through hands-on learning and real-world projects.
        </motion.p>
      </div>
      <div className={styles.container}>
          <nav className={styles.nav}>
            {tabs.map((item) => (
              <motion.button
                key={item.label}
                initial={false}
                animate={{
                  backgroundColor: item.label === selectedTab ? "#69fc86" : "transparent",
                }}
                onClick={() => setSelectedTab(item.label)}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        <section className={styles.buttonContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab || "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles.list}
            >
              {selectedIngredient && selectedIngredient.list.map((item, index) => (
                <button key={index}>{item}</button>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
      <div className={styles.external}>
        <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={transition}  className={styles.linkedin}>
          <Icon icon="mdi:phone" width={30} height={30} className={styles.icon}/>
        </motion.button>
        <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={transition}  className={styles.linkedin}>
          <Icon icon="mdi:whatsapp" width={30} height={30} className={styles.icon}/>
        </motion.button>
        <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={transition}  className={styles.linkedin}>
          <Icon icon="mdi:linkedin" width={30} height={30} className={styles.icon}/>
        </motion.button>
        <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={transition}   className={styles.upworkBtn}>
          <Icon icon="simple-icons:upwork" width={30} height={30} className={styles.icon}/>
        </motion.button>
        <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={transition}   className={styles.githubBtn}>
          <Icon icon="mdi:github" width={30} height={30} className={styles.icon}/>
        </motion.button>
        <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={transition}  className={styles.linkedin}>
          <Icon icon="mdi:instagram" width={30} height={30} className={styles.icon}/>
        </motion.button>
      </div>
    </main>
  )
}

export default profile
