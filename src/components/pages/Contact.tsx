import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {slideHorizontal} from "../../variants/variants.ts";
import {motion, Variants} from "framer-motion";

export default function Contact() {

    const slideRight: Variants = slideHorizontal(-30)

    return (
        <section id={'contact'}
                 className={'min-h-screen p-10 relative flex flex-col justify-center place-items-center'}>
            <motion.div variants={slideRight} initial={'hidden'} whileInView={'show'} className={'max-w-5xl'}>
                <div className={'mb-10'}>
                    <motion.h2 variants={slideRight}
                               className={'text-5xl font-bold text-lari-blue mb-5 text-center lg:text-left'}>Let's chat
                    </motion.h2>
                    <motion.div variants={slideRight}>
                        <p className={'text-lari-blue text-center lg:text-left'}>Want to connect, have a chat about
                            software, my projects, coffee or simply the weather?</p>
                        <p className={'text-lari-blue text-center lg:text-left'}>Send me a message, and let's talk!</p>
                    </motion.div>
                </div>
                <div className={'flex gap-24 flex-col lg:flex-row'}>
                    <motion.form variants={slideRight}>
                        <div className={'flex flex-col gap-5 sm:flex-row min-w-full'}>
                            <label htmlFor={"name"}
                                   className={'flex flex-grow flex-col text-lari-gray text-sm font-bold'}>Name
                                <input
                                    className={'bg-lari-lighter-blue font-normal p-1.5 rounded-md border-2 border-lari-light-gray'}
                                    type={"text"} id={"name"} name={"name"}/>
                            </label>
                            <label htmlFor={"email"}
                                   className={'flex flex-grow flex-col text-lari-gray text-sm font-bold'}>Email
                                <input
                                    className={'bg-lari-lighter-blue font-normal p-1.5 rounded-md border-2 border-lari-light-gray'}
                                    type={"text"} id={"email"} name={"email"}/>
                            </label>
                        </div>
                        <label htmlFor={"message"}
                               className={'mt-5 flex flex-col text-lari-gray text-sm font-bold'}>
                            Message
                            <textarea
                                className={'bg-lari-lighter-blue font-normal p-1.5 rounded-md border-2 border-lari-light-gray'}
                                name={"message"} id={"message"} rows={10}></textarea>
                        </label>
                        <button
                            className={'py-2 px-10 mt-5 text-sm text-lari-gray bg-lari-light-gray font-bold rounded-md hover:bg-lari-light-blue transition-all ease-in-ou'}
                            type={'submit'}>Submit
                        </button>
                    </motion.form>
                    <motion.address variants={slideRight} className={'flex flex-col mt-4 gap-5 '}>
                        <div className={'hover:brightness-90 transition-all ease-in-out'}>
                            <FontAwesomeIcon icon={faEnvelope} size={'2xl'} className={'mr-5'} color={'#afaee3'}/>
                            <a href={''}
                               className={'text-lari-gray text-sm font-bold not-italic'}>larissaruecker7@gmail.com</a>
                        </div>
                        <div className={'hover:brightness-90 transition-all ease-in-out'}>
                            <FontAwesomeIcon icon={faGithub} size={'2xl'} className={'mr-5'} color={'#afaee3'}/>
                            <a href={''} className={'text-lari-gray text-sm font-bold not-italic'}>popoxta</a>
                        </div>
                        <div className={'hover:brightness-90 transition-all ease-in-out'}>
                            <FontAwesomeIcon icon={faLinkedin} size={'2xl'} className={'mr-5'} color={'#afaee3'}/>
                            <a href={''} className={'text-lari-gray text-sm font-bold not-italic'}>linkedIn</a>
                        </div>
                    </motion.address>
                </div>
                <motion.img src={'/small-cluster.svg'} variants={slideRight}
                            className={'absolute max-w-[8rem] -z-10 right-0 lg:-top-4 md:-top-20 sm:-top-[5rem] sm:max-w-[10rem] sm:flow-root hidden'}/>
            </motion.div>
        </section>
    )
}