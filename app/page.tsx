import QuestionsStack from "./QuestionStack";

const getQuestions = async () => {
    const response = await fetch(`${process.env.DOMAIN}/api/questions`);
    return response.json()
}

export default async function MainPage() {
    const questions = await getQuestions()
    return <QuestionsStack questions={questions} />
}
