import React from "react";
import { Link } from "react-router-dom";

export const DeliveryPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Доставка и оплата</span>
        </nav>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Доставка и оплата</h1>

          <div className="space-y-8">
            {/* Delivery */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Способы доставки</h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🚚</span>
                    <h3 className="font-medium text-gray-900">Курьерская доставка</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Доставка курьером по Москве и области. Срок доставки: 1-2 дня.
                  </p>
                  <p className="text-blue-600 font-medium mt-2">
                    Бесплатно при заказе от 5000 ₽
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📦</span>
                    <h3 className="font-medium text-gray-900">Самовывоз</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {/* БАГ: абсурдный адрес */}
                    Забрать заказ можно по адресу: г. Москва, ул. Примерная, д. 0
                  </p>
                  <p className="text-green-600 font-medium mt-2">Бесплатно</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📮</span>
                    <h3 className="font-medium text-gray-900">Доставка в регионы</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Доставка по России транспортными компаниями. Срок: 3-7 дней.
                  </p>
                  <p className="text-gray-600 font-medium mt-2">От 300 ₽</p>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Способы оплаты</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">💳</span>
                    <h3 className="font-medium text-gray-900">Банковская карта</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Visa, MasterCard, МИР
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">💵</span>
                    <h3 className="font-medium text-gray-900">Наличными</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    При получении заказа
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🏦</span>
                    <h3 className="font-medium text-gray-900">Безналичный расчёт</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Для юридических лиц
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📱</span>
                    <h3 className="font-medium text-gray-900">СБП</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Система быстрых платежей
                  </p>
                </div>
              </div>
            </section>

            {/* Return policy */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Возврат и обмен</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-gray-700">
                  {/* БАГ: грамматическая ошибка "в течении" */}
                  Вы можете вернуть или обменять товар в течении 14 дней с момента покупки, 
                  если он не подошёл вам по каким-либо причинам. Товар должен сохранить 
                  товарный вид и упаковку.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
