import { BookOpen, Clock, Star, Filter } from "lucide-react";
import Link from "next/link";

export default function MyCoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Мои курсы
          </h1>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex gap-2">
              <FilterButton label="Все" active />
              <FilterButton label="В процессе" />
              <FilterButton label="Завершенные" />
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MyCourseCard
            title="Основы программирования на Python"
            instructor="Проф. Иванов И.И."
            progress={75}
            nextDeadline="Завтра, 10:00"
            status="active"
            courseId="1"
          />
          <MyCourseCard
            title="Веб-разработка: HTML, CSS, JavaScript"
            instructor="Доц. Петрова М.А."
            progress={60}
            nextDeadline="2 дня"
            status="active"
            courseId="2"
          />
          <MyCourseCard
            title="Алгоритмы и структуры данных"
            instructor="Доц. Козлов А.В."
            progress={45}
            nextDeadline="Неделя"
            status="active"
            courseId="3"
          />
          <MyCourseCard
            title="Базы данных и SQL"
            instructor="Проф. Новикова Е.С."
            progress={30}
            nextDeadline="5 дней"
            status="active"
            courseId="4"
          />
          <MyCourseCard
            title="Введение в Computer Science"
            instructor="Проф. Сидоров П.П."
            progress={100}
            status="completed"
            courseId="5"
          />
        </div>
      </div>
    </div>
  );
}

function FilterButton({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        active
          ? "bg-blue-600 text-white"
          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
      }`}
    >
      {label}
    </button>
  );
}

interface MyCourseCardProps {
  title: string;
  instructor: string;
  progress: number;
  nextDeadline?: string;
  status: "active" | "completed";
  courseId: string;
}

function MyCourseCard({
  title,
  instructor,
  progress,
  nextDeadline,
  status,
  courseId,
}: MyCourseCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center relative">
        <BookOpen className="w-16 h-16 text-white opacity-50" />
        {status === "completed" && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Завершен
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{instructor}</p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">Прогресс</span>
            <span className="font-medium text-gray-900 dark:text-white">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                progress === 100 ? "bg-green-600" : "bg-blue-600"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {nextDeadline && status === "active" && (
          <div className="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-4">
            <Clock className="w-4 h-4" />
            <span>Дедлайн: {nextDeadline}</span>
          </div>
        )}

        <Link
          href={`/course/${courseId}`}
          className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {status === "active" ? "Продолжить" : "Просмотреть"}
        </Link>
      </div>
    </div>
  );
}
