import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Tech<span className="text-blue-400">Shop</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {/* БАГ: орфографическая ошибка "электронники" */}
              Интернет-магазин электронники и гаджетов. Работаем с 2015 года.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl">📘</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">📸</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">📺</a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="text-white font-medium mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalog?category=smartphones" className="hover:text-white">Смартфоны</Link></li>
              <li><Link to="/catalog?category=laptops" className="hover:text-white">Ноутбуки</Link></li>
              <li><Link to="/catalog?category=tablets" className="hover:text-white">Планшеты</Link></li>
              <li><Link to="/catalog?category=accessories" className="hover:text-white">Аксессуары</Link></li>
              <li><Link to="/catalog?category=tv" className="hover:text-white">Телевизоры</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-medium mb-4">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">О компании</Link></li>
              <li><Link to="/delivery" className="hover:text-white">Доставка и оплата</Link></li>
              <li><Link to="/warranty" className="hover:text-white">Гарантия</Link></li>
              <li><Link to="/contacts" className="hover:text-white">Контакты</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Политика конфиденциальности</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                {/* БАГ: абсурдный адрес - дом 0 */}
                <span>г. Москва, ул. Примерная, д. 0</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>8-000-000-00-00</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                {/* БАГ: невалидный email - нет точки */}
                <span>info@techshopru</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Ежедневно 9:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* БАГ: устаревший год */}
          <p className="text-sm text-gray-500">© 2021 TechShop. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <img src="https://via.placeholder.com/40x24?text=VISA" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/40x24?text=MC" alt="Mastercard" className="h-6" />
            <img src="https://via.placeholder.com/40x24?text=MIR" alt="МИР" className="h-6" />
          </div>
        </div>
      </div>

      {/* Scroll to top - БАГ: кнопка не работает */}
      <button
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-xl"
        onClick={() => {
          // БАГ: нет обработчика
        }}
      >
        ↑
      </button>
    </footer>
  );
};
