import Link from "next/link";
import { BookOpen, Users, FileText, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Добро пожаловать в Academix
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Современная платформа для дистанционного обучения. 
          Удобный доступ к курсам, заданиям и оценкам в одном месте.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/register"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Зарегистрироваться
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Войти
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Возможности платформы
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-blue-600" />}
            title="Онлайн курсы"
            description="Доступ к широкому выбору образовательных курсов"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-green-600" />}
            title="Общение"
            description="Форумы и чаты для взаимодействия с преподавателями"
          />
          <FeatureCard
            icon={<FileText className="w-12 h-12 text-purple-600" />}
            title="Ресурсы"
            description="Методические материалы и видеоуроки"
          />
          <FeatureCard
            icon={<Award className="w-12 h-12 text-orange-600" />}
            title="Оценки"
            description="Отслеживание успеваемости и прогресса"
          />
        </div>
      </section>

      {/* News/Announcements Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Новости и объявления
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <NewsCard
              date="25 октября 2025"
              title="Открыта регистрация на осенний семестр"
              description="Начался прием заявок на курсы осеннего семестра 2025-2026 учебного года."
            />
            <NewsCard
              date="20 октября 2025"
              title="Новые курсы по программированию"
              description="Добавлены курсы по Python, JavaScript и Machine Learning."
            />
            <NewsCard
              date="15 октября 2025"
              title="Обновление платформы"
              description="Улучшен интерфейс личного кабинета и добавлены новые функции."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Готовы начать обучение?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к тысячам студентов, которые уже используют Academix для своего образования
        </p>
        <Link
          href="/courses"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Просмотреть курсы
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
}

function NewsCard({ date, title, description }: { date: string; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
      <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{date}</p>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
