import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CardQuestion, type CardType, CardQuestionStart, CardError } from '../CardQuestion';

export default function MainPage({ initialQuestions, isError }: { initialQuestions: CardType[]; isError: boolean }) {
    const [questions, setQuestions] = useState(initialQuestions);
    const [isCardStartVisible, setIsCardStartVisible] = useState(true);
    const activeIndex = questions.length - 1;

    const removeCard = (oldCard: CardType) => {
        setQuestions(current => current.filter(card => card.id !== oldCard.id));
    };

    const hiddenStartCard = () => {
        setIsCardStartVisible(false);
    };

    return (
        <div className="app">
            {isError ? (
                <CardError />
            ) : (
                <>
                    <AnimatePresence>
                        {questions.map((card, index) => (
                            <CardQuestion
                                key={card.id}
                                active={index === activeIndex}
                                removeCard={removeCard}
                                card={card}
                                total={initialQuestions.length}
                                current={index}
                            />
                        ))}
                        <CardQuestionStart active={isCardStartVisible} removeCard={hiddenStartCard} />
                    </AnimatePresence>
                </>
            )}
        </div>
    );
}
export async function getServerSideProps() {
    const response = await fetch(`${process.env.DOMAIN}/api/questions`);

    let questions = [];
    let isError = false;

    if (response.ok) {
        questions = await response.json();
    } else {
        isError = true;
    }

    return {
        props: { initialQuestions: questions, isError }
    };
}
