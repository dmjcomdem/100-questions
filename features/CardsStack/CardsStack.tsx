'use client';
import { useId, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { Question } from '@/shared/types';
import { StartCard } from '@/entities/StartCard';
import { LastCard } from '@/entities/LastCard';
import { QuestionCard } from '@/entities/QuestionCard';
import { UndoCardButton } from './components/UndoCardButton';
import styles from './CardsStack.module.css';

export default function CardsStack({ questions: initialQuestions }: { questions: Question[] }) {
    const [questions, setQuestions] = useState(initialQuestions);
    const [history, setHistory] = useState<Question[]>([]);
    const [isVisibleStartCard, setIsVisibleStartCard] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(1);

    const isVisibleLastCard = questions.length === 0;
    const isVisibleUndoAction = history.length >= 1 && history.length !== initialQuestions.length;

    const removeQuestionCard = (oldCard: Question) => () => {
        setQuestions(current => current.filter(card => card !== oldCard));
        setCurrentIndex(prevIndex => prevIndex + 1);
        setHistory(prev => [...prev, oldCard]);
    };

    const undoQuestion = () => {
        const question = history.at(-1);

        if (question) {
            setHistory(current => current.filter(item => item !== question));
            setCurrentIndex(prevIndex => prevIndex - 1);
            setQuestions(item => [...item, question]);
        }
    };

    const activeQuestion = useMemo(() => {
        return questions.at(-1);
    }, [questions]);

    let viewQuestions = useMemo(() => {
        return questions.slice(Math.max(questions.length - 2, 0), questions.length);
    }, [questions]);

    const hiddenStartCard = () => {
        setIsVisibleStartCard(false);
    };

    return (
        <div className={styles.layout}>
            <div className={styles.cards}>
                <AnimatePresence>
                    <LastCard active={isVisibleLastCard} key={useId()} />
                    {viewQuestions.map(question => (
                        <QuestionCard
                            key={question.id}
                            question={question}
                            active={question === activeQuestion}
                            currentIndex={currentIndex}
                            total={initialQuestions.length}
                            removeCard={removeQuestionCard(question)}
                        />
                    ))}
                    <StartCard active={isVisibleStartCard} removeCard={hiddenStartCard} />
                </AnimatePresence>
            </div>
            <div className={styles.action}>
                <AnimatePresence>
                    <UndoCardButton active={isVisibleUndoAction} onClick={undoQuestion} />
                </AnimatePresence>
            </div>
        </div>
    );
}
