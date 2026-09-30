export type QueryDifficulty = "easy" | "normal" | "hard" | "einstein";

export interface QueryOptionObject{
    id: number;
    label: string;
}

export interface QueryObject{
    id: number;
    question: string,
    categories: string[],
    options: QueryOptionObject[],
    correctOptionId: number;
}