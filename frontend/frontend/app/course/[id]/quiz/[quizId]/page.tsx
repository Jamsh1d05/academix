"use client";

import { ArrowLeft, Clock, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function QuizPage({ params }: { params: { id: string; quizId: string } }) {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const quiz = {
    id: params.quizId,
    title: "Тест по модулю: Условия и циклы",
    course: "Основы программирования на Python",
    duration: "30 минут",
    questions: 10,
    passingScore: 70,
  };

  const questions = [
    {
      id: 1,
      text: "Какой оператор используется для создания условия в Python?",
      options: ["if", "when", "condition", "check"],
      correct: "if",
    },
    {
      id: 2,
      text: "Какой цикл используется для итерации по последовательности?",
      options: ["loop", "for", "iterate", "each"],
      correct: "for",
    },
    // Добавьте больше вопросов по необходимости
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Link
          href={`/course/${params.id}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Вернуться к курсу
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Quiz Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {quiz.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{quiz.course}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{quiz.duration}</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300">{quiz.questions} вопросов</span>
              <span className="text-gray-700 dark:text-gray-300">
                Проходной балл: {quiz.passingScore}%
              </span>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {questions.map((question, index) => (
                <div
                  key={question.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {index + 1}. {question.text}
                  </h3>
                  <div className="space-y-2">
                    {question.options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          onChange={(e) =>
                            setAnswers({ ...answers, [question.id]: e.target.value })
                          }
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-gray-900 dark:text-white">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Завершить тест
              </button>
            </form>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Тест завершен!
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Ваш результат: 85/100
                </p>
              </div>
              <Link
                href={`/course/${params.id}`}
                className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Вернуться к курсу
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
