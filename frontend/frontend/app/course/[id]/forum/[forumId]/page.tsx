"use client";

import { ArrowLeft, MessageSquare, ThumbsUp, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForumPage({ params }: { params: { id: string; forumId: string } }) {
  const [newPost, setNewPost] = useState("");

  const forum = {
    id: params.forumId,
    title: "Общее обсуждение курса",
    course: "Основы программирования на Python",
    description: "Задавайте вопросы, делитесь опытом и помогайте друг другу",
  };

  const posts = [
    {
      id: 1,
      author: "Студент А.",
      avatar: "СА",
      content: "Подскажите, как правильно организовать код в лабораторной работе №3?",
      time: "2 часа назад",
      likes: 5,
      replies: 3,
    },
    {
      id: 2,
      author: "Проф. Иванов И.И.",
      avatar: "ИИ",
      content:
        "Рекомендую ознакомиться с дополнительными материалами по ООП. Загрузил новые примеры в раздел ресурсов.",
      time: "1 день назад",
      likes: 12,
      replies: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Link
          href={`/course/${params.id}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Вернуться к курсу
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Forum Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {forum.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{forum.course}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{forum.description}</p>
          </div>

          {/* New Post */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Создать новую тему
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("New post:", newPost);
                setNewPost("");
              }}
            >
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none mb-4"
                placeholder="Напишите ваш вопрос или сообщение..."
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Send className="w-4 h-4" />
                Опубликовать
              </button>
            </form>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {post.author}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.time}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.replies} ответов</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
