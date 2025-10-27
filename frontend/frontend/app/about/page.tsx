import { Target, Heart, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О нас</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Academix - современная образовательная платформа для эффективного дистанционного обучения
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Наша миссия
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Мы стремимся предоставить доступное и качественное образование для каждого студента. 
            Наша платформа объединяет передовые технологии и лучшие образовательные практики, 
            чтобы сделать процесс обучения максимально эффективным и удобным.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Наши ценности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Target className="w-12 h-12 text-blue-600" />}
              title="Качество"
              description="Высокие стандарты образовательного контента и платформы"
            />
            <ValueCard
              icon={<Heart className="w-12 h-12 text-red-600" />}
              title="Забота"
              description="Индивидуальный подход к каждому студенту"
            />
            <ValueCard
              icon={<Users className="w-12 h-12 text-green-600" />}
              title="Сообщество"
              description="Создание активного образовательного сообщества"
            />
            <ValueCard
              icon={<Globe className="w-12 h-12 text-purple-600" />}
              title="Доступность"
              description="Образование должно быть доступно каждому"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <StatCard number="10,000+" label="Студентов" />
          <StatCard number="500+" label="Курсов" />
          <StatCard number="200+" label="Преподавателей" />
          <StatCard number="50+" label="Специальностей" />
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              <strong>Email:</strong> info@academix.edu
            </p>
            <p className="text-lg mb-4">
              <strong>Телефон:</strong> +7 (700) 123-45-67
            </p>
            <p className="text-lg">
              <strong>Адрес:</strong> г. Астана, ул. Мангилик Ел, 55/11
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600 dark:text-gray-300 text-lg">{label}</div>
    </div>
  );
}
