import { PanInfo, motion } from 'framer-motion';
import React, { useState } from 'react';
import style from './QuestionCard.module.css';
import { useDragCard } from './useDragCard';

export interface QuestionType {
    id: number;
    question: string;
}

export interface QuestionCardProps {
    question: QuestionType;
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
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    onDragEnd={onDragEnd}
                    initial={{
                        scale: 0.9,
                        rotate: 2,
                        pointerEvents: 'none'
                    }}
                    animate={{
                        scale: 1,
                        rotate: 0,
                        transitionEnd: {
                            pointerEvents: 'auto'
                        }
                    }}
                    exit={{
                        x: leaveX,
                        y: leaveY,
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.4 },
                        pointerEvents: 'none'
                    }}
                    className={`${style.card} ${style.cardActive}`}
                    style={{ boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 10px' }}
                >
                    <div className={style.logo} />
                    <p>{question.question}</p>
                    <div className={style.limitSize}>
                        {currentIndex} из {total}
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    className={`${style.card} ${style.cardActive}`}
                    initial={{
                        scale: 0.9,
                        rotate: -2,
                        pointerEvents: 'none'
                    }}
                >
                    <div className={style.logo} />
                    <p>{question.question}</p>
                </motion.div>
            )}
        </>
    );
};
