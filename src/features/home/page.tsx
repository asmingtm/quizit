import { QuizForm } from "./components/QuizForm";

import "./styles/action.css";
import "./styles/form.css";
import "./styles/page.css";

export function HomePage() {
    return (
        <main className="page-home">
            <QuizForm />
        </main>
    );
}