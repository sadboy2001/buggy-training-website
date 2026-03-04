import React from "react";
import { Link, useLocation } from "react-router-dom";
import { User } from "../types";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  user: User | null;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  onCartClick,
  searchQuery,
  onSearchChange,
  user,
}) => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Главная" },
    { path: "/catalog", label: "Каталог" },
    { path: "/promotions", label: "Акци" }, // БАГ: опечатка "Акци" вместо "Акции"
    { path: "/delivery", label: "Доставка" },
    { path: "/contacts", label: "Контакты" },
    { path: "/about", label: "О нас" },
  ];

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // БАГ: поиск срабатывает по Escape вместо Enter
    if (e.key === "Escape") {
      // Должен быть Enter
      const form = e.currentTarget.closest("form");
      if (form) form.requestSubmit();
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-100 text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>📞 8-000-000-00-00</span> {/* БАГ: нерабочий номер */}
            <span className="hidden sm:inline">🕐 Ежедневно с 9:00 до 21:00</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/delivery" className="hover:text-gray-900">Доставка</Link>
            <Link to="/warranty" className="hover:text-gray-900 underline">Гарантия</Link> {/* БАГ: несогласованный стиль */}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - БАГ: не кликабельный */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">
              Tech<span className="text-blue-600">Shop</span>
            </h1>
            <p className="text-xs text-gray-500">Магазин TechStore</p> {/* БАГ: противоречие в названии */}
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-4">
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Поиск товаров..."
                className="w-full px-4 py-2.5 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    // БАГ: очищает поле, но не сбрасывает результаты поиска
                    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                    if (input) input.value = "";
                  }}
                  className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <Link 
                to="/profile" 
                className="hidden sm:flex flex-col items-center text-gray-600 hover:text-blue-600"
              >
                <span className="text-xl">👤</span>
                <span className="text-xs truncate max-w-[80px]">{user.name}</span>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="hidden sm:flex flex-col items-center text-gray-600 hover:text-blue-600"
              >
                <span className="text-xl">👤</span>
                <span className="text-xs">Войти</span>
              </Link>
            )}
            <Link to="/favorites" className="hidden sm:flex flex-col items-center text-gray-600 hover:text-blue-600">
              <span className="text-xl">♡</span>
              <span className="text-xs">Избранное</span>
            </Link>
            <button
              onClick={onCartClick}
              className="flex flex-col items-center text-gray-600 hover:text-blue-600 relative"
            >
              <span className="text-xl">🛒</span>
              <span className="text-xs">Корзина</span>
              {/* БАГ: показывает 0 вместо того, чтобы скрыться */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-6 py-3 overflow-x-auto">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`whitespace-nowrap text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
