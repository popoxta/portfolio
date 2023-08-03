import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
    return (
        <section className={'min-h-screen pt-1/10 p-5 relative flex flex-col justify-center place-items-center'}>
            <div className={'max-w-5xl'}>
                <div className={'mb-10'}>
                <h2 className={'text-5xl font-bold text-lari-blue mb-5 text-center lg:text-left'}>Let's chat</h2>
                <p className={'text-lari-blue text-center lg:text-left'}>Want to connect, have a chat about software, my projects, coffee or
                    simply the weather?</p>
                <p className={'text-lari-blue text-center lg:text-left'}>Send me a message and let's talk!</p>
                </div>
                <div className={'flex gap-14 flex-col lg:flex-row'}>
                    <form >
                        <div className={'flex flex-col gap-5 sm:flex-row'}>
                            <label htmlFor={"name"} className={'flex flex-col text-lari-gray text-sm font-bold'}>Name
                                <input
                                    className={'bg-lari-lighter-blue font-normal p-1.5 rounded-md border-2 border-lari-light-blue'}
                                    type={"text"} id={"name"} name={"name"}/>
                            </label>

                            <label htmlFor={"email"} className={'flex flex-col text-lari-gray text-sm font-bold'}>Email
                                <input
                                    className={'bg-lari-lighter-blue font-normal p-1.5 rounded-md border-2 border-lari-light-blue'}
                                    type={"text"} id={"email"} name={"email"}/>
                            </label>
                        </div>
                        <label htmlFor={"message"} className={'mt-5 flex flex-col text-lari-gray text-sm font-bold'}>
                            Message
                            <textarea
                                className={'bg-lari-lighter-blue font-normal p-1.5 rounded-md border-2 border-lari-light-blue'}
                                name={"message"} id={"message"} rows={10} ></textarea>
                        </label>
                        <button type={'submit'}>Submit</button>
                    </form>
                    <address className={'flex flex-col mt-4 gap-5'}>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} size={'2xl'}
                                             className={'hover:brightness-90 transition-all mr-5'} color={'#afaee3'}/>
                            <a href={''} className={'text-lari-gray text-sm font-bold not-italic'}>larissaruecker7@gmail.com</a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGithub} size={'2xl'}
                                             className={'hover:brightness-90 transition-all mr-5'} color={'#afaee3'}/>
                            <a href={''} className={'text-lari-gray text-sm font-bold not-italic'}>popoxta</a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} size={'2xl'}
                                             className={'hover:brightness-90 transition-all mr-5'} color={'#afaee3'}/>
                            <a href={''} className={'text-lari-gray text-sm font-bold not-italic'}>linkedIn</a>
                        </div>
                    </address>
                </div>
            </div>
        </section>
    )
}