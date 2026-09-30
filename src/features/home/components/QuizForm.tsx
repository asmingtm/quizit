import { QuestionDisplay } from "./QuestionDisplay";
import { ActionList } from "./ActionList";

export function QuizForm() {
    return (
        <section className="quiz-form">
            <QuestionDisplay />
            <ActionList />
        </section>
    );
}