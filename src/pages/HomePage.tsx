import React from "react";
import { Link } from "react-router-dom";
import { Product, products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
  const featuredProducts = products.slice(0, 4);
  const newProducts = products.slice(4, 8);

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Лучшая техника по выгодным ценам
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {/* БАГ: несуществующая дата и опечатка "скидик" */}
                Успейте воспользоваться скидик до 50% до 31 февраля!
              </p>
              <div className="flex gap-4">
                <Link
                  to="/catalog"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Перейти в каталог
                </Link>
                <Link
                  to="/promotions"
                  className="px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors font-medium border border-gray-300"
                >
                  Все акции
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop"
                alt="Техника"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4">
              <span className="text-3xl">🚚</span>
              <div>
                <h3 className="font-medium text-gray-900">Бесплатная доставка</h3>
                <p className="text-sm text-gray-500">При заказе от 5000 ₽</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <span className="text-3xl">🔄</span>
              <div>
                <h3 className="font-medium text-gray-900">Возврат 14 дней</h3>
                {/* БАГ: грамматическая ошибка "в течении" */}
                <p className="text-sm text-gray-500">Обмен в течении 2 недель</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <span className="text-3xl">🛡️</span>
              <div>
                <h3 className="font-medium text-gray-900">Гарантия</h3>
                <p className="text-sm text-gray-500">Официальная гарантия</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <span className="text-3xl">💳</span>
              <div>
                <h3 className="font-medium text-gray-900">Удобная оплата</h3>
                <p className="text-sm text-gray-500">Картой или наличными</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Популярные товары</h2>
            <Link to="/catalog" className="text-blue-600 hover:text-blue-800 font-medium">
              Смотреть все →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Подпишитесь на рассылку</h2>
          <p className="text-blue-100 mb-6">Получайте информацию о скидках и новинках первыми</p>
          <form className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Подписаться
            </button>
          </form>
        </div>
      </section>

      {/* New products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Новинки</h2>
            <Link to="/catalog" className="text-blue-600 hover:text-blue-800 font-medium">
              Смотреть все →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
