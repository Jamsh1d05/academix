import { BookOpen, Video, FileText, MessageSquare, Users, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export default function CoursePage({ params }: { params: { id: string } }) {
  // В реальном приложении данные будут загружаться из API
  const course = {
    id: params.id,
    title: "Основы программирования на Python",
    instructor: "Проф. Иванов И.И.",
    description:
      "Изучите основы программирования с помощью Python. Этот курс охватывает все от базового синтаксиса до объектно-ориентированного программирования.",
    progress: 75,
    enrolled: 1234,
    duration: "12 недель",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl mb-4">{course.description}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{course.enrolled} студентов</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Прогресс курса
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {course.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Modules */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Материалы курса
              </h2>
              <div className="space-y-4">
                <ModuleItem
                  number="1"
                  title="Введение в Python"
                  lessons={5}
                  duration="2 часа"
                  completed
                />
                <ModuleItem
                  number="2"
                  title="Переменные и типы данных"
                  lessons={6}
                  duration="2.5 часа"
                  completed
                />
                <ModuleItem
                  number="3"
                  title="Условия и циклы"
                  lessons={7}
                  duration="3 часа"
                  active
                />
                <ModuleItem
                  number="4"
                  title="Функции и модули"
                  lessons={8}
                  duration="3.5 часа"
                  locked
                />
                <ModuleItem
                  number="5"
                  title="Работа с файлами"
                  lessons={6}
                  duration="2.5 часа"
                  locked
                />
              </div>
            </section>

            {/* Assignments */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Задания</h2>
              <div className="space-y-3">
                <AssignmentCard
                  title="Лабораторная работа №1: Hello World"
                  dueDate="Завершено"
                  grade="95/100"
                  status="graded"
                  id="1"
                />
                <AssignmentCard
                  title="Лабораторная работа №2: Калькулятор"
                  dueDate="Завершено"
                  grade="88/100"
                  status="graded"
                  id="2"
                />
                <AssignmentCard
                  title="Лабораторная работа №3: ООП"
                  dueDate="Завтра, 23:59"
                  status="pending"
                  id="3"
                />
                <AssignmentCard
                  title="Лабораторная работа №4: Файловая система"
                  dueDate="5 ноября"
                  status="upcoming"
                  id="4"
                />
              </div>
            </section>

            {/* Forum */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Обсуждения курса
                </h2>
                <Link
                  href={`/course/${params.id}/forum/1`}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
                >
                  Смотреть все
                </Link>
              </div>
              <div className="space-y-3">
                <ForumPost
                  title="Вопрос по лабораторной работе №3"
                  author="Студент А."
                  replies={5}
                  time="2 часа назад"
                />
                <ForumPost
                  title="Рекомендации по дополнительным материалам"
                  author="Проф. Иванов И.И."
                  replies={12}
                  time="1 день назад"
                />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Быстрые ссылки
              </h3>
              <div className="space-y-2">
                <QuickLink icon={<Video />} label="Видеолекции" />
                <QuickLink icon={<FileText />} label="Материалы" />
                <QuickLink icon={<MessageSquare />} label="Форум" />
                <QuickLink icon={<Calendar />} label="Расписание" />
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Предстоящие события
              </h3>
              <div className="space-y-3">
                <EventItem date="30 окт" title="Экзамен" time="14:00" />
                <EventItem date="5 ноя" title="Дедлайн ЛР №4" time="23:59" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleItem({
  number,
  title,
  lessons,
  duration,
  completed,
  active,
  locked,
}: {
  number: string;
  title: string;
  lessons: number;
  duration: string;
  completed?: boolean;
  active?: boolean;
  locked?: boolean;
}) {
  return (
    <div
      className={`p-4 border rounded-lg ${
        active
          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
          : completed
          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
          : "border-gray-200 dark:border-gray-700"
      } ${locked ? "opacity-50" : "hover:shadow-md transition-shadow cursor-pointer"}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
            completed
              ? "bg-green-600 text-white"
              : active
              ? "bg-blue-600 text-white"
              : "bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
          }`}
        >
          {number}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{lessons} уроков</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
        </div>
        {locked && (
          <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
            Заблокировано
          </span>
        )}
      </div>
    </div>
  );
}

function AssignmentCard({
  title,
  dueDate,
  grade,
  status,
  id,
}: {
  title: string;
  dueDate: string;
  grade?: string;
  status: "graded" | "pending" | "upcoming";
  id: string;
}) {
  const statusConfig = {
    graded: { color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200" },
    pending: { color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200" },
    upcoming: { color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200" },
  };

  return (
    <Link
      href={`/course/1/assign/${id}`}
      className="block p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 dark:text-white mb-1">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{dueDate}</p>
        </div>
        {grade ? (
          <span className="text-lg font-bold text-green-600 dark:text-green-400">{grade}</span>
        ) : (
          <span className={`text-xs px-2 py-1 rounded-full ${statusConfig[status].color}`}>
            {status === "pending" ? "В ожидании" : "Предстоит"}
          </span>
        )}
      </div>
    </Link>
  );
}

function ForumPost({
  title,
  author,
  replies,
  time,
}: {
  title: string;
  author: string;
  replies: number;
  time: string;
}) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{title}</h4>
      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <span>{author}</span>
        <span>•</span>
        <span>{replies} ответов</span>
        <span>•</span>
        <span>{time}</span>
      </div>
    </div>
  );
}

function QuickLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
      <div className="text-blue-600 dark:text-blue-400">{icon}</div>
      <span className="text-gray-900 dark:text-white">{label}</span>
    </button>
  );
}

function EventItem({ date, title, time }: { date: string; title: string; time: string }) {
  return (
    <div className="flex gap-3">
      <div className="text-center">
        <div className="text-xs text-gray-600 dark:text-gray-400">{date}</div>
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900 dark:text-white text-sm">{title}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{time}</p>
      </div>
    </div>
  );
}
