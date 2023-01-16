import { PanInfo, motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import style from './QuestionCard.module.css'

interface CardProps {
    active: boolean;
    removeCard: () => void;
}

export const QuestionStart: React.FC<CardProps> = ({ active, removeCard }) => {
    const [leaveX, setLeaveX] = useState(0);
    const [leaveY, setLeaveY] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLeaveX(-20);
        }, 1000)
    }, [])

    const onDragEnd = (_e: any, info: PanInfo) => {
        if (info.offset.y < -100) {
            setLeaveY(-2000);
            removeCard();
        }
        if (info.offset.x > 100) {
            setLeaveX(1000);
            removeCard();
        }
        if (info.offset.x < -100) {
            setLeaveX(-1000);
            removeCard();
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
                  scale: 1.06,
              }}
              animate={{
                  x: leaveX,
              }}
              exit={{
                  x: leaveX,
                  y: leaveY,
                  opacity: 0,
                  scale: 0.5,
                  transition: { duration: 0.4 }
              }}
              className={`${style.card} ${style.cardActive}`}
              style={{ boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 10px' }}
            >
                <div className={style.logoBig} />
                <p>Это приложение мы создали для того, чтобы вам было интересно открываться и узнавать друг друга</p>
            </motion.div>
          ) : <motion.div
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={onDragEnd}
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
          >
          </motion.div>}
      </>
    );
};