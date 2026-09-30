import { QuizForm } from "./components/QuizForm";
import { Footer } from "./components/Footer";
import { ProgressHeader } from "./components/ProgressHeader";

import "./styles/action.css";
import "./styles/footer.css";
import "./styles/form.css";
import "./styles/header.css";
import "./styles/page.css";
import "./styles/progress.css";
import "./styles/tags.css";

export function GamePage() {
    return (
        <main className="page-home">
            <ProgressHeader />
            <QuizForm />
            <Footer />
        </main>
    );
}