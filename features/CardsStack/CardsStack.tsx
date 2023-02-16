'use client';
import { useEffect, useId, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { Question } from '@/shared/types';
import { StartCard } from '@/entities/StartCard';
import { LastCard } from '@/entities/LastCard';
import { QuestionCard } from '@/entities/QuestionCard';
import { UndoCardButton } from './components/UndoCardButton';
import styles from './CardsStack.module.css';

export default function CardsStack({ questions: initialQuestions }: { questions: Question[] }) {
    const [questions, setQuestions] = useState(initialQuestions);
    const [viewQuestions, setViewQuestions] = useState(questions.slice(-2));
    const [history, setHistory] = useState<Question[]>([]);
    const [isVisibleStartCard, setIsVisibleStartCard] = useState(true);
    const [disabledUndoButton, setIsDisabledUndoButton] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);

    const activeQuestion = questions.at(-1);
    const isVisibleLastCard = questions.length === 0;
    const isVisibleUndoAction = history.length >= 1 && history.length !== initialQuestions.length;

    useEffect(() => {
        setViewQuestions(questions.slice(Math.max(questions.length - 2, 0), questions.length));
    }, [questions]);

    const removeQuestionCard = (oldCard: Question) => () => {
        setIsDisabledUndoButton(true);
        setQuestions(current => current.filter(card => card !== oldCard));
        setCurrentIndex(prevIndex => prevIndex + 1);
        setHistory(prev => [...prev, oldCard]);

        setTimeout(() => {
            setIsDisabledUndoButton(false);
        }, 1000);
    };

    const undoQuestion = () => {
        const question = history.at(-1);

        if (question) {
            setHistory(current => current.filter(item => item !== question));
            setCurrentIndex(prevIndex => prevIndex - 1);
            setQuestions(item => [...item, question]);
        }
    };

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
                <UndoCardButton active={isVisibleUndoAction} disabled={disabledUndoButton} onClick={undoQuestion} />
            </div>
        </div>
    );
}
