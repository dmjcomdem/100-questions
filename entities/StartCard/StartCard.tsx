import type { FC } from 'react';
import type { Variants } from 'framer-motion';
import { Card } from '@/shared/ui';
import { useDragCard } from '@/shared/hooks';
import styles from './StartCard.module.css';

interface CardProps {
    active: boolean;
    removeCard: () => void;
}

export const StartCard: FC<CardProps> = ({ active, removeCard }) => {
    const { leaveX, leaveY, onDragEnd } = useDragCard(removeCard);

    const variantFront: Variants = {
        animate: {
            scale: 1,
            y: 0
        },
        exit: {
            x: leaveX,
            y: leaveY,
            opacity: 0,
            scale: 0.5
        }
    };

    const variantBack: Variants = {
        animate: {
            x: leaveX,
            y: leaveY,
            opacity: 0,
            scale: 0.5
        }
    };

    return (
        <>
            {active ? (
                <Card variants={variantFront} onDragEnd={onDragEnd}>
                    <div className={styles.logo} />
                    <p>Это приложение мы создали для того, чтобы вам было интересно открываться и узнавать друг друга</p>
                </Card>
            ) : (
                <Card variants={variantBack} />
            )}
        </>
    );
};
