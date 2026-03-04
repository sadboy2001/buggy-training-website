import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  // БАГ: звёзды всегда показывают 4 звезды независимо от рейтинга
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              Нет в наличии
            </span>
          </div>
        )}
        {discount > 0 && product.inStock && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {/* БАГ: показывает положительный процент для наценки */}
            -{discount}%
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-800 hover:text-blue-600 line-clamp-2 min-h-[40px]">
            {product.name || "Без названия"} {/* Показываем если name пустой */}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex">{renderStars()}</div>
          <span className="text-sm text-gray-500">
            {product.rating} ({product.reviews} отзывов) {/* БАГ: может показать отрицательные отзывы */}
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">
              {product.price.toLocaleString("ru-RU")} ₽
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.oldPrice.toLocaleString("ru-RU")} {/* БАГ: нет символа ₽ */}
              </span>
            )}
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={() => onAddToCart(product)}
          // БАГ: можно добавить товар, которого нет в наличии
          className="mt-3 w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
        >
          В корзину
        </button>
      </div>
    </div>
  );
};
