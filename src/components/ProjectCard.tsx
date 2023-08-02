import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faFigma} from "@fortawesome/free-brands-svg-icons"
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {Project} from "../types/project.tsx";

export default function ProjectCard({project}: { project: Project }) {

    const descriptions = project.description.split('.').map(sentence =>
        <p className={'text-sm '}>{sentence}</p>)

    return (
        <div className={'relative flex place-items-center w-9/10 mx-auto lg:max-w-none md:max-w-3xl '}>
            <div
                className={'absolute opacity-30 right-0 bg-lari-light-blue -z-10 w-full bottom-0 h-3/4 lg:h-full lg:w-9/10 '}>
            </div>
            <div
                className={'flex h-full min-h-[38rem] place-items-center flex-col lg:min-h-[25rem] lg:flex-row lg:gap-10'}>
                <img
                    className={'h-80 object-cover shrink-0 w-9/10 lg:w-96 '}
                    src="https://images.unsplash.com/photo-1690228835779-8482c60093bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt={''}
                />
                <div className={'flex flex-col gap-5 text-center pr-5 pl-5 py-5 lg:pl-0 lg:py-5 lg:text-left'}>
                    <h3 className={'text-3xl font-bold text-lari-blue lg:text-left'}>{project.name}</h3>
                    {descriptions}
                    <div className={'flex gap-5 place-items-center justify-center lg:justify-start'}>
                        {
                            project.links.github &&
                            <a href={project.links.github} className={'hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'2xl'} icon={faGithub} color={'#9D9CE6'}/>
                            </a>
                        }
                        {
                            project.links.figma &&
                            <a href={project.links.figma} className={'hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'xl'} icon={faFigma} color={'#9D9CE6'}/>
                            </a>
                        }
                        {
                            project.links.live &&
                            <a href={project.links.live} className={'hover:brightness-90 transition-all'}>
                                <FontAwesomeIcon size={'xl'} icon={faUpRightFromSquare} color={'#9D9CE6'}/>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}