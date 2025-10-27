"use client";

import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 27)); // October 27, 2025

  const events = [
    {
      id: 1,
      title: "Экзамен по Python",
      date: "2025-10-30",
      time: "14:00",
      type: "exam",
      color: "red",
    },
    {
      id: 2,
      title: "Вебинар: React Hooks",
      date: "2025-11-01",
      time: "16:00",
      type: "webinar",
      color: "blue",
    },
    {
      id: 3,
      title: "Дедлайн: Лабораторная №4",
      date: "2025-11-05",
      time: "23:59",
      type: "deadline",
      color: "orange",
    },
    {
      id: 4,
      title: "Лекция: Базы данных",
      date: "2025-10-28",
      time: "10:00",
      type: "lecture",
      color: "green",
    },
  ];

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Календарь</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <Plus className="w-5 h-5" />
            Добавить событие
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={previousMonth}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 py-2"
                >
                  {day}
                </div>
              ))}
              
              {/* Calendar days would be generated here */}
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 2; // Start from -2 to show previous month days
                const isToday = day === 27;
                const hasEvent = day === 28 || day === 30;
                
                return (
                  <button
                    key={i}
                    className={`aspect-square p-2 rounded-lg text-sm ${
                      day > 0 && day <= 31
                        ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        : "text-gray-400 dark:text-gray-600"
                    } ${isToday ? "bg-blue-600 text-white hover:bg-blue-700" : ""} ${
                      hasEvent && !isToday ? "border-2 border-orange-400" : ""
                    }`}
                  >
                    {day > 0 && day <= 31 ? day : ""}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-4">
                <LegendItem color="bg-red-500" label="Экзамены" />
                <LegendItem color="bg-blue-500" label="Вебинары" />
                <LegendItem color="bg-orange-500" label="Дедлайны" />
                <LegendItem color="bg-green-500" label="Лекции" />
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Предстоящие события
            </h3>
            <div className="space-y-3">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
    </div>
  );
}

function EventCard({ event }: { event: any }) {
  const colorClasses = {
    red: "border-red-500 bg-red-50 dark:bg-red-900/20",
    blue: "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
    orange: "border-orange-500 bg-orange-50 dark:bg-orange-900/20",
    green: "border-green-500 bg-green-50 dark:bg-green-900/20",
  };

  return (
    <div className={`p-3 rounded-lg border-l-4 ${colorClasses[event.color as keyof typeof colorClasses]}`}>
      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
        {event.title}
      </h4>
      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
        <CalendarIcon className="w-3 h-3" />
        <span>{new Date(event.date).toLocaleDateString("ru-RU")}</span>
        <span>•</span>
        <span>{event.time}</span>
      </div>
    </div>
  );
}
