import { QuestionDisplay } from "./QuestionDisplay";
import { ActionList } from "./ActionList";
import { use } from "react";
import { QueryContext, StateContext } from "@contexts";
import type { QueryObject } from "@types";

export function QuizForm() {
    const query = use(QueryContext);
    const game = use(StateContext)

    return (
        <>
        <section className="quiz-form">
            <ul className="tags">
                <li>{game.difficulty}</li>
                <li>
                    { (query as QueryObject).categories.map((category, i, a) => `
                        ${category}${i !== a.length - 1 ? "," : ""}
                    `) }
                </li>
            </ul>
            <QuestionDisplay />
            <ActionList />
        </section>
        </>
    );
}