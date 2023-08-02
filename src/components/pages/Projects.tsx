import ProjectCard from "../ProjectCard.tsx";
import {ReactElement, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import projectsData from "../../data/projectsData.tsx";

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

    const projectCards: ReactElement[] = projectsData.map(project => <ProjectCard project={project}/>)

    return (
        <section className={'relative min-h-screen flex flex-col place-items-center p-5 mt-10 pt-1/10 lg:mt-0'}>
            <div className={'max-w-5xl'}>
                <div className={'mb-10'}>
                    <h2 className={'text-5xl font-bold text-lari-blue text-center lg:text-left'}>
                        Projects
                    </h2>
                    <div className={'flex gap-10 ml-1 mt-5 justify-center lg:justify-start'}>
                        {projectsRendered}
                    </div>
                </div>
                <AnimatePresence initial={false} mode={'wait'}>
                    <motion.div
                        key={page}
                        initial={{x: 50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: -50, opacity: 0}}
                        transition={{x: {type: "spring", stiffness: 300, damping: 30}, duration: 0.3}}
                        className={'flex'}
                    >
                        {projectCards[page]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}