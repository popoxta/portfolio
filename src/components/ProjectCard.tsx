import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faFigma} from "@fortawesome/free-brands-svg-icons"
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard() {
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
                <div className={'flex h-full py-10 pr-2 flex-col gap-5 justify-between text-center sm:text-left'}>
                    <h3 className={'text-3xl font-bold text-lari-blue sm:text-left'}>Project</h3>
                    <p className={'text-lari-blue'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et minima non odit? Ab eos ex
                        inventore necessitatibus, nemo nisi!
                    </p>
                    <div className={'flex gap-5 place-items-center justify-center sm:justify-start'}>
                        <FontAwesomeIcon size={'2xl'} icon={faGithub} color={'#9D9CE6'}/>
                        <FontAwesomeIcon size={'xl'} icon={faFigma} color={'#9D9CE6'}/>
                        <FontAwesomeIcon size={'xl'} icon={faUpRightFromSquare} color={'#9D9CE6'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}