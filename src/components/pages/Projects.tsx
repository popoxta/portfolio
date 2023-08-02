import ProjectCard from "../ProjectCard.tsx";
import {ReactElement, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import projectsData from "../../data/projectsData.tsx";
import {slideRightVariant, slideInOutVariant} from "../../variants/variants.ts";

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


    return (
        <section className={'relative min-h-screen flex flex-col place-items-center p-5 mt-10 pt-1/10 lg:mt-0'}>
            <motion.div
                variants={slideRightVariant}
                initial={'hidden'}
                animate={'show'}
                className={'max-w-5xl'}>
                <div className={'mb-10'}>
                    <motion.h2 variants={slideRightVariant}
                               className={'text-5xl font-bold text-lari-blue text-center lg:text-left'}>
                        Projects
                    </motion.h2>

                    <motion.div
                        variants={slideRightVariant}
                        className={'flex gap-5 ml-1 mt-5 justify-center sm:gap-10 lg:justify-start'}>
                        {projectsRendered}
                    </motion.div>
                </div>
                <motion.div>
                    <AnimatePresence initial={false} mode={'wait'}>
                        <motion.div
                            key={page}
                            variants={slideInOutVariant}
                            initial={'hidden'}
                            animate={'center'}
                            transition={{ease: 'anticipate', duration: 0.6}}
                        >
                            {projectCards[page]}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </section>
    )
}