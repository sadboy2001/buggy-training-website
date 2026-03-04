import React from "react";
import { categories } from "../data/products";
import { SortOption } from "../types";

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  inStockOnly: boolean;
  onInStockChange: (checked: boolean) => void;
  onResetFilters: () => void;
  totalProducts: number;
}

export const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  inStockOnly,
  onInStockChange,
  onResetFilters,
  totalProducts,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Category filter */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Категория:</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Сортировка:</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">По умолчанию</option>
            <option value="price-asc">По цене (дорогие сначала)</option> {/* БАГ: перепутаны местами */}
            <option value="price-desc">По цене (дешевые сначала)</option> {/* БАГ: перепутаны местами */}
            <option value="rating">По рейтингу</option>
            <option value="name">По названию</option>
          </select>
        </div>

        {/* In stock filter */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Только в наличии</span>
        </label>

        {/* Reset button */}
        <button
          onClick={onResetFilters}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Сбросить фильтры
        </button>
      </div>

      {/* Results count */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          {/* БАГ: показывает общее количество вместо отфильтрованного */}
          Показано {totalProducts} товар из {totalProducts} {/* БАГ: слово "товар" не склоняется */}
        </p>
      </div>
    </div>
  );
};
