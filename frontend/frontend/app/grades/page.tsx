import { TrendingUp, TrendingDown, Award, BookOpen } from "lucide-react";

export default function GradesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Оценки</h1>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <SummaryCard
            icon={<Award className="w-6 h-6 text-blue-600" />}
            label="Средний балл"
            value="4.5"
            trend="+0.2"
            trendUp
          />
          <SummaryCard
            icon={<BookOpen className="w-6 h-6 text-green-600" />}
            label="Завершено курсов"
            value="12"
            trend="+2"
            trendUp
          />
          <SummaryCard
            icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
            label="Активных курсов"
            value="5"
            trend="0"
          />
          <SummaryCard
            icon={<Award className="w-6 h-6 text-orange-600" />}
            label="Сертификатов"
            value="8"
            trend="+1"
            trendUp
          />
        </div>

        {/* Grade Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Оценки по курсам
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Курс
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Задания
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Тесты
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Экзамен
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Итоговая оценка
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Статус
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <GradeRow
                  courseName="Основы программирования на Python"
                  assignments="85"
                  tests="90"
                  exam="88"
                  finalGrade="87"
                  status="active"
                />
                <GradeRow
                  courseName="Веб-разработка: HTML, CSS, JavaScript"
                  assignments="92"
                  tests="88"
                  exam="-"
                  finalGrade="90"
                  status="active"
                />
                <GradeRow
                  courseName="Алгоритмы и структуры данных"
                  assignments="78"
                  tests="82"
                  exam="-"
                  finalGrade="80"
                  status="active"
                />
                <GradeRow
                  courseName="Базы данных и SQL"
                  assignments="88"
                  tests="85"
                  exam="-"
                  finalGrade="86"
                  status="active"
                />
                <GradeRow
                  courseName="Введение в Computer Science"
                  assignments="95"
                  tests="92"
                  exam="94"
                  finalGrade="94"
                  status="completed"
                />
                <GradeRow
                  courseName="Дискретная математика"
                  assignments="89"
                  tests="91"
                  exam="90"
                  finalGrade="90"
                  status="completed"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Grade Distribution */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Распределение оценок
            </h3>
            <div className="space-y-3">
              <GradeDistributionBar label="A (90-100)" percentage={35} color="bg-green-500" />
              <GradeDistributionBar label="B (80-89)" percentage={45} color="bg-blue-500" />
              <GradeDistributionBar label="C (70-79)" percentage={15} color="bg-yellow-500" />
              <GradeDistributionBar label="D (60-69)" percentage={5} color="bg-orange-500" />
              <GradeDistributionBar label="F (0-59)" percentage={0} color="bg-red-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Прогресс по семестрам
            </h3>
            <div className="space-y-4">
              <SemesterProgress semester="Семестр 1 (2024)" gpa="4.2" courses={6} />
              <SemesterProgress semester="Семестр 2 (2024)" gpa="4.5" courses={6} />
              <SemesterProgress semester="Семестр 3 (2025)" gpa="4.6" courses={5} inProgress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  icon,
  label,
  value,
  trend,
  trendUp,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              {trendUp ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span
                className={`text-sm font-medium ${
                  trendUp ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend}
              </span>
            </div>
          )}
        </div>
        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">{icon}</div>
      </div>
    </div>
  );
}

function GradeRow({
  courseName,
  assignments,
  tests,
  exam,
  finalGrade,
  status,
}: {
  courseName: string;
  assignments: string;
  tests: string;
  exam: string;
  finalGrade: string;
  status: "active" | "completed";
}) {
  const getGradeColor = (grade: string) => {
    if (grade === "-") return "text-gray-400";
    const numGrade = parseInt(grade);
    if (numGrade >= 90) return "text-green-600 dark:text-green-400";
    if (numGrade >= 80) return "text-blue-600 dark:text-blue-400";
    if (numGrade >= 70) return "text-yellow-600 dark:text-yellow-400";
    return "text-orange-600 dark:text-orange-400";
  };

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900 dark:text-white">{courseName}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`text-sm font-semibold ${getGradeColor(assignments)}`}>
          {assignments}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`text-sm font-semibold ${getGradeColor(tests)}`}>{tests}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`text-sm font-semibold ${getGradeColor(exam)}`}>{exam}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`text-lg font-bold ${getGradeColor(finalGrade)}`}>
          {finalGrade}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            status === "completed"
              ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
              : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
          }`}
        >
          {status === "completed" ? "Завершен" : "В процессе"}
        </span>
      </td>
    </tr>
  );
}

function GradeDistributionBar({
  label,
  percentage,
  color,
}: {
  label: string;
  percentage: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-1">
        <span className="text-gray-700 dark:text-gray-300">{label}</span>
        <span className="font-medium text-gray-900 dark:text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function SemesterProgress({
  semester,
  gpa,
  courses,
  inProgress,
}: {
  semester: string;
  gpa: string;
  courses: number;
  inProgress?: boolean;
}) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-900 dark:text-white">{semester}</h4>
        {inProgress && (
          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
            В процессе
          </span>
        )}
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">GPA: {gpa}</span>
        <span className="text-gray-600 dark:text-gray-400">{courses} курсов</span>
      </div>
    </div>
  );
}
