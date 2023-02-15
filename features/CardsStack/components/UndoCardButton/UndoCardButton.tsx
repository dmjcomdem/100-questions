'use client';
import { type FC, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './UndoCardButton.module.css';

interface CardProps {
    onClick: () => void;
    active: boolean;
}

export const UndoCardButton: FC<CardProps> = ({ onClick, active }) => {
    const [disabled, setDisabled] = useState(false);

    const variants: Variants = {
        initial: {
            y: -20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 0.2
        },
        hover: {
            scale: 1.1,
            opacity: 1
        },
        click: {
            scale: 0.8,
            rotate: '-90deg'
        },
        exit: {
            y: -20,
            opacity: 0
        }
    };

    return (
        <>
            {active && (
                <motion.button
                    className={styles.button}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="click"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    onClick={onClick}
                >
                    <svg width="23" height="22" viewBox="0 0 23 22">
                        <motion.path
                            fill="#fff"
                            d="M11.512.213C8.554.447 5.934 1.82 3.986 4.15c-.417.502-.556.628-.642.574-.027-.013-.045-.215-.045-.444 0-.75-.125-1.135-.498-1.503-.794-.8-2.136-.57-2.634.444l-.121.247v6.507l.135.26c.166.332.525.664.866.803l.255.103 2.913.014c3.114.013 3.37 0 3.76-.197.965-.49 1.176-1.84.413-2.608-.359-.354-.807-.507-1.52-.507-.31 0-.382-.013-.45-.09-.193-.21.027-.695.638-1.395 1.848-2.127 4.797-2.94 7.44-2.051 2.49.835 4.295 2.993 4.694 5.623.117.763.058 1.826-.144 2.647-.475 1.935-1.862 3.649-3.652 4.529-.876.43-1.558.619-2.536.7-1.144.098-1.431.184-1.83.556-.867.812-.75 2.262.232 2.917.404.27.624.319 1.374.31 2.934-.036 5.968-1.5 7.862-3.788 1.364-1.656 2.163-3.469 2.437-5.529.09-.695.09-2.06 0-2.755a10.33 10.33 0 0 0-1.037-3.38C20.469 3.288 17.983 1.282 14.904.5c-.982-.25-2.383-.368-3.392-.287Z"
                        />
                    </svg>
                </motion.button>
            )}
        </>
    );
};
