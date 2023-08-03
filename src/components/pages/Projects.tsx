import ProjectCard from "../ProjectCard.tsx";
import {ReactElement, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import projectsData from "../../data/projectsData.tsx";
import {slideHorizontal} from "../../variants/variants.ts";

export default function Projects() {
    const [page, setPage] = useState(0)

    const projectsRendered: ReactElement[] = projectsData.map(({name}: { name: string }, index: number) => {
        return (
            <button key={name} className={`relative font-bold text-sm text-lari-blue ${page === index ? '' : ''}`}
                    onClick={() => selectProject(index)}>
                {name}
                {index === page &&
                    <motion.div className={'select-underline'} initial={false} layoutId={'underline'}/>}
            </button>
        )
    })

    const selectProject = (index: number): void => setPage(index)

    const projectCards: ReactElement[] = projectsData.map(project => <ProjectCard key={project.name}
                                                                                  project={project}/>)

    const slideRight = slideHorizontal(-60)

    return (
        <motion.section
            variants={slideRight}
            initial={'hidden'}
            whileInView={'show'}
            className={'min-h-screen flex flex-col place-items-center p-5 mt-10 pt-1/10 lg:mt-0'}>
            <div
                className={'max-w-5xl relative'}>
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
                        <motion.div
                            key={page}
                            variants={slideRight}
                            initial={'hidden'}
                            animate={'show'}
                        >
                            {projectCards[page]}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
                <motion.img src={'/star-cluster.svg'} variants={slideRight} className={'absolute max-w-[16rem] -right-16 -top-10'} />
            </div>
        </motion.section>
    )
}