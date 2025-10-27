"use client";

import { MessageSquare, Search, Send } from "lucide-react";
import { useState } from "react";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "Проф. Иванов И.И.",
      lastMessage: "Отлично справились с заданием!",
      time: "10:30",
      unread: 0,
      avatar: "ИИ",
    },
    {
      id: 2,
      name: "Доц. Петрова М.А.",
      lastMessage: "Когда сможете сдать проект?",
      time: "Вчера",
      unread: 2,
      avatar: "ПМ",
    },
    {
      id: 3,
      name: "Группа IT-301",
      lastMessage: "Кто готов к экзамену завтра?",
      time: "2 дня назад",
      unread: 5,
      avatar: "IT",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Проф. Иванов И.И.",
      text: "Здравствуйте! Проверил вашу лабораторную работу.",
      time: "10:25",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Вы",
      text: "Здравствуйте! Спасибо большое!",
      time: "10:28",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Проф. Иванов И.И.",
      text: "Отлично справились с заданием! Оценка: 95/100",
      time: "10:30",
      isOwn: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Сообщения</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-3 h-[600px]">
            {/* Chat List */}
            <div className="border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Поиск сообщений..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      selectedChat === chat.id ? "bg-blue-50 dark:bg-blue-900/20" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        {chat.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                            {chat.name}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">
                            {chat.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {chat.lastMessage}
                          </p>
                          {chat.unread > 0 && (
                            <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full flex-shrink-0">
                              {chat.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="md:col-span-2 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {chats.find((c) => c.id === selectedChat)?.avatar}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900 dark:text-white">
                      {chats.find((c) => c.id === selectedChat)?.name}
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Онлайн</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.isOwn
                            ? "bg-blue-600 text-white"
                            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        }`}
                      >
                        {!msg.isOwn && (
                          <p className="text-xs font-semibold mb-1 opacity-70">{msg.sender}</p>
                        )}
                        <p className="text-sm">{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.isOwn ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Send message:", message);
                    setMessage("");
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Введите сообщение..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
