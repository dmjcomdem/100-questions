import QuestionsStack from './QuestionStack';
import type { Question } from './QuestionCard';

const shuffle = <T,>([...arr]): T[] => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};

const getQuestions = async () => {
    const response = await fetch(`${process.env.DOMAIN}/api/questions`);
    const questions = await response.json();
    return shuffle<Question>(questions);
};

export default async function MainPage() {
    const questions = await getQuestions();
    return <QuestionsStack questions={questions} />;
}
