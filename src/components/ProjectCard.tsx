import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faFigma} from "@fortawesome/free-brands-svg-icons"
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {Project} from "../types/project.tsx";
import {ReactElement} from "react";

export default function ProjectCard({project}: { project: Project }) {

    const descriptions: ReactElement[] = project.description.split('.').map((sentence: string, i: number) =>
        <p key={i} className={'text-sm text-lari-blue'}>{sentence}</p>)

    return (
        <div className={'relative flex place-items-center w-9/10 mx-auto lg:max-w-none md:max-w-3xl '}>
            <div className={'absolute right-0 bg-lari-lighter-blue rounded-lg -z-10 w-full bottom-0 h-3/4 lg:h-full lg:w-9/10 '}>
            </div>
            <div
                className={'flex h-full min-h-[38rem] place-items-center flex-col lg:min-h-[25rem] lg:flex-row lg:gap-10'}>
                <img
                    className={'h-80 object-cover shrink-0 w-9/10 lg:w-96 rounded-lg'} alt={project.name}
                    src={project.image}
                />
                <div className={'relative flex flex-col gap-5 text-center pr-5 pl-5 py-5 lg:pl-0 lg:py-5 lg:text-left'}>
                    <h3 className={'text-3xl font-bold text-lari-blue lg:text-left'}>{project.name}</h3>
                    {descriptions}
                    <div className={'flex gap-5 place-items-center justify-center lg:justify-start'}>
                        {
                            project.links.github &&
                            <a href={project.links.github} className={'hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'2xl'} icon={faGithub} color={'#afaee3'}/>
                            </a>
                        }
                        {
                            project.links.figma &&
                            <a href={project.links.figma} className={'hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'xl'} icon={faFigma} color={'#afaee3'}/>
                            </a>
                        }
                        {
                            project.links.live &&
                            <a href={project.links.live} className={'hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'xl'} icon={faUpRightFromSquare} color={'#afaee3'}/>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}