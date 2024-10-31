import React from 'react'
import { motion } from 'framer-motion'

export const MotionH1 = ({ children, className }) => {
    return (
        <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={className}
        >
            {children}
        </motion.h1>
    )
}

export const  MotionP = ({ children, className }) => {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={className}
        >
            {children}
        </motion.p>
    )
}

export const  MotionDiv = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const MotionA = ({ children, href, className }) => {
    return (
        <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            href={href}
            className={className}
        >
            {children}
        </motion.a>
    )
}