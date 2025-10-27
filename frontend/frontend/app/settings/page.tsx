"use client";

import { Lock, Bell, Globe, Moon, Save } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    courseUpdates: true,
    assignmentReminders: true,
    language: "ru",
    theme: "system",
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Настройки</h1>

        <div className="max-w-3xl space-y-6">
          {/* Account Settings */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Безопасность аккаунта
              </h2>
            </div>
            <div className="space-y-4">
              <SettingItem
                label="Текущий пароль"
                description="••••••••"
                action={
                  <button className="px-4 py-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
                    Изменить
                  </button>
                }
              />
              <SettingItem
                label="Двухфакторная аутентификация"
                description="Дополнительная защита аккаунта"
                action={
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Включить
                  </button>
                }
              />
            </div>
          </section>

          {/* Notifications */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Уведомления</h2>
            </div>
            <div className="space-y-4">
              <ToggleSetting
                label="Email уведомления"
                description="Получать уведомления на почту"
                checked={settings.emailNotifications}
                onChange={(checked) =>
                  setSettings({ ...settings, emailNotifications: checked })
                }
              />
              <ToggleSetting
                label="Push уведомления"
                description="Уведомления в браузере"
                checked={settings.pushNotifications}
                onChange={(checked) =>
                  setSettings({ ...settings, pushNotifications: checked })
                }
              />
              <ToggleSetting
                label="Обновления курсов"
                description="Уведомления о новых материалах в курсах"
                checked={settings.courseUpdates}
                onChange={(checked) => setSettings({ ...settings, courseUpdates: checked })}
              />
              <ToggleSetting
                label="Напоминания о заданиях"
                description="Уведомления о приближающихся дедлайнах"
                checked={settings.assignmentReminders}
                onChange={(checked) =>
                  setSettings({ ...settings, assignmentReminders: checked })
                }
              />
            </div>
          </section>

          {/* Appearance */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
              <Moon className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Внешний вид</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Тема оформления
                </label>
                <select
                  value={settings.theme}
                  onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="light">Светлая</option>
                  <option value="dark">Темная</option>
                  <option value="system">Системная</option>
                </select>
              </div>
            </div>
          </section>

          {/* Language & Region */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Язык и регион</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Язык интерфейса
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="ru">Русский</option>
                  <option value="kk">Қазақша</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Часовой пояс
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white">
                  <option value="Asia/Almaty">(GMT+6) Астана, Алматы</option>
                  <option value="Asia/Aqtobe">(GMT+5) Актобе</option>
                  <option value="Asia/Aqtau">(GMT+5) Актау</option>
                </select>
              </div>
            </div>
          </section>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
              Отменить
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <Save className="w-5 h-5" />
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingItem({
  label,
  description,
  action,
}: {
  label: string;
  description: string;
  action: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white">{label}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      {action}
    </div>
  );
}

function ToggleSetting({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white">{label}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
