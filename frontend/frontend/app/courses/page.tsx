import { BookOpen, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Каталог курсов</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Выберите курс и начните обучение уже сегодня
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <FilterButton label="Все курсы" active />
          <FilterButton label="Программирование" />
          <FilterButton label="Математика" />
          <FilterButton label="Физика" />
          <FilterButton label="Языки" />
          <FilterButton label="Бизнес" />
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            title="Основы программирования на Python"
            instructor="Проф. Иванов И.И."
            duration="12 недель"
            students={1234}
            rating={4.8}
            image="/api/placeholder/400/250"
            level="Начальный"
          />
          <CourseCard
            title="Веб-разработка: HTML, CSS, JavaScript"
            instructor="Доц. Петрова М.А."
            duration="10 недель"
            students={987}
            rating={4.9}
            image="/api/placeholder/400/250"
            level="Начальный"
          />
          <CourseCard
            title="Машинное обучение и искусственный интеллект"
            instructor="Проф. Сидоров П.П."
            duration="16 недель"
            students={654}
            rating={4.7}
            image="/api/placeholder/400/250"
            level="Продвинутый"
          />
          <CourseCard
            title="Алгоритмы и структуры данных"
            instructor="Доц. Козлов А.В."
            duration="14 недель"
            students={876}
            rating={4.8}
            image="/api/placeholder/400/250"
            level="Средний"
          />
          <CourseCard
            title="Базы данных и SQL"
            instructor="Проф. Новикова Е.С."
            duration="8 недель"
            students={543}
            rating={4.6}
            image="/api/placeholder/400/250"
            level="Средний"
          />
          <CourseCard
            title="Мобильная разработка: React Native"
            instructor="Доц. Морозов Д.К."
            duration="12 недель"
            students={432}
            rating={4.9}
            image="/api/placeholder/400/250"
            level="Продвинутый"
          />
        </div>
      </section>
    </div>
  );
}

function FilterButton({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`px-6 py-2 rounded-full font-medium transition-colors ${
        active
          ? "bg-blue-600 text-white"
          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
      }`}
    >
      {label}
    </button>
  );
}

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  level: string;
}

function CourseCard({ title, instructor, duration, students, rating, level }: CourseCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
        <BookOpen className="w-20 h-20 text-white opacity-50" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            {level}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{instructor}</p>
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>
        <Link
          href="/login"
          className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Записаться на курс
        </Link>
      </div>
    </div>
  );
}
