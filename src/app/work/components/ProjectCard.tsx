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

  console.log(project.stack)

  return (
    <article className={styles.projectCard}>
        <div className={styles.title}>
            <h1>{project.name}</h1>
            <h4>{project.role}</h4>
        </div>
        
        <div className={styles.images}>
            <div className={styles.navWrapper}>
                <div
                  className={`${styles.navButton}`}
                  aria-label="Previous"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <Icon icon="mdi:chevron-left" className={styles.navIcon} />
                </div>
                <div
                  className={`${styles.navButton}`}
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
                        <Image src={photo} alt="project photo" width={700} height={300} unoptimized/>
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
            <div className={styles.features}>
                <h4>Key features:</h4>
                <ol>
                   {project.key_features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                    ))}  
                </ol>
                
            </div>
            <div className={styles.stack} >
                {project.stack.map((stack, index) => (
                    <button 
                        key={index} 
                        className={`
                            ${stack === 'React'? styles.react : ''}
                            ${stack === 'Next'? styles.next : ''}
                            ${stack === 'Strapi'? styles.strapi : ''}
                            ${stack === 'Express'? styles.express : ''}
                            ${stack === 'MySql'? styles.mysql : ''}
                        `    
                        }
                    >
                        <Icon 
                            icon={`
                                ${stack === 'React'? "akar-icons:react-fill": ''}
                                ${stack === 'Next'? "teenyicons:nextjs-outline": ''}
                                ${stack === 'Strapi'? "logos:strapi-icon": ''}
                                ${stack === 'Express'? "lineicons:expressjs": ''}
                                ${stack === 'MySql'? "fontisto:mysql": ''}
                            `}  
                        />
                        { stack === "React" && <Icon icon="akar-icons:react-fill"/>}
                        { stack === "Next" && <Icon icon="teenyicons:nextjs-outline"/>}
                        { stack === "Strapi" && <Icon icon="logos:strapi-icon"/>}
                        { stack === "Express" && <Icon icon="lineicons:expressjs"/>}
                        { stack === "MySql" && <Icon icon="fontisto:mysql"/>}
                        {stack}
                    </button>
                ))}
            </div>
            <div className={styles.repositories}>
                <div>
                    <Icon icon="mdi:github" width={20} height={20}/>:
                    <a href={project.client} target='_blank'>client repository</a>
                </div>
                <div>
                    <Icon icon="mdi:github" width={20} height={20} />:
                    <a href={project.server} target='_blank'>server repository</a>
                </div>
            </div>
            <div className={styles.launch}>
                <h6>Launch:</h6>
                <p>{project.launch_date}</p>
            </div>
            {project.launched && <div>
                <Icon icon="mdi:web" width={20} height={20} />:
                <a href={project.website} target='_blank'>{project.website}</a>
            </div>}
        </div>
    </article>
  )
}

export default ProjectCard
