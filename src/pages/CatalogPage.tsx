import React from "react";
import { Product, products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Filters } from "../components/Filters";
import { SortOption } from "../types";

interface CatalogPageProps {
  onAddToCart: (product: Product) => void;
  searchQuery: string;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  inStockOnly: boolean;
  onInStockChange: (checked: boolean) => void;
  onResetFilters: () => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  onAddToCart,
  searchQuery,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  inStockOnly,
  onInStockChange,
  onResetFilters,
}) => {
  // Фильтрация товаров
  let filteredProducts = [...products];

  // БАГ: поиск чувствителен к регистру
  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.includes(searchQuery) || p.description.includes(searchQuery)
    );
  }

  // Фильтр по категории
  if (selectedCategory !== "Все категории") {
    filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory);
  }

  // БАГ: фильтр "Только в наличии" инвертирован
  if (inStockOnly) {
    filteredProducts = filteredProducts.filter((p) => !p.inStock);
  }

  // Сортировка с перепутанными направлениями
  switch (sortBy) {
    case "price-asc":
      // БАГ: сортирует по убыванию вместо возрастания
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "price-desc":
      // БАГ: сортирует по возрастанию вместо убывания
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <span className="hover:text-gray-700 cursor-pointer">Главная</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Каталог</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Каталог товаров</h1>

        {/* Filters */}
        <Filters
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          sortBy={sortBy}
          onSortChange={onSortChange}
          inStockOnly={inStockOnly}
          onInStockChange={onInStockChange}
          onResetFilters={onResetFilters}
          totalProducts={products.length}
        />

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Товары не найдены</p>
            <p className="text-gray-400 mt-2">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};
