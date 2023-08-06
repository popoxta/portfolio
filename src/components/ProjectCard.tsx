import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faFigma} from "@fortawesome/free-brands-svg-icons"
import {faUpRightFromSquare, faCertificate} from "@fortawesome/free-solid-svg-icons";
import {Project} from "../types/project.tsx";
import {ReactElement} from "react";

export default function ProjectCard({project}: { project: Project }) {

    const descriptions: ReactElement[] = project.description.split('.').map((sentence: string, i: number) =>
        <p key={i} className={'text-sm text-lari-blue'}>{sentence}</p>)

    return (
        <div className={'relative flex place-items-center w-9/10 mx-auto lg:max-w-none md:max-w-3xl mb-10'}>
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
                            <a href={project.links.github} target={'_blank'} className={'text-lari-purple hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'2xl'} icon={faGithub}/>
                            </a>
                        }
                        {
                            project.links.figma &&
                            <a href={project.links.figma} target={'_blank'} className={'text-lari-purple hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'xl'} icon={faFigma}/>
                            </a>
                        }
                        {
                            project.links.live &&
                            <a href={project.links.live} target={'_blank'} className={'text-lari-purple hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'xl'} icon={faUpRightFromSquare}/>
                            </a>
                        }
                        {
                            project.links.testimonial &&
                            <a href={`public/${project.links.testimonial}`} target={'_blank'} className={'text-lari-purple hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'xl'} icon={faCertificate}/>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
