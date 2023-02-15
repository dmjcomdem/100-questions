import type { Question } from '@/shared/types';
import { CardsStack } from '@/features/CardsStack';
import { shuffle } from '@/shared/utils';

const getQuestions = async () => {
    const response = await fetch(`${process.env.DOMAIN}/api/questions`, { cache: 'no-store', next: { revalidate: 0 } });
    const questions = await response.json();
    return shuffle<Question>(questions);
};

export default async function MainPage() {
    const questions = await getQuestions();
    return <CardsStack questions={questions} />;
}
