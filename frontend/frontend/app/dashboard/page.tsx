import { BookOpen, Calendar, Bell, TrendingUp, Clock, Award } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Добро пожаловать, Студент!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Вот ваша активность на сегодня
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<BookOpen className="w-6 h-6 text-blue-600" />}
            label="Активных курсов"
            value="5"
            bgColor="bg-blue-100 dark:bg-blue-900/30"
          />
          <StatCard
            icon={<Clock className="w-6 h-6 text-orange-600" />}
            label="Заданий на проверке"
            value="3"
            bgColor="bg-orange-100 dark:bg-orange-900/30"
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-green-600" />}
            label="Средний балл"
            value="4.5"
            bgColor="bg-green-100 dark:bg-green-900/30"
          />
          <StatCard
            icon={<Award className="w-6 h-6 text-purple-600" />}
            label="Завершено курсов"
            value="12"
            bgColor="bg-purple-100 dark:bg-purple-900/30"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Courses */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Мои курсы
                </h2>
                <Link
                  href="/my-courses"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
                >
                  Смотреть все
                </Link>
              </div>
              <div className="space-y-4">
                <CourseCard
                  title="Основы программирования на Python"
                  progress={75}
                  nextLesson="Функции и модули"
                  dueDate="Завтра, 10:00"
                />
                <CourseCard
                  title="Веб-разработка: HTML, CSS, JavaScript"
                  progress={60}
                  nextLesson="Responsive дизайн"
                  dueDate="2 дня"
                />
                <CourseCard
                  title="Алгоритмы и структуры данных"
                  progress={45}
                  nextLesson="Деревья и графы"
                  dueDate="Неделя"
                />
              </div>
            </section>

            {/* Recent Assignments */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Недавние задания
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
                <AssignmentItem
                  title="Лабораторная работа №3: ООП"
                  course="Python"
                  status="submitted"
                  deadline="Вчера"
                />
                <AssignmentItem
                  title="Практическое задание: CSS Grid"
                  course="Веб-разработка"
                  status="pending"
                  deadline="Завтра"
                />
                <AssignmentItem
                  title="Домашнее задание: Сортировки"
                  course="Алгоритмы"
                  status="overdue"
                  deadline="2 дня назад"
                />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  События
                </h3>
              </div>
              <div className="space-y-3">
                <EventItem
                  title="Экзамен по Python"
                  date="30 октября"
                  time="14:00"
                />
                <EventItem
                  title="Вебинар: React Hooks"
                  date="1 ноября"
                  time="16:00"
                />
                <EventItem
                  title="Дедлайн проекта"
                  date="5 ноября"
                  time="23:59"
                />
              </div>
              <Link
                href="/calendar"
                className="block text-center mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
              >
                Смотреть календарь
              </Link>
            </section>

            {/* Notifications */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Уведомления
                </h3>
              </div>
              <div className="space-y-3">
                <NotificationItem
                  text="Новый материал в курсе Python"
                  time="2 часа назад"
                  type="info"
                />
                <NotificationItem
                  text="Оценка за задание получена"
                  time="5 часов назад"
                  type="success"
                />
                <NotificationItem
                  text="Скоро дедлайн задания"
                  time="1 день назад"
                  type="warning"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  bgColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${bgColor}`}>{icon}</div>
      </div>
    </div>
  );
}

function CourseCard({
  title,
  progress,
  nextLesson,
  dueDate,
}: {
  title: string;
  progress: number;
  nextLesson: string;
  dueDate: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-400">Прогресс</span>
          <span className="font-medium text-gray-900 dark:text-white">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">Следующий урок:</span>
        <span className="font-medium text-gray-900 dark:text-white">{nextLesson}</span>
      </div>
      <div className="flex items-center justify-between text-sm mt-2">
        <span className="text-gray-600 dark:text-gray-400">Дедлайн:</span>
        <span className="font-medium text-orange-600">{dueDate}</span>
      </div>
    </div>
  );
}

function AssignmentItem({
  title,
  course,
  status,
  deadline,
}: {
  title: string;
  course: string;
  status: "submitted" | "pending" | "overdue";
  deadline: string;
}) {
  const statusConfig = {
    submitted: { label: "Отправлено", color: "text-green-600 bg-green-100 dark:bg-green-900/30" },
    pending: { label: "В ожидании", color: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30" },
    overdue: { label: "Просрочено", color: "text-red-600 bg-red-100 dark:bg-red-900/30" },
  };

  return (
    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 dark:text-white mb-1">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{course}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusConfig[status].color}`}>
          {statusConfig[status].label}
        </span>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{deadline}</p>
    </div>
  );
}

function EventItem({ title, date, time }: { title: string; date: string; time: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
      <div className="flex-1">
        <p className="font-medium text-gray-900 dark:text-white text-sm">{title}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {date} в {time}
        </p>
      </div>
    </div>
  );
}

function NotificationItem({
  text,
  time,
  type,
}: {
  text: string;
  time: string;
  type: "info" | "success" | "warning";
}) {
  const colors = {
    info: "bg-blue-100 dark:bg-blue-900/30",
    success: "bg-green-100 dark:bg-green-900/30",
    warning: "bg-orange-100 dark:bg-orange-900/30",
  };

  return (
    <div className={`p-3 rounded-lg ${colors[type]}`}>
      <p className="text-sm text-gray-900 dark:text-white mb-1">{text}</p>
      <p className="text-xs text-gray-600 dark:text-gray-400">{time}</p>
    </div>
  );
}
