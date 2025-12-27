import { motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 100,
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 1.1,
    y: -100,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6,
}

const pageTransitionConfig = {
  variants: pageVariants,
  transition: pageTransition,
  initial: 'initial',
  animate: 'in',
  exit: 'out',
}

export { pageVariants, pageTransition, pageTransitionConfig }