"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  GraduationCap,
  MessageSquare,
  User,
  Settings,
  Users,
  BarChart3,
} from "lucide-react";

interface SidebarProps {
  isAdmin?: boolean;
}

export default function Sidebar({ isAdmin = false }: SidebarProps) {
  const pathname = usePathname();

  const studentLinks = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Дашборд" },
    { href: "/my-courses", icon: BookOpen, label: "Мои курсы" },
    { href: "/calendar", icon: Calendar, label: "Календарь" },
    { href: "/grades", icon: GraduationCap, label: "Оценки" },
    { href: "/messages", icon: MessageSquare, label: "Сообщения" },
    { href: "/profile", icon: User, label: "Профиль" },
    { href: "/settings", icon: Settings, label: "Настройки" },
  ];

  const adminLinks = [
    { href: "/admin/courses", icon: BookOpen, label: "Курсы" },
    { href: "/admin/users", icon: Users, label: "Пользователи" },
    { href: "/admin/reports", icon: BarChart3, label: "Отчёты" },
    { href: "/admin/settings", icon: Settings, label: "Настройки" },
  ];

  const links = isAdmin ? adminLinks : studentLinks;

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          {isAdmin ? "Админ-панель" : "Меню"}
        </h2>
        <nav className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
