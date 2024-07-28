"use client";
import { useEffect, useState } from "react";
import style from "./Page.module.scss";
import questionsData from "../data.json";
import { Question } from "@/models";
import { Questions } from "@/components/Questions/Questions";
import ProgressTracker from "@/components/Progress/Progress";
import { useRouter } from "next/navigation";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [isVisibleTracker, setIsVisibleTracker] = useState<boolean>(false);
  const router = useRouter();
  const currentQuestion: Question =
    questionsData.questions[currentQuestionIndex];

  useEffect(() => {
    if (isAnswerCorrect !== null) {
      const timeout = setTimeout(() => {
        if (isAnswerCorrect === false) {
          router.push(`/final?score=${score}`);
        } else if (currentQuestionIndex < questionsData.questions.length - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setSelectedAnswerId(null);
          setIsAnswerCorrect(null);
        } else {
          router.push(`/final?score=${score}`);
        }
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isAnswerCorrect, score, currentQuestionIndex, router]);

  const handleAnswerSelect = (answerId: number) => {
    setSelectedAnswerId(answerId);

    setTimeout(() => {
      if (currentQuestion.correct.includes(answerId)) {
        setIsAnswerCorrect(true);
        setScore((prevScore) => prevScore + currentQuestion.prize);
      } else {
        setIsAnswerCorrect(false);
      }
    }, 2000);
  };

  const toggleTracker = () => {
    setIsVisibleTracker(!isVisibleTracker);
    document.body.classList.toggle("lock");
  };

  if (!currentQuestion) {
    return null;
  }
  return (
    <>
      <header className={style.header}>
        <button
          onClick={toggleTracker}
          className={`${style.burger} ${isVisibleTracker ? style.active : ""}`}
        >
          <span></span>
        </button>
      </header>
      <section className={style.section}>
        <Questions
          question={currentQuestion.question}
          answers={currentQuestion.answers}
          onAnswerSelect={handleAnswerSelect}
          selectedAnswerId={selectedAnswerId}
          isAnswerCorrect={isAnswerCorrect}
          correctAnswerIds={currentQuestion.correct}
        />
        <ProgressTracker
          currentQuestion={currentQuestionIndex + 1}
          questions={questionsData.questions}
          isVisibleTracker={isVisibleTracker}
        />
      </section>
    </>
  );
};

export default QuizPage;
