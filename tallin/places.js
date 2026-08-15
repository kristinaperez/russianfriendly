/**
 * places.js — seed dataset for the Tallinn Russian Friendly map.
 *
 * IMPORTANT / честно предупреждаю:
 * Это НЕ полный проверенный каталог. Я (ассистент) не могу физически
 * позвонить по телефонам или посетить адреса, поэтому в эту стартовую
 * версию включены только те организации, чьё название, сайт и (где
 * возможно) адрес нашлись в открытых источниках при поиске и выглядят
 * достоверно. Телефоны намеренно НЕ указаны там, где я не нашёл их
 * в источнике — вместо выдуманного номера дана ссылка на официальный
 * сайт организации.
 *
 * Категории без проверенных точек оставлены пустыми — так честнее,
 * чем заполнять карту придуманными адресами. Собирайте реальные точки
 * через бот обратной связи (кнопка под картой) и дополняйте этот файл.
 *
 * source: "search" = найдено веб-поиском в этой сессии, координаты — приблизительные
 *         (по названию улицы/района), не геокодированы точно до подъезда.
 */

const PLACES = [
  {
    id: "romento",
    cat: "lawyer",
    name: "Romento — юридическое бюро",
    address: "Narva mnt 4, Tallinn",
    lat: 59.4372, lng: 24.7591,
    phone: null,
    site: "https://romento.ee/",
    note: "Юридические услуги для физических и юридических лиц. Координаты приблизительные (по адресу улицы).",
    verified: "partial",
    source: "search"
  },
  {
    id: "buldakov",
    cat: "lawyer",
    name: "Юридическое бюро Buldakov.ee",
    address: "Kentmanni 18, Tallinn",
    lat: 59.4321, lng: 24.7539,
    phone: null,
    site: "https://buldakov.ee/ru",
    note: "Работает с 2001 года, коммерческое право. Координаты приблизительные.",
    verified: "partial",
    source: "search"
  },
  {
    id: "denikin",
    cat: "lawyer",
    name: "Юридическое бюро Виталий Деникин",
    address: "Estonia pst 1, 10145 Tallinn",
    lat: 59.4362, lng: 24.7486,
    phone: null,
    site: "https://www.denikin.ee/rus",
    note: "Трудовое, семейное и гражданское право, русский/эстонский/английский. Координаты приблизительные.",
    verified: "partial",
    source: "search"
  },
  {
    id: "dentalfactory",
    cat: "dentist",
    name: "Dental Factory (зубной врач Олег Петренко)",
    address: "рядом с ТЦ Rocca al Mare, Tallinn (точный адрес уточняйте на сайте)",
    lat: 59.4295, lng: 24.6432,
    phone: null,
    site: "https://dentalfactory.ee/ru/",
    note: "Стоматологическая клиника. Точка на карте — ориентир по району, не точный адрес.",
    verified: "partial",
    source: "search"
  }
];

/**
 * Категории, для которых пока НЕТ проверенных точек.
 * Оставлены пустыми намеренно — не выдумываем контакты.
 * Присылайте реальные точки через бот обратной связи.
 */
const EMPTY_CATEGORIES = [
  "doctor", "translator", "bank", "visa",
  "realestate", "transfer", "sim", "shop", "school"
];

const CATEGORY_LABELS = {
  dentist: "🦷 Стоматологи",
  doctor: "👩‍⚕️ Врачи",
  lawyer: "⚖️ Юристы",
  translator: "📄 Переводчики",
  bank: "🏦 Банки / Финансы",
  visa: "🛂 Визовые агентства",
  realestate: "🏠 Аренда / Риелторы",
  transfer: "🚕 Трансферы",
  sim: "📱 SIM / eSIM",
  shop: "🛒 Русские магазины",
  school: "🎓 Школы"
};
