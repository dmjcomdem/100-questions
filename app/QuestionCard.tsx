import { PanInfo, motion } from 'framer-motion';
import React, { useState } from 'react';
import style from './QuestionCard.module.css';
import { useDragCard } from './useDragCard';

export interface Question {
    id: number;
    question: string;
}

export interface QuestionCardProps {
    question: Question;
    active: boolean;
    currentIndex: number;
    total: number;
    removeCard: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, active, removeCard, currentIndex, total }) => {
    const { leaveX, leaveY, onDragEnd } = useDragCard(removeCard);

    return (
        <>
            {active ? (
                <motion.div
                    className={`${style.card} ${style.cardActive}`}
                    whileTap={{ cursor: "grabbing" }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    onDragEnd={onDragEnd}
                    dragTransition={{ bounceDamping: 12, min: 4 }}
                    animate={{
                        scale: 1,
                        y: 0,
                    }}
                    exit={{
                        x: leaveX,
                        y: leaveY,
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.4 },
                    }}
                >
                        <div className={style.logo} />
                        <p>{question.question}</p>
                        <div className={style.limitSize}>
                            {currentIndex} из {total}!
                        </div>
                </motion.div>
            ) : (
                <motion.div
                    className={`${style.card} ${style.cardActive}`}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    initial={{
                        scale: 0.9,
                        y: 30,
                    }}
                >
                    <div className={style.logo} />
                    <p>{question.question}</p>
                </motion.div>
            )}
        </>
    );
};
