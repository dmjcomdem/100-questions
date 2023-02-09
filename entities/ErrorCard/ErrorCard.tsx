import { FC } from "react";
import type { Variants } from 'framer-motion';
import { Card } from '@/shared/ui';
import styles from './ErrorCard.module.css';

export interface ErrorCardProps {
    error: Error;
    reset: () => void;
}

export const ErrorCard:FC<ErrorCardProps> = ({error}) => {
    const variant: Variants = {
        animate: {
            scale: 1,
            y: 0
        }
    };

    return (
        <Card variants={variant} className={styles.errorCard}>
            <div className={styles.logo} />

            <div>
              <p>Ошибка при инициализации приложения 🙁</p>
              <p className={styles.error}> {error.message}</p>
            </div>

        </Card>
    );
};
