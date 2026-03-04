import React from "react";
import { Link } from "react-router-dom";

export const FavoritesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Избранное</span>
        </nav>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Избранное</h1>

          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">♡</span>
            <p className="text-xl text-gray-500 mb-2">Список избранного пуст</p>
            <p className="text-gray-400 mb-6">Добавляйте товары в избранное, чтобы не потерять их</p>
            <Link
              to="/catalog"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
