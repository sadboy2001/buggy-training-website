import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types";

interface ProfilePageProps {
  user: User | null;
  onLogout: () => void;
  onUpdateUser: (user: User) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, onLogout, onUpdateUser }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || ""
  });
  const [activeTab, setActiveTab] = useState<"profile" | "orders" | "settings">("profile");

  // БАГ: если пользователь не авторизован, страница всё равно частично отображается
  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Необходима авторизация</h1>
        <p className="text-gray-600 mb-6">Войдите в аккаунт для просмотра профиля</p>
        <Link
          to="/login"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Войти
        </Link>
      </div>
    );
  }

  const handleSave = () => {
    // БАГ: не валидирует данные при сохранении
    onUpdateUser({
      ...user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    });
    setIsEditing(false);
    // БАГ: показывает устаревшее сообщение
    alert("Изменения сохранены!");
  };

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  // Фейковые заказы для демонстрации
  const orders = [
    {
      id: "12345",
      date: "15.01.2024", // БАГ: дата в будущем (если текущий год 2023)
      status: "Доставлен",
      total: 89990,
      items: 2
    },
    {
      id: "12344",
      date: "32.12.2023", // БАГ: несуществующая дата
      status: "В обработке",
      total: 15990,
      items: 1
    },
    {
      id: "12343",
      date: "01.12.2023",
      status: "Отмен", // БАГ: обрезанный статус
      total: -5000, // БАГ: отрицательная сумма
      items: 3
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Личный кабинет</h1>
        <button
          onClick={handleLogout}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          Выйти
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Профиль
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "orders"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Заказы
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "settings"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Настройки
        </button>
      </div>

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Личные данные</h2>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Редактировать
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-gray-600 hover:text-gray-700"
                >
                  Отмена
                </button>
                <button
                  onClick={handleSave}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Сохранить
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Имя</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{user.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Email</label>
              {isEditing ? (
                <input
                  type="text" // БАГ: type="text" вместо "email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{user.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Телефон</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+7 (___) ___-__-__"
                />
              ) : (
                <p className="text-gray-900">{user.phone || "Не указан"}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === "orders" && (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-lg font-semibold text-gray-900">Заказ #{order.id}</span>
                  <span className="text-gray-500 ml-4">{order.date}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  order.status === "Доставлен" 
                    ? "bg-green-100 text-green-800" 
                    : order.status === "В обработке"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}>
                  {order.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{order.items} товар(а)</span>
                <span className="font-semibold text-gray-900">
                  {order.total.toLocaleString("ru-RU")} ₽
                </span>
              </div>
              {/* БАГ: кнопка не работает */}
              <button
                onClick={() => {}}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Подробнее
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Настройки</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium text-gray-900">Email-уведомления</p>
                <p className="text-sm text-gray-500">Получать письма о заказах и акциях</p>
              </div>
              {/* БАГ: переключатель не сохраняет состояние */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium text-gray-900">SMS-уведомления</p>
                <p className="text-sm text-gray-500">Получать SMS о статусе доставки</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  // БАГ: опасное действие без подтверждения
                  alert("Аккаунт удалён");
                }}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Удалить аккаунт
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
