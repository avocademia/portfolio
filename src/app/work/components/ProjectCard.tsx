'use client'

import { Icon } from '@iconify/react'
import { project } from '@/data/types'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import styles from './ProjectCard.module.scss'

interface prop {
  project: project
}



const ProjectCard = ({ project }: prop) => {
    const swiperRef = useRef<SwiperClass>()
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  }

  return (
    <article className={styles.projectCard}>
        <div className={styles.title}>
            <h1>{project.name}</h1>
            <h4>{project.role}</h4>
        </div>
        
        <div className={styles.images}>
            <div className={styles.navWrapper}>
                <div
                  className={`${styles.navButton} ${styles.prev}`}
                  aria-label="Previous"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <Icon icon="mdi:chevron-left" className={styles.navIcon} />
                </div>
                <div
                  className={`${styles.navButton} ${styles.next}`}
                  aria-label="Next"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <Icon icon="mdi:chevron-right" className={styles.navIcon} />
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                spaceBetween={10}
                slidesPerView="auto"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 2.5,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                centeredSlides={true}
                className={styles.swiper}
            >
                {project.photos.map((photo, index) => (
                    <SwiperSlide key={index} >
                        <Image src={photo} alt="project photo" width={700} height={300} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <button
            className={`${styles.toggleButton} ${isExpanded ? styles.expanded : ''}`}
            onClick={toggleExpand}
            >
            <Icon icon="ep:arrow-down-bold" height={30} width={30} />
        </button>

        <div className={`${styles.hiddenContent} ${isExpanded ? styles.visible : ''}`}>
            <p>{project.description}</p>
            <div>
                {project.key_features.map((feature, index) => (
                    <p key={index}>{feature}</p>
                ))}
            </div>
            <div>
                {project.stack.map((stack, index) => (
                <button key={index}>{stack}</button>
                ))}
            </div>
            <div>
                <Icon icon="mdi:github" width={20} height={20}/>:
                <a href={project.client}>client repository</a>
            </div>
            <div>
                <Icon icon="mdi:github" width={20} height={20} />:
                <a href={project.server}>server repository</a>
            </div>
            <div>
                Launch:
                <p>{project.launch_date}</p>
            </div>
            <div>
                <Icon icon="mdi:web" width={20} height={20} />:
                <p>{project.website}</p>
            </div>
        </div>
    </article>
  )
}

export default ProjectCard
