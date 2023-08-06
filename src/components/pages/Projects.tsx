import ProjectCard from "../ProjectCard.tsx";
import {ReactElement, useState} from "react";
import {AnimatePresence, motion, Variants} from "framer-motion";
import projectsData from "../../data/projectsData.tsx";
import {slideDownVariant, slideHorizontal} from "../../variants/variants.ts";
import {Project} from "../../types/project.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
    const [page, setPage] = useState(0)

    const projectsRendered: ReactElement[] = projectsData.map(({name}: { name: string }, index: number) => {
        return (
            <button key={name}
                    className={`hover:text-lari-gray transition-all ease-in-out duration-300 relative font-bold text-sm text-lari-blue ${page === index ? '' : ''}`}
                    onClick={() => selectProject(index)}>{name}
                {index === page && <motion.div className={'select-underline'} initial={false} layoutId={'underline'}/>}
            </button>
        )
    })

    const selectProject = (index: number): void => setPage(index)

    const projectCards: ReactElement[] = projectsData.map((project: Project) =>
        <ProjectCard key={project.name} project={project}/>)

    const slideRight: Variants = slideHorizontal(-60)
    const slideDown: Variants = slideDownVariant(-60)

    return (
        <section id={'projects'}
                 className={'relative min-h-screen flex flex-col place-items-center p-10 mt-10 pb-20 lg:pb-10  lg:mt-0'}>
            <motion.div variants={slideRight} initial={'hidden'} whileInView={'show'} viewport={{once: true}}
                        className={'max-w-5xl mt-[6%] relative'}>
                <div className={'mb-10'}>
                    <motion.h2 variants={slideRight}
                               className={'text-5xl font-bold text-lari-blue text-center lg:text-left'}>
                        Projects
                    </motion.h2>
                    <motion.div
                        variants={slideRight}
                        className={'flex gap-5 ml-1 mt-5 justify-center sm:gap-10 lg:justify-start'}>
                        {projectsRendered}
                    </motion.div>
                </div>
                <motion.div variants={slideRight}>
                    <AnimatePresence initial={false} mode={'wait'}>
                        <motion.div key={page} variants={slideRight} initial={'hidden'} animate={'show'}>
                            {projectCards[page]}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
                <motion.img src={'/star-cluster.svg'} variants={slideRight}
                            className={'absolute max-w-[13rem] sm:max-w-[16rem] -z-10 -right-0 -top-24 md:-top-16 lg:-right-16 lg:-top-10'}/>
            </motion.div>
            <motion.div variants={slideDown} initial={'hidden'} whileInView={'show'} viewport={{once: true}}
                        className={'bottom-10 absolute hidden sm:inline-block'}>
                <a href={'#contact'}>
                    <FontAwesomeIcon icon={faChevronDown} size={'2xl'}
                                     className={'text-lari-purple hover:text-lari-light-blue transition-all ease-in-out duration-300'}/>
                </a>
            </motion.div>
        </section>
    )
}