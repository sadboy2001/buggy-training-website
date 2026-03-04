import React from "react";
import { Link } from "react-router-dom";

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">О нас</span>
        </nav>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">О компании TechShop</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              {/* БАГ: орфографическая ошибка "электронники" */}
              TechShop — ведущий интернет-магазин электронники и гаджетов в России. 
              Мы работаем с 2015 года и за это время помогли более 500 000 клиентов 
              найти идеальные устройства для работы и развлечений.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Наши преимущества</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-medium text-gray-900">Официальная гарантия</h3>
                  <p className="text-gray-600 text-sm">На всю продукцию действует официальная гарантия производителя</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-medium text-gray-900">Быстрая доставка</h3>
                  <p className="text-gray-600 text-sm">Доставляем по всей России от 1 дня</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-medium text-gray-900">Низкие цены</h3>
                  <p className="text-gray-600 text-sm">Работаем напрямую с производителями</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-medium text-gray-900">Поддержка 24/7</h3>
                  <p className="text-gray-600 text-sm">Всегда готовы помочь с выбором</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Наша команда</h2>
            <p className="text-gray-600 mb-4">
              В нашей команде работают более 200 профессионалов, которые разбираются в технике 
              и всегда готовы помочь вам с выбором. Мы регулярно проходим обучение у производителей 
              и следим за всеми новинками рынка.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h3 className="font-medium text-gray-900 mb-2">Контактная информация</h3>
              <p className="text-gray-600">
                {/* БАГ: невалидный email */}
                Email: info@techshopru<br />
                {/* БАГ: нерабочий телефон */}
                Телефон: 8-000-000-00-00<br />
                {/* БАГ: абсурдный адрес */}
                Адрес: г. Москва, ул. Примерная, д. 0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
