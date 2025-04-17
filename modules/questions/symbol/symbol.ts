import { TQuestionSymbol } from "@/modules/types";
import { data } from "./i";
import { aSoundQuestions } from "./æ";

type Type = {
  symbol: string;
  questions: TQuestionSymbol[];
};

export const questionsSymbol: Type[] = [
  {
    symbol: "/ɪ/",
    questions: data,
  },
  { symbol: "/e/", questions: aSoundQuestions },
];
