import style from "./Answer.module.scss";

interface AnswerItemProps {
  answerId: number;
  text: string;
  label: string;
  onAnswerSelect: (answerId: number) => void;
  className?: string;
  selectedAnswerId: number | null;
  isAnswerCorrect: boolean | null;
  correctAnswerIds: number[];
}

export const AnswerItem = ({
  answerId,
  text,
  label,
  onAnswerSelect,
  selectedAnswerId,
  isAnswerCorrect,
  correctAnswerIds,
}: AnswerItemProps) => {
  let answerClass = style.listButton;

  if (selectedAnswerId === answerId) {
    answerClass += ` ${style.selected}`;
    if (isAnswerCorrect === true) {
      answerClass += ` ${style.correct}`;
    } else if (isAnswerCorrect === false) {
      answerClass += ` ${style.wrong}`;
    }
  } else if (isAnswerCorrect === false && correctAnswerIds.includes(answerId)) {
    answerClass += ` ${style.correct}`;
  }

  return (
    <li className={style.listItem}>
      <button
        className={answerClass}
        onClick={() => onAnswerSelect(answerId)}
        disabled={selectedAnswerId !== null}
      >
        <span className={style.label}>{label}</span> {text}
      </button>
    </li>
  );
};
