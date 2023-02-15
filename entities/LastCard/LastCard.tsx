import { type FC } from 'react';
import type { Variants } from 'framer-motion';
import { Card } from '@/shared/ui';
import styles from './LastCard.module.css';

interface CardProps {
    active: boolean;
}

export const LastCard: FC<CardProps> = ({ active }) => {
    const variantFront: Variants = {
        animate: {
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.5
        }
    };

    const variantBack: Variants = {
        animate: {
            opacity: 0,
            scale: 0.5
        }
    };

    return (
        <>
            {active ? (
                <Card variants={variantFront}>
                    <div className={styles.wrapper}>
                        <div className={styles.congratulation}>🎉</div>

                        <p className={styles.message}>Надеемся, вы душевно провели это время вместе с друзьями!</p>

                        <div className={styles.authors}>
                            <a href="https://twitter.com/dmjcomdem" className={styles.author} target="_blank" rel="noreferrer">
                                <img className={styles.authorImg} src="./img/avatar-dmjcomdem.jpg" alt="" />
                                <span className={styles.authorInfo}>
                                    <span className={styles.authorTitle}>Frontend/UI</span>
                                    <span className={styles.authorNickname}>@dmjcomdem</span>
                                </span>
                            </a>
                            <a href="https://t.me/arenotcool" className={styles.author} target="_blank" rel="noreferrer">
                                <img className={styles.authorImg} src="./img//avatar-arenotcool.jpg" alt="" />
                                <span className={styles.authorInfo}>
                                    <span className={styles.authorTitle}>Вопросы</span>
                                    <span className={styles.authorNickname}>@arenotcool</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </Card>
            ) : (
                <Card variants={variantBack} />
            )}
        </>
    );
};
