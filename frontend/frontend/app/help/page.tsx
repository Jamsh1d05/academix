"use client";

import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      category: "Начало работы",
      questions: [
        {
          q: "Как зарегистрироваться на платформе?",
          a: "Нажмите кнопку 'Зарегистрироваться' в правом верхнем углу, заполните форму с вашими данными и подтвердите email адрес.",
        },
        {
          q: "Как войти в систему?",
          a: "Используйте кнопку 'Войти' и введите ваш email и пароль. Если у вас корпоративный аккаунт AITU, вы можете войти через него.",
        },
        {
          q: "Что делать, если забыл пароль?",
          a: "На странице входа нажмите 'Забыли пароль?', введите ваш email, и мы отправим ссылку для восстановления пароля.",
        },
      ],
    },
    {
      category: "Курсы",
      questions: [
        {
          q: "Как записаться на курс?",
          a: "Перейдите в каталог курсов, выберите интересующий курс и нажмите кнопку 'Записаться на курс'. После авторизации курс появится в вашем личном кабинете.",
        },
        {
          q: "Могу ли я отменить запись на курс?",
          a: "Да, в разделе 'Мои курсы' вы можете отказаться от курса до начала обучения. После начала курса обратитесь к администратору.",
        },
        {
          q: "Как получить доступ к материалам курса?",
          a: "После записи на курс все материалы доступны в разделе 'Мои курсы'. Нажмите на курс, чтобы увидеть лекции, задания и дополнительные материалы.",
        },
      ],
    },
    {
      category: "Задания и тесты",
      questions: [
        {
          q: "Как сдать задание?",
          a: "Откройте задание в курсе, прикрепите файл с выполненной работой или введите ответ в текстовое поле, затем нажмите 'Отправить'.",
        },
        {
          q: "Могу ли я пересдать задание?",
          a: "Это зависит от настроек курса. Обычно можно отправить задание повторно до дедлайна. После дедлайна обратитесь к преподавателю.",
        },
        {
          q: "Как проходить тесты?",
          a: "В разделе курса выберите тест, прочитайте инструкции и нажмите 'Начать тест'. После ответа на все вопросы нажмите 'Завершить тест'.",
        },
      ],
    },
    {
      category: "Оценки и сертификаты",
      questions: [
        {
          q: "Где посмотреть свои оценки?",
          a: "Все оценки доступны в разделе 'Оценки' в личном кабинете. Также вы можете увидеть оценки по конкретному курсу в его разделе.",
        },
        {
          q: "Как получить сертификат?",
          a: "После успешного завершения курса и выполнения всех требований сертификат автоматически появится в вашем профиле для скачивания.",
        },
        {
          q: "Что делать, если оценка выставлена неправильно?",
          a: "Свяжитесь с преподавателем курса через систему сообщений или форум курса для уточнения оценки.",
        },
      ],
    },
    {
      category: "Техническая поддержка",
      questions: [
        {
          q: "Что делать, если не загружается видео?",
          a: "Проверьте ваше интернет-соединение, попробуйте обновить страницу или использовать другой браузер. Если проблема сохраняется, обратитесь в техподдержку.",
        },
        {
          q: "Как связаться с технической поддержкой?",
          a: "Напишите на support@academix.edu или используйте форму обратной связи в разделе 'Контакты'. Мы отвечаем в течение 24 часов.",
        },
        {
          q: "Какие браузеры поддерживаются?",
          a: "Платформа работает на всех современных браузерах: Chrome, Firefox, Safari, Edge. Рекомендуем использовать последние версии.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Помощь и FAQ</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Ответы на часто задаваемые вопросы и инструкции по работе с платформой
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Поиск по вопросам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <QuickLinkCard
            title="Руководство для новичков"
            description="Пошаговая инструкция по началу работы с платформой"
            link="#"
          />
          <QuickLinkCard
            title="Видео-уроки"
            description="Обучающие видео по работе с основными функциями"
            link="#"
          />
          <QuickLinkCard
            title="Связаться с поддержкой"
            description="Не нашли ответ? Напишите нам"
            link="/contact"
          />
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((faq, faqIndex) => {
                  const globalIndex = sectionIndex * 100 + faqIndex;
                  return (
                    <FaqItem
                      key={globalIndex}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={openFaq === globalIndex}
                      onClick={() => toggleFaq(globalIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function QuickLinkCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </a>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="font-medium text-gray-900 dark:text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
          <p className="text-gray-700 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}
