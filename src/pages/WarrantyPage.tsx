import React from "react";
import { Link } from "react-router-dom";

export const WarrantyPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Гарантия</span>
        </nav>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Гарантия</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Официальная гарантия</h2>
              <p className="text-gray-600">
                На всю технику, представленную в нашем магазине, распространяется официальная 
                гарантия производителя. Гарантийный срок указан в карточке каждого товара.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Гарантийные случаи</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Заводской брак</li>
                <li>Неисправность, возникшая по вине производителя</li>
                <li>Несоответствие характеристикам, заявленным производителем</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Негарантийные случаи</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Механические повреждения</li>
                <li>Повреждения вследствие неправильной эксплуатации</li>
                <li>Повреждения от воздействия жидкостей</li>
                <li>Самостоятельный ремонт или вмешательство</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Как обратиться по гарантии</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Свяжитесь с нами по телефону 8-000-000-00-00</li>
                  <li>Опишите проблему с товаром</li>
                  <li>Привезите товар с чеком и гарантийным талоном</li>
                  <li>Мы проведём диагностику и примем решение</li>
                </ol>
              </div>
            </section>

            <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚠️ Важно!</h3>
              <p className="text-gray-700">
                {/* БАГ: грамматическая ошибка "в течении" */}
                Обращение по гарантии принимается в течении 14 дней с момента обнаружения 
                неисправности. Сохраняйте чек и упаковку товара.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
