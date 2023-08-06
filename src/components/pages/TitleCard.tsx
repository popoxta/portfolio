import Particles from 'react-tsparticles';
import {Engine} from 'tsparticles-engine'
import {loadFull} from 'tsparticles';
import {motion, Variants} from "framer-motion";
import {slideDownVariant, slideHorizontal} from "../../variants/variants.ts";

export default function TitleCard() {

    const particlesInit = async (main: Engine): Promise<void> => await loadFull(main)

    const slideRight: Variants = slideHorizontal(-50)
    const slideDown: Variants = slideDownVariant(-30)

    return (
        <main id={'home'} className={'h-screen p-5 sm:p-12 bg-lari-blue bg-gradient-radial '}>
            <div className={'border-2 p-4 sm:p-0 overflow-hidden h-full relative'}>
                <motion.section variants={slideRight} initial={'hidden'} whileInView={'show'} viewport={{once: true}}
                                className={'h-full flex justify-start items-center relative z-50'}>
                    <div className={'sm:pl-16'}>
                        <motion.div>
                            <h1 className={'flex flex-row sm:text-4xl'}>
                    <span className={'flex flex-col mr-3 text-lari-light-blue sm:leading-8 sm:place-self-end sm:mb-2'}>
                        <span>Hi,</span><span>I'm</span>
                    </span>
                                <span className={'uppercase font-bold text-white sm:text-large text-5xl'}>Lari</span>
                            </h1>
                        </motion.div>
                        <motion.div variants={slideRight}>
                            <p className={'text-xs mt-2 mb-1 italic tracking-wider text-lari-light-blue'}>definition
                                (noun)</p>
                            <p className={'text-sm text-lari-light-blue'} style={{maxWidth: '22rem'}}>Software developer
                                and lover of simple things like bunnies and stars ✨</p>
                        </motion.div>
                    </div>
                </motion.section>
                <motion.div className={'mx-auto absolute w-fit bottom-5 left-0 right-0 sm:bottom-11 z-50'}
                            variants={slideDown} initial={'hidden'} whileInView={'show'} viewport={{once: true}}>
                    <button
                        className={'launch text-sm text-white hover:text-lari-light-blue transition-colors cursor-pointer'}>
                        <a href="#about">Launch</a>
                    </button>
                </motion.div>
                <motion.div className={' mx-auto absolute w-fit bottom-14 left-0 right-0 sm:bottom-20 '}
                            variants={slideDown} initial={'hidden'} whileInView={'show'} viewport={{once: true}}>
                    <div className={'launch-bar w-px bg-white h-12 sm:h-16 transition-transform'}></div>
                </motion.div>

                <Particles className={'absolute w-full h-full top-0'} id={'tsparticles'}
                           init={particlesInit} options={{
                    'particles': {
                        'number': {
                            'value': 200,
                            'density': {
                                'enable': true,
                                'value_area': 700
                            }
                        },
                        'color': {
                            'value': '#ffffff'
                        },
                        'shape': {
                            'type': 'circle',
                            'stroke': {
                                'width': 0,
                                'color': '#000000'
                            },
                            'polygon': {
                                'nb_sides': 5
                            }
                        },
                        'opacity': {
                            'value': 0.5,
                            'random': false,
                            'anim': {
                                'enable': true,
                                'speed': 0.2,
                                'opacity_min': 0,
                                'sync': false
                            }
                        },
                        'size': {
                            'value': 2,
                            'random': true,
                            'anim': {
                                'enable': true,
                                'speed': 2,
                                'size_min': 0,
                                'sync': false
                            }
                        },
                        'line_linked': {
                            'enable': false,
                            'distance': 150,
                            'color': '#ffffff',
                            'opacity': 0.5,
                            'width': 1
                        },
                        'move': {
                            'enable': true,
                            'speed': 0.2,
                            'direction': 'none',
                            'random': true,
                            'straight': false,
                            'out_mode': 'out',
                            'bounce': false,
                            'attract': {
                                'enable': false,
                                'rotateX': 600,
                                'rotateY': 1200
                            }
                        }
                    },
                    'interactivity': {
                        'detect_on': 'canvas',
                        'events': {
                            'onHover': {
                                'enable': true,
                                'mode': 'bubble'
                            },
                            'onclick': {
                                'enable': true,
                                'mode': 'push'
                            },
                            'resize': true
                        },
                        'modes': {
                            'grab': {
                                'distance': 300,
                                'line_linked': {
                                    'opacity': 1
                                }
                            },
                            'bubble': {
                                'distance': 83,
                                'size': 1,
                                'duration': 3,
                                'opacity': 1,
                                'speed': 3
                            },
                            'repulse': {
                                'distance': 200,
                                'duration': 0.3
                            },
                            'push': {
                                'particles_nb': 4
                            },
                            'remove': {
                                'particles_nb': 2
                            }
                        }
                    },
                    fullScreen: {enable: false, zIndex: -5}, 'retina_detect': true
                }}/>
            </div>
        </main>

    )
}