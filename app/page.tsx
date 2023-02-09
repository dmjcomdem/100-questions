import type { Question } from "@/shared/types";
import { QuestionsStack } from '@/features/QuestionsStack';
import { shuffle } from "@/shared/utils";


const getQuestions = async () => {
    const response = await fetch(`${process.env.DOMAIN}/api/questions`, { cache: 'no-store', next: { revalidate: 0 } });
    const questions = await response.json();
    return shuffle<Question>(questions);
};

export default async function MainPage() {
    const questions = await getQuestions();
    return <QuestionsStack questions={questions} />;
}
