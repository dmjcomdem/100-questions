'use client';
import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { QuestionCard, type Question } from './QuestionCard';
import { QuestionStart } from './QuestionStart';

export default function QuestionStack({ questions: initialQuestions }: { questions: Question[] }) {
    const [questions, setQuestions] = useState(initialQuestions);
    const [isVisibleStartCard, setIsVisibleStartCard] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(1);
    const activeQuestionID = questions.at(-1)?.id;

    const viewQuestions = useMemo(() => {
        return questions.slice(Math.max(questions.length - 2, 0), questions.length);
    }, [questions]);

    const removeQuestionCard = (oldCard: Question) => () => {
        setQuestions(current => current.filter(card => card.id !== oldCard.id));
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    const hiddenStartCard = () => {
        setIsVisibleStartCard(false);
    };

    return (
        <AnimatePresence>
            {viewQuestions.map(question => (
                <QuestionCard
                    key={question.id}
                    question={question}
                    active={question.id === activeQuestionID}
                    currentIndex={currentIndex}
                    total={initialQuestions.length}
                    removeCard={removeQuestionCard(question)}
                />
            ))}
            <QuestionStart active={isVisibleStartCard} removeCard={hiddenStartCard} />
        </AnimatePresence>
    );
}
