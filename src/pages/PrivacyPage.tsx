import React from "react";
import { Link } from "react-router-dom";

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Политика конфиденциальности</span>
        </nav>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Политика конфиденциальности</h1>

          <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
              персональных данных пользователей интернет-магазина TechShop.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">1. Сбор информации</h2>
            <p>
              Мы собираем информацию, которую вы предоставляете при оформлении заказа: 
              имя, контактный телефон, email и адрес доставки.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">2. Использование информации</h2>
            <p>
              Собранная информация используется для обработки заказов, связи с вами 
              и улучшения качества обслуживания.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">3. Защита информации</h2>
            <p>
              Мы принимаем все необходимые меры для защиты ваших персональных данных 
              от несанкционированного доступа.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">4. Контакты</h2>
            <p>
              По вопросам обработки персональных данных обращайтесь:
            </p>
            <ul className="list-disc list-inside">
              {/* БАГ: невалидный email */}
              <li>Email: info@techshopru</li>
              {/* БАГ: нерабочий номер */}
              <li>Телефон: 8-000-000-00-00</li>
            </ul>

            <p className="text-sm text-gray-500 mt-8">
              {/* БАГ: устаревший год */}
              Последнее обновление: январь 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
