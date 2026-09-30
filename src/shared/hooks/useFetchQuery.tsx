import { randomNumber } from "@utils";
import type { QueryDifficulty, QueryObject } from "@types";
import { easy, normal, hard, einstein } from "@data";

export function useFetchQuery(difficulty: QueryDifficulty) {
    const fetchQuery = (): QueryObject => {
        switch (difficulty) {
            case "easy":
                return easy.queries[randomNumber(0, easy.queries.length - 1)];
            case "normal":
                return normal.queries[randomNumber(0, normal.queries.length - 1)];
            case "hard":
                return hard.queries[randomNumber(0, hard.queries.length - 1)];
            case "einstein":
                return einstein.queries[randomNumber(0, einstein.queries.length - 1)];
            default: throw new Error("Invalid difficulty chosen!");
        }
    };

    return fetchQuery();
}