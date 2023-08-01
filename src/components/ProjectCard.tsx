import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faFigma} from "@fortawesome/free-brands-svg-icons"
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {Project} from "../types/project.tsx";

export default function ProjectCard({project}: { project: Project }) {

    const descriptions = project.description.split('.').map((sentence, i) =>
        <p className={i > 0 ? 'mt-3' : ''}>{sentence}</p>)
    return (
        <div className={'relative flex place-items-center w-9/10 mx-auto sm:min-h-[24rem]'}>
            <div
                className={'absolute opacity-30 right-0 bg-lari-light-blue -z-10 w-full bottom-0 h-3/4 sm:h-full sm:w-9/10 '}>
            </div>
            <div className={'flex h-full place-items-center flex-col sm:flex-row sm:gap-10'}>
                <img
                    className={'h-80 object-cover shrink-0 w-9/10 sm:w-96 '}
                    src="https://images.unsplash.com/photo-1690228835779-8482c60093bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt={''}
                />
                <div className={'flex py-10 pr-5 flex-col gap-5 text-center sm:text-left'}>
                    <h3 className={'text-3xl font-bold text-lari-blue sm:text-left'}>{project.name}</h3>
                    <p className={'text-lari-blue'}>
                        {descriptions}
                    </p>
                    <div className={'flex gap-5 place-items-center justify-center sm:justify-start'}>
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