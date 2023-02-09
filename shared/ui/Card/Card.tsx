"use client"
import React, { ReactNode } from 'react';
import { motion, type PanInfo, Variants } from 'framer-motion';
import style from './Card.module.css';

interface CardProps {
    variants: Variants;
    onDragEnd?: (_e: any, info: PanInfo) => void;
    children?: ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ variants: variants, onDragEnd, className, children }) => {
    return (
        <motion.div
            className={`${style.card} ${className ? className : null}`}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileTap={{ cursor: 'grabbing' }}
            drag={true}
            transition={{ duration: 0.4 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceDamping: 10, min: 10 }}
            onDragEnd={onDragEnd}
        >
            {children}
        </motion.div>
    );
};
