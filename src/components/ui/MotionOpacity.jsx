import React from 'react'
import { motion } from 'framer-motion'

const motionVariants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "ease-out",
            duration: 1.5
        }
    }
};

export default function MotionOpacity({ children }) {
    return (
        <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}>
            {children}
        </motion.div>
    )
}
