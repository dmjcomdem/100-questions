import { PanInfo, motion } from "framer-motion";
import React, { useState } from "react";
import style from './Card.module.css'

export type CardType = { id: number, question: string };

export interface CardProps {
    card: CardType;
    active: boolean;
    total: number;
    current: number
    removeCard: (oldCard: CardType) => void;
}

export const CardQuestion: React.FC<CardProps> = ({ card, removeCard, active, total, current  }) => {
    const [leaveX, setLeaveX] = useState(0);
    const [leaveY, setLeaveY] = useState(0);

    const onDragEnd = (_e: any, info: PanInfo) => {
        if (info.offset.y < -100) {
            setLeaveY(-2000);
            removeCard(card);
            return;
        }
        if (info.offset.x > 100) {
            setLeaveX(1000);
            removeCard(card);
        }
        if (info.offset.x < -100) {
            setLeaveX(-1000);
            removeCard(card);
        }
    };
    return (
        <>
            {active ? (
                <motion.div
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    onDragEnd={onDragEnd}
                    initial={{
                        scale: 0,
                    }}
                    animate={{
                        scale: 1.06,
                        rotate: `${current % 2 === 0 ? 1 : -1}deg`,
                    }}
                    exit={{
                        x: leaveX,
                        y: leaveY,
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.4 },
                    }}
                    className={`${style.card} ${style.cardActive}`}
                    style={{boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 10px'}}
                >
                    <div className={style.logo} />

                    {card.question}

                    <div className={style.limit}>
                        {total - current} из {total}
                    </div>
                </motion.div>
            ) : null }
        </>
    );
};
