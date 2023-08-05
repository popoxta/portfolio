import {useInView, motion, Variants} from "framer-motion";
import React, {useRef} from "react";
import {slideDownVariant, slideHorizontal} from "../../variants/variants.ts";

export default function About() {
    const starsRef: React.MutableRefObject<null> = useRef(null)
    const starsInView: boolean = useInView(starsRef, {amount: 'all'})

    const starStyle: string = starsInView ? '' : '-translate-y-full'

    const slideRight: Variants = slideHorizontal(-30)
    const slideDown: Variants = slideDownVariant(-60)

    return (
        <section id={'about'}
                 className={'relative min-h-screen flex justify-center place-items-center p-10 mt-10 pb-20 lg:pb-10 sm:mt-0'}>
            <img src={'../../../hanging-stars.svg'} alt={'Stars hanging from the ceiling'}
                 className={`max-h-96 absolute top-0 right-1/10 -z-10 invisible lg:visible ${starStyle} transition-all ease-in-out delay-300 duration-500`}/>

            <div
                className={'flex max-w-5xl gap-12 justify-center place-items-center flex-col sm:flex-row'}>
                <motion.div className={'h-80 min-w-[14rem] sm:w-[26rem] sm:h-xxl w-full'} variants={slideDown}
                            initial={'hidden'}
                            whileInView={'show'}>
                    <img className={'rounded-full w-full h-full object-cover sm:object-[40%] bg-blend-screen'}
                         src="/lari.png"
                         alt=""/>
                </motion.div>

                <motion.article variants={slideRight} initial={'hidden'} whileInView={'show'} ref={starsRef}>
                    <motion.div variants={slideRight}>
                        <h2 className={'text-5xl font-bold mb-10 text-lari-blue text-center sm:text-left'}>It's nice to
                            meet you.</h2>
                    </motion.div>
                    <motion.div variants={slideRight}>
                        <p className={'tracking-wide mb-5 text-center text-lari-blue sm:text-left'}>
                            Hello, I'm Lari! I am a creative artist and software developer based in Aotearoa New
                            Zealand, currently seeking junior developer or QA roles and freelance opportunities.
                        </p>
                        <p className={'tracking-wide mb-5 text-center text-lari-blue sm:text-left'}>
                            I enjoy building memorable, fun and meaningful projects, and have a strong focus on making
                            all things beautifully simple with a focus on semantics, readability and good design.
                        </p>
                        <p className={'tracking-wide mb-5 text-center text-lari-blue sm:text-left'}>
                            My day-to day sees a wide range of technology, however my
                            main tools of trade are Typescript, React, Tailwind, Node, MongoDB and SQL.
                        </p>
                        <p className={'tracking-wide mb-5 text-center text-lari-blue sm:text-left'}>
                            When not programming, you may find me listening to timeless 80’s rock, perfecting my
                            Raclette and coaxing others to go on legendary 5 hour walk. <span className={'italic'}>Probably longer.</span>
                        </p>
                    </motion.div>
                    <motion.div variants={slideRight}>
                        <p className={'tracking-wide text-sm text-center text-lari-blue sm:text-left'}>
                            Curious to learn more or share a coffee?
                        </p>
                        <p className={'tracking-wide text-sm text-center text-lari-blue sm:text-left'}>
                            Feel free to
                            <a className={'font-bold text-lari-gray hover:text-lari-purple transition-all ease-in-out duration-300'}
                               href="#contact"> get in touch.</a>
                        </p>
                    </motion.div>
                </motion.article>
            </div>
        </section>
    )
}