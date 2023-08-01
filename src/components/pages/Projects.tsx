import ProjectCard from "../ProjectCard.tsx";

export default function Projects() {
    const projectNames: string[] = ['name 1', 'name 2', 'name 3', 'name 4']

    const projectNamesRendered = projectNames.map(proj => {
        return (
            <h3 key={proj} className={'font-bold text-sm text-lari-blue'}>
                {proj}
            </h3>
        )
    })

    return (
        <section className={'relative min-h-screen flex flex-col justify-center place-items-center p-5 mt-10 sm:mt-0'}>
            <div className={'max-w-5xl'}>
                <div className={'mb-10'}>
                    <h2 className={'text-5xl font-bold text-lari-blue text-center sm:text-left'}>
                        Projects
                    </h2>
                    <div className={'bg-lari-light-blue h-0.5 w-96 -mt-1 -z-10'}></div>
                    <div className={'flex gap-10 mt-5 ml-1'}>
                        {projectNamesRendered}
                    </div>
                </div>
                <ProjectCard/>
            </div>
        </section>
    )
}