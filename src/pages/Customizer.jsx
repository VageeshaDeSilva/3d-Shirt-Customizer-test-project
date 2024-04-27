import React, { useState, useEffect } from "react"
import { useSnapshot } from "valtio"
import state from "../store"
import { motion, AnimatePresence } from "framer-motion"
import config from "../config/config"
import { download } from "../assets"
import { downloadCanvasToImage, reader } from "../config/helpers"
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants"  //object deconstructing!!!!!!!
import {
  slideAnimation,
  fadeAnimation
} from '../config/motion'
import { AiPicker, ColorPicker, FilePicker, Tab, CustomButton } from "../components"

function Customizer() {

  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* left side edditor tabs======================================================== */}
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => { }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* top right go back button========================================================*/}
          <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          {/* bottom filtertabs======================================================== */}
          <motion.div className="filtertabs-container" {...slideAnimation('up')}>
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                handleClick={() => { }}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer