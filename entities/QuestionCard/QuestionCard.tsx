import type { FC } from 'react';
import type { Variants } from 'framer-motion';
import type { Question } from '@/shared/types';
import { Card } from '@/shared/ui';
import { useDragCard } from '@/shared/hooks';
import styles from './QuestionCard.module.css';

export interface QuestionCardProps {
    question: Question;
    active: boolean;
    currentIndex: number;
    total: number;
    removeCard: () => void;
}

export const QuestionCard: FC<QuestionCardProps> = ({ question, active, removeCard, currentIndex, total }) => {
    const { leaveX, leaveY, onDragEnd } = useDragCard(removeCard);

    const variantFront: Variants = {
        initial: {
            scale: 0.9,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        exit: {
            x: leaveX,
            y: leaveY,
            opacity: 0,
            scale: 0.5
        }
    };

    const variantBack: Variants = {
        initial: {
            scale: 0.9,
            y: 30
        },
        exit: {
            x: leaveX,
            y: leaveY,
            opacity: 0,
            scale: 0.5
        }
    };

    return (
        <>
            {active && (
                <Card variants={variantFront} onDragEnd={onDragEnd}>
                    <div className={styles.logo} />
                    <p>{question.question}</p>
                    <div className={styles.limitSize}>
                        {question.id} |{currentIndex} из {total}
                    </div>
                </Card>
            )}
        </>
    );
};
