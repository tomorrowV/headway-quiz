import style from "./Progress.module.scss";

interface ProgressTrackerProps {
  currentQuestion: number;
  questions: { prize: number }[];
  isVisibleTracker: boolean;
}

const ProgressTracker = ({
  currentQuestion,
  questions,
  isVisibleTracker,
}: ProgressTrackerProps) => {
  return (
    <div
      className={`${style.progressTracker} ${
        isVisibleTracker ? style.visible : style.hidden
      }`}
    >
      <ul className={style.prizeList}>
        {questions
          .map((q, index) => {
            const questionNumber = index + 1;
            let itemClass = style.notPassed;

            if (questionNumber < currentQuestion) {
              itemClass = style.passed;
            } else if (questionNumber === currentQuestion) {
              itemClass = style.current;
            }

            return (
              <li key={questionNumber} className={itemClass}>
                ${q.prize.toLocaleString("en-US")}
              </li>
            );
          })
          .reverse()}
      </ul>
    </div>
  );
};

export default ProgressTracker;
