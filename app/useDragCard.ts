import { useState } from 'react';
import { PanInfo } from 'framer-motion';

export const useDragCard = (removeCard: () => void) => {
    const [leaveX, setLeaveX] = useState(0);
    const [leaveY, setLeaveY] = useState(0);

    const onDragEnd = (_e: any, info: PanInfo) => {
        if (info.offset.y < -100) {
            setLeaveY(-2000);
            removeCard();
            return
        }

        if (info.offset.y > 100) {
            setLeaveY(2000);
            removeCard();
            return
        }

        if (info.offset.x > 100) {
            setLeaveX(1000);
            removeCard();
            return
        }

        if (info.offset.x < -100) {
            setLeaveX(-1000);
            removeCard();
            return
        }
    };

    return {
        leaveX,
        leaveY,
        setLeaveX,
        setLeaveY,
        onDragEnd
    };
};
