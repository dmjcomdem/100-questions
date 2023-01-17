import QuestionsStack from './QuestionStack';

const getQuestions = async () => {
    const response = await fetch(`${process.env.DOMAIN}/api/questions`, { cache: 'reload' });
    return response.json();
};

export default async function MainPage() {
    const questions = await getQuestions();
    return <QuestionsStack questions={questions} />;
}
