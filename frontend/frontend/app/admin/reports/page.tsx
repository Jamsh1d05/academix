import { BarChart3, TrendingUp, Users, BookOpen, Download } from "lucide-react";

export default function AdminReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Отчёты и статистика
          </h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <Download className="w-5 h-5" />
            Экспорт отчёта
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Users className="w-6 h-6 text-blue-600" />}
            label="Всего студентов"
            value="10,234"
            trend="+12%"
            trendUp
          />
          <StatCard
            icon={<BookOpen className="w-6 h-6 text-green-600" />}
            label="Активных курсов"
            value="156"
            trend="+5%"
            trendUp
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
            label="Средняя посещаемость"
            value="87%"
            trend="+3%"
            trendUp
          />
          <StatCard
            icon={<BarChart3 className="w-6 h-6 text-orange-600" />}
            label="Завершено курсов"
            value="1,245"
            trend="+18%"
            trendUp
          />
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Регистрации по месяцам
            </h2>
            <div className="h-64 flex items-end justify-around gap-2">
              {[65, 78, 82, 90, 75, 88, 92, 85, 95, 87, 93, 98].map((height, i) => (
                <div key={i} className="flex-1 bg-blue-600 rounded-t" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Популярные курсы
            </h2>
            <div className="space-y-3">
              <CourseBar title="Python" students={1234} percentage={85} />
              <CourseBar title="Web Development" students={987} percentage={68} />
              <CourseBar title="Machine Learning" students={654} percentage={45} />
              <CourseBar title="Data Science" students={543} percentage={37} />
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Недавняя активность
          </h2>
          <div className="space-y-3">
            <ActivityItem
              action="Новая регистрация"
              user="Иван Иванов"
              time="5 минут назад"
            />
            <ActivityItem action="Завершён курс" user="Мария Петрова" time="15 минут назад" />
            <ActivityItem action="Создан курс" user="Проф. Сидоров" time="30 минут назад" />
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
  trend,
  trendUp,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
          <p className={`text-sm mt-1 ${trendUp ? "text-green-600" : "text-red-600"}`}>{trend}</p>
        </div>
        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">{icon}</div>
      </div>
    </div>
  );
}

function CourseBar({
  title,
  students,
  percentage,
}: {
  title: string;
  students: number;
  percentage: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-1">
        <span className="text-gray-700 dark:text-gray-300">{title}</span>
        <span className="text-gray-600 dark:text-gray-400">{students} студентов</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function ActivityItem({ action, user, time }: { action: string; user: string; time: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
      <div>
        <p className="font-medium text-gray-900 dark:text-white">{action}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{user}</p>
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400">{time}</span>
    </div>
  );
}
