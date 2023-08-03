import {Variants} from "framer-motion";

export const slideHorizontal = (n: number): Variants => ({
    hidden: {opacity: 0, x: n},
    show: {opacity: 1, x: 0, transition: {ease: 'anticipate', duration: 0.8, staggerChildren: 0.2}}
})

export const slideRightVariant: Variants = {
    hidden: {opacity: 0, x: -100},
    show: {opacity: 1, x: 0, transition: {ease: 'anticipate', duration: 0.8, staggerChildren: 0.2}}
}

export const slideInOutVariant: Variants = {
    hidden: {x: -50, opacity: 0},
    center: {x: 0, opacity: 1},
}

export const slideDownVariant: Variants = {
    hidden: {opacity: 0, y: -60},
    show: {opacity: 1, y: 0, transition: {ease: 'anticipate', duration: 0.8, staggerChildren: 0.2}}
}