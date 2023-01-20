import { PanInfo, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import style from './QuestionCard.module.css';
import { useDragCard } from './useDragCard';

interface CardProps {
    active: boolean;
    removeCard: () => void;
}

export const QuestionStart: React.FC<CardProps> = ({ active, removeCard }) => {
    const { leaveX, leaveY, onDragEnd } = useDragCard(removeCard);

    return (
        <>
            {active ? (
                <motion.div
                    className={`${style.card} ${style.cardActive}`}
                    whileTap={{ cursor: 'grabbing' }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    onDragEnd={onDragEnd}
                    dragTransition={{ bounceDamping: 12, min: 20 }}
                    animate={{
                        scale: 1,
                        y: 0
                    }}
                    exit={{
                        x: leaveX,
                        y: leaveY,
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.4 }
                    }}
                >
                    <div className={style.logoBig} />
                    <p>Это приложение мы создали для того, чтобы вам было интересно открываться и узнавать друг друга</p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{
                        scale: 1
                    }}
                    animate={{
                        x: leaveX,
                        y: leaveY,
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.4 }
                    }}
                    className={`${style.card} ${style.cardActive}`}
                ></motion.div>
            )}
        </>
    );
};
