// data.js - данные меню
const BAR_MENU = [
  { id: 1, name: "Клинская светлое", volume: "0.5 л", price: 280, category: "beer", description: "Классический светлый лагер", tags: ["пиво", "классика"], allergens: ["глютен"] },
  { id: 2, name: "Клинская темное", volume: "0.5 л", price: 290, category: "beer", description: "Мягкое темное с карамельными нотками", tags: ["пиво", "темное"], allergens: ["глютен"] },
  { id: 3, name: "Жигулевское", volume: "0.5 л", price: 260, category: "beer", description: "Традиционный советский лагер", tags: ["пиво"], allergens: ["глютен"] },
  { id: 4, name: "Московское светлое", volume: "0.5 л", price: 270, category: "beer", description: "Свежий, хмельной аромат", tags: ["пиво"], allergens: ["глютен"] },
  { id: 5, name: "Балтика 3", volume: "0.5 л", price: 275, category: "beer", description: "Классическое светлое", tags: ["пиво"], allergens: ["глютен"] },
  { id: 6, name: "Балтика 7", volume: "0.5 л", price: 285, category: "beer", description: "Экспортное, более плотное", tags: ["пиво"], allergens: ["глютен"] },
  { id: 7, name: "Невское светлое", volume: "0.5 л", price: 270, category: "beer", description: "Легкий, освежающий", tags: ["пиво"], allergens: ["глютен"] },
  { id: 8, name: "Невское ледяное", volume: "0.5 л", price: 280, category: "beer", description: "Крепкий охлажденный лагер", tags: ["пиво", "крепкое"], allergens: ["глютен"] },
  { id: 9, name: "Кружка темное нефильтрованное", volume: "0.5 л", price: 320, category: "beer", description: "Живое темное пиво", tags: ["нефильтрованное", "живое"], allergens: ["глютен"] },
  { id: 10, name: "Московское классическое", volume: "0.5 л", price: 260, category: "beer", description: "По старой рецептуре", tags: ["пиво"], allergens: ["глютен"] },
  
  { id: 11, name: "Чай черный", volume: "250 мл", price: 120, category: "tea", description: "Цейлонский", tags: ["горячие напитки"], allergens: [] },
  { id: 12, name: "Чай зеленый", volume: "250 мл", price: 120, category: "tea", description: "Китайский", tags: ["горячие напитки"], allergens: [] },
  { id: 13, name: "Чай с чабрецом", volume: "250 мл", price: 140, category: "tea", description: "Травяной сбор", tags: ["травяной"], allergens: [] },
  { id: 14, name: "Кофе американо", volume: "200 мл", price: 140, category: "coffee", description: "Эспрессо + вода", tags: ["кофе"], allergens: [] },
  { id: 15, name: "Кофе капучино", volume: "200 мл", price: 180, category: "coffee", description: "С молочной пенкой", tags: ["кофе", "молочный"], allergens: ["молоко"] },
  { id: 16, name: "Кофе эспрессо", volume: "40 мл", price: 110, category: "coffee", description: "Крепкий", tags: ["кофе"], allergens: [] },
  { id: 17, name: "Какао", volume: "200 мл", price: 150, category: "coffee", description: "С зефиром", tags: ["горячий", "сладкий"], allergens: ["молоко"] },
  { id: 18, name: "Сок яблочный", volume: "200 мл", price: 130, category: "juices", description: "Прямой отжим", tags: ["сок", "безалкогольный"], allergens: [] },
  { id: 19, name: "Сок апельсиновый", volume: "200 мл", price: 140, category: "juices", description: "Свежевыжатый", tags: ["сок", "фреш"], allergens: [] },
  { id: 20, name: "Морс клюквенный", volume: "250 мл", price: 150, category: "juices", description: "Домашний", tags: ["морс"], allergens: [] },
  { id: 21, name: "Лимонад домашний", volume: "300 мл", price: 180, category: "soft", description: "Мята + лайм", tags: ["лимонад", "прохладительный"], allergens: [] },
  { id: 22, name: "Тархун", volume: "300 мл", price: 170, category: "soft", description: "Домашний", tags: ["лимонад"], allergens: [] }
];

const categories = {
    beer: "🍺 Пиво",
    tea: "🍵 Чай",
    coffee: "☕ Кофе",
    juices: "🧃 Соки",
    soft: "🥤 Лимонады"
};
