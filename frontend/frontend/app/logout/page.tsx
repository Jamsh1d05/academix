"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear authentication tokens/session
    // This is where you would implement your logout logic
    // For example: localStorage.removeItem('token')
    
    // Simulate logout process
    const performLogout = async () => {
      try {
        // Clear any stored tokens or session data
        if (typeof window !== 'undefined') {
          localStorage.removeItem('authToken');
          sessionStorage.clear();
        }
        
        // Optionally call logout API endpoint
        // await fetch('/api/logout', { method: 'POST' });
        
        // Wait a moment before redirecting
        setTimeout(() => {
          router.push('/login');
        }, 1500);
      } catch (error) {
        console.error('Logout error:', error);
        router.push('/login');
      }
    };

    performLogout();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
          <LogOut className="w-10 h-10 text-blue-600 animate-pulse" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Выход из системы...
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Пожалуйста, подождите
        </p>
      </div>
    </div>
  );
}
