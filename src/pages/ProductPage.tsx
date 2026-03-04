import React from "react";
import { useParams, Link } from "react-router-dom";
import { Product, products } from "../data/products";

interface ProductPageProps {
  onAddToCart: (product: Product) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-6">Товар не найден</p>
          <Link to="/catalog" className="text-blue-600 hover:text-blue-800">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700">Главная</Link>
          <span className="mx-2">/</span>
          <Link to="/catalog" className="hover:text-gray-700">Каталог</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name || "Товар"}</span>
        </nav>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {discount > 0 && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name || "Без названия"}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(4)}{"☆".repeat(1)}
                </div>
                <span className="text-gray-500">
                  {product.rating} ({product.reviews} отзывов)
                </span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-900">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </span>
                  {product.oldPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      {product.oldPrice.toLocaleString("ru-RU")} ₽
                    </span>
                  )}
                </div>
              </div>

              {/* Stock status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <span>✓</span> В наличии
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <span>✕</span> Нет в наличии
                  </span>
                )}
              </div>

              {/* Specs */}
              {product.specs && (
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Характеристики:</h3>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Добавить в корзину
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  ♡
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
