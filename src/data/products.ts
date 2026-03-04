export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  image: string;
  description: string;
  specs?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Смартфон Galaxy Pro Max",
    category: "Смартфоны",
    price: 89990,
    oldPrice: 79990, // БАГ: старая цена ниже новой
    rating: 4.8,
    reviews: 234,
    inStock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    description: "Флагманский смартфон с потрясающей камерой 108 Мп и AMOLED дисплеем 6.7 дюймов.",
    specs: ["Экран 6.7\" AMOLED", "Камера 108 Мп", "Батарея 5000 мАч", "8 ГБ RAM"]
  },
  {
    id: 2,
    name: "Ноутбук ProBook 15",
    category: "Ноутбуки",
    price: 74990,
    oldPrice: 84990,
    rating: 4.5,
    reviews: 156,
    inStock: true,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    description: "Мощный ноутбук для работы и развлечений с процессором Intel Core i7.",
    specs: ["Intel Core i7", "16 ГБ RAM", "512 ГБ SSD", "15.6\" IPS"]
  },
  {
    id: 3,
    name: "Наушники AirSound Pro",
    category: "Аксессуары",
    price: 12990,
    oldPrice: 15990,
    rating: 5.3, // БАГ: рейтинг больше 5
    reviews: 89,
    inStock: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Беспроводные наушники с активным шумоподавлением и 30 часами работы.",
    specs: ["Bluetooth 5.2", "ANC", "30 часов работы", "Быстрая зарядка"]
  },
  {
    id: 4,
    name: "Планшет TabMax 11",
    category: "Планшеты",
    price: 45990,
    oldPrice: 52990,
    rating: 4.2,
    reviews: -12, // БАГ: отрицательное количество отзывов
    inStock: false,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    description: "Планшет с ярким 11-дюймовым дисплеем для работы и творчества.",
    specs: ["11\" 2K дисплей", "128 ГБ", "8 ГБ RAM", "S Pen в комплекте"]
  },
  {
    id: 5,
    name: "Смарт-часы WatchFit",
    category: "Аксессуары",
    price: 0, // БАГ: цена 0
    oldPrice: 9990,
    rating: 4.0,
    reviews: 67,
    inStock: true,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Умные часы с мониторингом здоровья и GPS-трекером.",
    specs: ["GPS", "Пульсометр", "Водозащита IP68", "7 дней работы"]
  },
  {
    id: 6,
    name: "", // БАГ: пустое название
    category: "Аксессуары",
    price: 2990,
    rating: 3.8,
    reviews: 45,
    inStock: true,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    description: "Эргономичная игровая мышь с RGB-подсветкой.",
    specs: ["16000 DPI", "RGB подсветка", "6 кнопок", "Проводная"]
  },
  {
    id: 7,
    name: "Телевизор SmartTV 55",
    category: "Телевизоры",
    price: 54990,
    oldPrice: 64990,
    rating: 4.6,
    reviews: 123,
    inStock: true,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    description: "4K Smart TV с поддержкой HDR и встроенным голосовым помощником.",
    specs: ["55\" 4K UHD", "HDR10+", "Smart TV", "Голосовое управление"]
  },
  {
    id: 8,
    name: "Клавиатура MechKeys RGB",
    category: "Аксессуары",
    price: 7990,
    rating: 4.4,
    reviews: 78,
    inStock: true,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
    description: "Механическая клавиатура с переключателями Cherry MX и RGB-подсветкой.",
    specs: ["Cherry MX Blue", "RGB", "Full-size", "USB Type-C"]
  },
  {
    id: 9,
    name: "Монитор UltraWide 34",
    category: "Мониторы",
    price: 42990,
    oldPrice: 49990,
    rating: 4.7,
    reviews: 56,
    inStock: false,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    description: "Изогнутый ультраширокий монитор для работы и игр.",
    specs: ["34\" UWQHD", "144 Гц", "1 мс", "HDR400"]
  },
  {
    id: 10,
    name: "Фотоаппарат MirrorPro",
    category: "Фото и видео",
    price: 129990,
    oldPrice: 149990,
    rating: 4.9,
    reviews: 34,
    inStock: true,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    description: "Профессиональная беззеркальная камера для съёмки в любых условиях.",
    specs: ["45 Мп", "4K 60fps", "5-осевая стабилизация", "Dual SD"]
  },
  {
    id: 11,
    name: "Колонка BassBoost Mini",
    category: "Аксессуары",
    price: 4990,
    oldPrice: 5990,
    rating: 4.1,
    reviews: 201,
    inStock: true,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Портативная Bluetooth-колонка с мощным басом и защитой от воды.",
    specs: ["20 Вт", "IPX7", "12 часов работы", "Bluetooth 5.0"]
  },
  {
    id: 12,
    name: "Игровая консоль NextGen",
    category: "Игровые консоли",
    price: 49990,
    rating: 4.8,
    reviews: 312,
    inStock: true,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    description: "Консоль нового поколения с поддержкой 4K и 120 fps.",
    specs: ["4K 120fps", "1 ТБ SSD", "Ray Tracing", "Обратная совместимость"]
  }
];

export const categories = [
  "Все категории",
  "Смартфоны",
  "Ноутбуки",
  "Планшеты",
  "Телевизоры",
  "Мониторы",
  "Аксессуары",
  "Фото и видео",
  "Игровые консоли"
];
