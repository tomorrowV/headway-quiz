import { AnswerItem } from "../UI/Answer";
import style from "./Questions.module.scss";
import { Answer } from "@/models";

interface QuestionsProps {
  question: string;
  answers: Answer[];
  onAnswerSelect: (answerId: number) => void;
  selectedAnswerId: number | null;
  isAnswerCorrect: boolean | null;
  correctAnswerIds: number[];
}

export const Questions = ({
  question,
  answers,
  onAnswerSelect,
  selectedAnswerId,
  isAnswerCorrect,
  correctAnswerIds,
}: QuestionsProps) => {
  const labels = ["A", "B", "C", "D"];

  return (
    <>
      <h2>{question}</h2>
      <ul className={style.list}>
        {answers.map((answer, index) => (
          <AnswerItem
            key={answer.id}
            answerId={answer.id}
            text={answer.text}
            label={labels[index]}
            onAnswerSelect={onAnswerSelect}
            selectedAnswerId={selectedAnswerId}
            isAnswerCorrect={isAnswerCorrect}
            correctAnswerIds={correctAnswerIds}
          />
        ))}
      </ul>
    </>
  );
};
