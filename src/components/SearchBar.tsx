import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

// БАГ: Поиск чувствителен к регистру (ищет точное совпадение)
// БАГ: Поиск не работает по нажатию Enter
// БАГ: Кнопка "Очистить" не всегда сбрасывает поиск
// БАГ: Placeholder обрезается на мобильных
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // БАГ: Поиск чувствителен к регистру — не приводит к toLowerCase
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    // БАГ: Забыли вызвать onSearch('') — поле очищается, но фильтр не сбрасывается
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // БАГ: Поиск по Enter НЕ работает — проверяем неправильную клавишу
    if (e.key === 'Escape') {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-2 w-full max-w-2xl">
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Введите название товара для поиска по каталогу магазина TechShop..."
          className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-700"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
            title="Очистить"
          >
            ✕
          </button>
        )}
      </div>
      <button
        onClick={handleSearch}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        🔍 Найти
      </button>
    </div>
  );
};

export default SearchBar;
