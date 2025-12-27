import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SportsNewsLayout from '../layouts/SportsNewsLayout'
import FacilitiesLayout from '../layouts/FacilitiesLayout'
import SportsNewsHome from '../pages/SportsNewsHome'
import FacilitiesHome from '../pages/FacilitiesHome'
import { pageTransitionConfig } from '../utils/pageTransitions'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/landing-react/" element={<SportsNewsLayout />}>
          <Route index element={
            <motion.div {...pageTransitionConfig}>
              <SportsNewsHome />
            </motion.div>
          } />
        </Route>
        <Route path="/landing-react/sports-news" element={<SportsNewsLayout />}>
          <Route index element={
            <motion.div {...pageTransitionConfig}>
              <SportsNewsHome />
            </motion.div>
          } />
        </Route>
        <Route path="/landing-react/facilities" element={<FacilitiesLayout />}>
          <Route index element={
            <motion.div {...pageTransitionConfig}>
              <FacilitiesHome />
            </motion.div>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes