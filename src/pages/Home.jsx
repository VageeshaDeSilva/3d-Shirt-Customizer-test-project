import { motion,AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'
import state from '../store'
import {CustomButton} from "../components";
import { useState } from "react";

function Home() {

  const snap = useSnapshot(state);
  // const [homeLoaded, setHomeLoaded] = useState(snap.homeLoaded);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...headContainerAnimation}> 
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">LET'S <br className="xl:block hidden"/> DO IT.</h1>
            </motion.div>
          </motion.div>
          <motion.div {...headContainerAnimation} className="flex flex-col gap-5">
            <p className="max-w-md font-normal text-gray-600">
              Lorem ipsum, <strong>dolor sit amet consectetur</strong> adipisicing elit. Aut aspernatur enim voluptate ex fuga, quasi illum similique cupiditate amet porro.
            </p>
          </motion.div>
          <motion.div {...headContainerAnimation} >
            <CustomButton 
              title="Customize It"
              type="filled"
              customeStyle="w-fit px-4 py-2.5 font-bold text-sm"
              handleClick={() => {state.intro=false}}
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home