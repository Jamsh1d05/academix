import { FileText, Video, BookOpen, Download } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Ресурсы</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Методические материалы, видеоуроки и полезные статьи для обучения
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <CategoryCard
            icon={<FileText className="w-12 h-12 text-blue-600" />}
            title="Методички"
            count={120}
            description="Учебные пособия и руководства"
          />
          <CategoryCard
            icon={<Video className="w-12 h-12 text-red-600" />}
            title="Видеоуроки"
            count={85}
            description="Обучающие видеоматериалы"
          />
          <CategoryCard
            icon={<BookOpen className="w-12 h-12 text-green-600" />}
            title="Статьи"
            count={200}
            description="Полезные статьи и материалы"
          />
        </div>

        {/* Resources List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Популярные ресурсы
          </h2>
          
          <ResourceItem
            type="Методичка"
            title="Введение в объектно-ориентированное программирование"
            description="Полное руководство по основам ООП с примерами на Python"
            author="Проф. Иванов И.И."
            date="15 октября 2025"
            size="2.5 MB"
            icon={<FileText className="w-6 h-6 text-blue-600" />}
          />
          
          <ResourceItem
            type="Видео"
            title="Основы веб-разработки: HTML и CSS"
            description="Видеокурс для начинающих разработчиков (10 уроков)"
            author="Доц. Петрова М.А."
            date="12 октября 2025"
            size="1.2 GB"
            icon={<Video className="w-6 h-6 text-red-600" />}
          />
          
          <ResourceItem
            type="Методичка"
            title="Алгоритмы сортировки и поиска"
            description="Подробный разбор классических алгоритмов с временной сложностью"
            author="Доц. Сидоров П.П."
            date="8 октября 2025"
            size="1.8 MB"
            icon={<FileText className="w-6 h-6 text-blue-600" />}
          />
          
          <ResourceItem
            type="Статья"
            title="Современные подходы к машинному обучению"
            description="Обзор актуальных техник и фреймворков ML"
            author="Проф. Козлов А.В."
            date="5 октября 2025"
            size="850 KB"
            icon={<BookOpen className="w-6 h-6 text-green-600" />}
          />
          
          <ResourceItem
            type="Видео"
            title="SQL для начинающих: от основ к практике"
            description="Практический курс по работе с базами данных (15 уроков)"
            author="Проф. Новикова Е.С."
            date="1 октября 2025"
            size="2.1 GB"
            icon={<Video className="w-6 h-6 text-red-600" />}
          />
          
          <ResourceItem
            type="Методичка"
            title="React: компоненты и хуки"
            description="Современная разработка интерфейсов с React"
            author="Доц. Морозов Д.К."
            date="28 сентября 2025"
            size="3.2 MB"
            icon={<FileText className="w-6 h-6 text-blue-600" />}
          />
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  icon,
  title,
  count,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{count}</h3>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
}

interface ResourceItemProps {
  type: string;
  title: string;
  description: string;
  author: string;
  date: string;
  size: string;
  icon: React.ReactNode;
}

function ResourceItem({ type, title, description, author, date, size, icon }: ResourceItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
          {icon}
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
              {type}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p className="font-medium">{author}</p>
              <p>Размер: {size}</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Скачать</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
