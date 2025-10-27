"use client";

import { User, Mail, Phone, MapPin, Calendar, Edit, Camera } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan.ivanov@example.com",
    phone: "+7 (700) 123-45-67",
    location: "Астана, Казахстан",
    dateOfBirth: "15 января 1998",
    studentId: "STU202400123",
    faculty: "Информационные технологии",
    course: "3 курс",
    group: "IT-301",
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600" />
            <div className="px-8 pb-8">
              <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 mb-4">
                <div className="relative mb-4 md:mb-0">
                  <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-600 dark:text-gray-400" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="md:ml-6 text-center md:text-left flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {profile.firstName} {profile.lastName}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">{profile.studentId}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Edit className="w-4 h-4" />
                  {isEditing ? "Сохранить" : "Редактировать"}
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Личная информация
              </h2>
              <div className="space-y-4">
                <InfoField
                  icon={<User className="w-5 h-5 text-gray-500" />}
                  label="Имя"
                  value={profile.firstName}
                  isEditing={isEditing}
                />
                <InfoField
                  icon={<User className="w-5 h-5 text-gray-500" />}
                  label="Фамилия"
                  value={profile.lastName}
                  isEditing={isEditing}
                />
                <InfoField
                  icon={<Mail className="w-5 h-5 text-gray-500" />}
                  label="Email"
                  value={profile.email}
                  isEditing={isEditing}
                />
                <InfoField
                  icon={<Phone className="w-5 h-5 text-gray-500" />}
                  label="Телефон"
                  value={profile.phone}
                  isEditing={isEditing}
                />
                <InfoField
                  icon={<MapPin className="w-5 h-5 text-gray-500" />}
                  label="Местоположение"
                  value={profile.location}
                  isEditing={isEditing}
                />
                <InfoField
                  icon={<Calendar className="w-5 h-5 text-gray-500" />}
                  label="Дата рождения"
                  value={profile.dateOfBirth}
                  isEditing={isEditing}
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Академическая информация
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    ID студента
                  </label>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {profile.studentId}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    Факультет
                  </label>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {profile.faculty}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Курс</label>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {profile.course}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Группа</label>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {profile.group}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Статистика
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <StatItem label="Завершено курсов" value="12" />
                  <StatItem label="Активных курсов" value="5" />
                  <StatItem label="Средний балл" value="4.5" />
                  <StatItem label="Часов обучения" value="240" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoField({
  icon,
  label,
  value,
  isEditing,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isEditing: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">{icon}</div>
      <div className="flex-1">
        <label className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
          {label}
        </label>
        {isEditing ? (
          <input
            type="text"
            defaultValue={value}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        ) : (
          <p className="text-gray-900 dark:text-white font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</p>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{label}</p>
    </div>
  );
}
