import React from 'react'
import { motion } from 'framer-motion';
import { snapshot, useSnapshot } from 'valtio'
import state from '../store'
import { color } from 'framer-motion';

function CustomButton(props) {

    const snap = useSnapshot(state);

    const generateStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: snap.color,
                color: '#fff'
            }
        }
    }

    return (
        <motion.button className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyles}`}
            style={generateStyle(props.type)}
            onClick={props.handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {props.title}
        </motion.button>
    )
}

export default CustomButton