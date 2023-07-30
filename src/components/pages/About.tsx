import {useInView, motion} from "framer-motion";
import React, {useRef} from "react";

export default function About() {
    const starsRef: React.MutableRefObject<null> = useRef(null)
    const starsInView: boolean = useInView(starsRef, {amount: 'all'})

    const starStyle: string = starsInView ? '' : '-translate-y-full'

    return (
        <section className={'relative min-h-screen flex justify-center place-items-center p-5 mt-10 sm:mt-0'}>
            <img src={'../../../hanging-stars.svg'} alt={'Stars hanging from the ceiling'}
                 className={`max-h-96 absolute top-0 right-1/10 -z-10 invisible lg:visible ${starStyle} transition-all ease-in-out delay-300 duration-500`}
            />

            <div className={'flex max-w-5xl gap-12 justify-center place-items-center flex-col sm:flex-row'}>
                <motion.div className={'h-64 sm:w-80 sm:h-xxl w-full'}
                            initial={{opacity: 0, y: '-60px'}}
                            whileInView={{opacity: 1, y: '0', transition: {ease: 'anticipate', duration: 0.8}}}>
                    <img className={'rounded-full w-full h-full object-cover'}
                         src="https://images.unsplash.com/photo-1690228835779-8482c60093bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                         alt=""/>
                </motion.div>

                <article ref={starsRef}>
                    <motion.div
                        initial={{opacity: 0, x: '-60px'}}
                        whileInView={{opacity: 1, x: '0', transition: {ease: 'anticipate', duration: 0.8}}}>
                        <h2 className={'text-5xl font-bold mb-10 text-lari-blue text-center sm:text-left'}>It's nice to
                            meet you.</h2>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: '-60px'}}
                        whileInView={{opacity: 1, x: '0', transition: {ease: 'anticipate', duration: 1}}}>
                        <p className={'tracking-wide mb-5 text-center text-lari-blue sm:text-left'}>
                            My name’s Lari, and I am a creative artist and software developer based in Aotearoa New
                            Zealand, currently seeking junior roles or freelance opportunities.
                        </p>
                        <p className={'tracking-wide mb-5 text-center text-lari-blue sm:text-left'}>
                            I enjoy building memorable, fun and meaningful projects, and have a strong focus on making
                            all things simple, as they should be.
                        </p>
                        <p className={'tracking-wide mb-5 text-center text-lari-blue sm:text-left'}>
                            My day-to day sees a wide range of technology, however my main tools of trade are
                            Typescript, React, Tailwind, Node and MongoDB.
                        </p>
                        <p className={'tracking-wide mb-5 text-center text-lari-blue sm:text-left'}>
                            When not programming, you may find me listening to 80’s rock, making a good family Raclette
                            and taking anyone I can convince to go on a 5 hour walk. Probably longer.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: '-60px'}}
                        whileInView={{opacity: 1, x: '0', transition: {ease: 'anticipate', duration: 1.2}}}>
                        <p className={'tracking-wide text-sm text-center text-lari-blue sm:text-left'}>
                            Want to chat or grab a coffee?
                        </p>

                        <p className={'tracking-wide text-sm text-center text-lari-blue sm:text-left'}>
                            Feel free to <a href="#contact">get in touch.</a>
                        </p>
                    </motion.div>
                </article>
            </div>
        </section>
    )
}