"use client";

import { Upload, FileText, Download, ArrowLeft, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AssignmentPage({
  params,
}: {
  params: { id: string; taskId: string };
}) {
  const [file, setFile] = useState<File | null>(null);
  const [comment, setComment] = useState("");

  const assignment = {
    id: params.taskId,
    title: "Лабораторная работа №3: Объектно-ориентированное программирование",
    course: "Основы программирования на Python",
    description:
      "Создайте классы для моделирования библиотечной системы. Должны быть классы Book, Author, Library с соответствующими методами.",
    dueDate: "28 октября 2025, 23:59",
    maxGrade: 100,
    requirements: [
      "Создать класс Book с атрибутами: название, автор, ISBN, год издания",
      "Создать класс Author с атрибутами: имя, фамилия, дата рождения",
      "Создать класс Library с методами добавления, удаления и поиска книг",
      "Добавить документацию к каждому классу и методу",
      "Написать тесты для основных функций",
    ],
    files: [
      { name: "requirements.txt", size: "245 KB" },
      { name: "template.py", size: "12 KB" },
    ],
    submitted: false,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting assignment with file:", file, "and comment:", comment);
    alert("Задание успешно отправлено!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href={`/course/${params.id}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Вернуться к курсу
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Assignment Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {assignment.course}
                  </p>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {assignment.title}
                  </h1>
                </div>
                <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-lg font-semibold">
                  {assignment.maxGrade} баллов
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Дедлайн: {assignment.dueDate}</span>
                </div>
              </div>
            </div>

            {/* Assignment Description */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Описание</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{assignment.description}</p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Требования
              </h3>
              <ul className="space-y-2">
                {assignment.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Материалы
              </h2>
              <div className="space-y-2">
                {assignment.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{file.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{file.size}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                      <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Отправить задание
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Загрузить файл
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Перетащите файл сюда или нажмите для выбора
                    </p>
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                    >
                      Выбрать файл
                    </label>
                    {file && (
                      <p className="mt-3 text-sm text-gray-900 dark:text-white font-medium">
                        Выбран: {file.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Комментарий (необязательно)
                  </label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="Добавьте комментарий к вашей работе..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Отправить задание
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Статус</h3>
              <div className="space-y-3">
                <StatusItem
                  label="Статус"
                  value={assignment.submitted ? "Отправлено" : "Не отправлено"}
                  color={assignment.submitted ? "text-green-600" : "text-orange-600"}
                />
                <StatusItem label="Дедлайн" value={assignment.dueDate} />
                <StatusItem label="Максимум баллов" value={`${assignment.maxGrade}`} />
              </div>
            </div>

            {/* Previous Submissions */}
            {assignment.submitted && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Предыдущие отправки
                </h3>
                <div className="space-y-3">
                  <SubmissionItem date="25 октября, 14:30" grade="На проверке" />
                  <SubmissionItem date="20 октября, 18:45" grade="85/100" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusItem({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
      <span className={`text-sm font-medium ${color || "text-gray-900 dark:text-white"}`}>
        {value}
      </span>
    </div>
  );
}

function SubmissionItem({ date, grade }: { date: string; grade: string }) {
  return (
    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{date}</p>
      <p className="font-medium text-gray-900 dark:text-white">{grade}</p>
    </div>
  );
}
