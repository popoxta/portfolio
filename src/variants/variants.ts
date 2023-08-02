import {Variants} from "framer-motion";

export const slideRightVariant: Variants = {
    hidden: {opacity: 0, x: -100},
    show: {opacity: 1, x: 0, transition: {ease: 'anticipate', duration: 0.8, staggerChildren: 0.2}}
}

export const slideInOutVariant: Variants = {
    hidden: {x: -50, opacity: 0},
    center: {x: 0, opacity: 1},
}