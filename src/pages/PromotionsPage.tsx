import React from "react";
import { Link } from "react-router-dom";
import { Product, products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

interface PromotionsPageProps {
  onAddToCart: (product: Product) => void;
}

export const PromotionsPage: React.FC<PromotionsPageProps> = ({ onAddToCart }) => {
  // Товары со скидкой (у которых есть oldPrice)
  const saleProducts = products.filter((p) => p.oldPrice);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700">Главная</Link>
          <span className="mx-2">/</span>
          {/* БАГ: опечатка "Акци" */}
          <span className="text-gray-900">Акци</span>
        </nav>

        {/* БАГ: опечатка в заголовке */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Акци и спецпредложения</h1>

        {/* Promo banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">🔥 Горячие скидки!</h2>
          <p className="text-red-100 mb-4">
            {/* БАГ: несуществующая дата и опечатка "скидик" */}
            Успейте воспользоваться скидик до 50% до 31 февраля!
          </p>
          <Link
            to="/catalog"
            className="inline-block px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
          >
            Смотреть все товары
          </Link>
        </div>

        {/* Sale products */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Товары со скидкой</h2>
        
        {saleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Нет товаров со скидкой</p>
          </div>
        )}
      </div>
    </div>
  );
};
