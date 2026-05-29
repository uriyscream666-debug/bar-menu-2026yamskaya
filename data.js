/**
 * Барная карта «Трактир / Шахерезада 2026»
 *
 * Структура элемента меню:
 * {
 *   id: string,              // уникальный идентификатор
 *   name: string,            // название напитка
 *   category: string,        // категория (вкладка строится автоматически)
 *   price: number,           // цена в рублях
 *   volume: string,          // объём, например «200 мл»
 *   description: string,     // краткое описание для карточки
 *   ingredients: string[],   // состав
 *   allergens: string[],     // аллергены (пустой массив — «не указаны»)
 *   waiterScript: string,    // скрипт для официанта
 *   badge: string,           // опционально: «Хит», «Новинка» и т.д.
 *   tags: string[]           // опционально: теги для поиска
 * }
 */

const BAR_MENU = [
  // --- Минеральная вода ---
  {
    id: "mineral-baykal-gas",
    name: "Байкал, газированная",
    category: "Минеральная вода",
    price: 390,
    volume: "530 мл",
    description: "Мягкая столовая минеральная вода с газом.",
    ingredients: ["минеральная вода «Байкал»", "газированная"],
    allergens: [],
    waiterScript: "Мягкая столовая вода – отлично утоляет жажду.",
    tags: ["байкал", "вода", "минеральная", "газированная", "безалкогольный"],
  },
  {
    id: "mineral-baykal-still",
    name: "Байкал, негазированная",
    category: "Минеральная вода",
    price: 390,
    volume: "530 мл",
    description: "Мягкая столовая минеральная вода без газа.",
    ingredients: ["минеральная вода «Байкал»", "негазированная"],
    allergens: [],
    waiterScript: "Мягкая столовая вода – отлично утоляет жажду.",
    tags: ["байкал", "вода", "минеральная", "негазированная", "безалкогольный"],
  },
  {
    id: "mineral-nedra-gas",
    name: "Недра, газированная",
    category: "Минеральная вода",
    price: 610,
    volume: "750 мл",
    description: "Премиальная российская минеральная вода из Новгородской области.",
    ingredients: ["минеральная вода «Недра»", "газированная"],
    allergens: [],
    waiterScript: "Премиальная российская вода из Новгородской области.",
    tags: ["недра", "вода", "минеральная", "газированная", "безалкогольный"],
  },
  {
    id: "mineral-nedra-still",
    name: "Недра, негазированная",
    category: "Минеральная вода",
    price: 610,
    volume: "750 мл",
    description: "Премиальная российская минеральная вода из Новгородской области.",
    ingredients: ["минеральная вода «Недра»", "негазированная"],
    allergens: [],
    waiterScript: "Премиальная российская вода из Новгородской области.",
    tags: ["недра", "вода", "минеральная", "негазированная", "безалкогольный"],
  },
  {
    id: "mineral-borjomi",
    name: "Боржоми",
    category: "Минеральная вода",
    price: 450,
    volume: "500 мл",
    description: "Легендарная грузинская минеральная вода. Подача: бутылка открывается при госте, наливается в охлаждённый хайбол.",
    ingredients: ["минеральная вода «Боржоми»"],
    allergens: [],
    waiterScript: "Легендарная грузинская вода, помогает пищеварению.",
    tags: ["боржоми", "вода", "минеральная", "грузия", "безалкогольный"],
  },

  // --- Безалкогольные напитки ---
  {
    id: "soft-juice-viz-orange",
    name: "Сок ВИЗ, апельсин",
    category: "Безалкогольные напитки",
    price: 380,
    volume: "200 мл",
    description: "Пакетированный сок ВИЗ. Подача: стакан хайбол, трубочка.",
    ingredients: ["сок ВИЗ", "апельсин"],
    allergens: [],
    waiterScript: "Сок ВИЗ апельсин – освежающий цитрусовый вкус.",
    tags: ["сок", "виз", "апельсин", "безалкогольный"],
  },
  {
    id: "soft-juice-viz-apple",
    name: "Сок ВИЗ, яблоко",
    category: "Безалкогольные напитки",
    price: 380,
    volume: "200 мл",
    description: "Пакетированный сок ВИЗ. Подача: стакан хайбол, трубочка.",
    ingredients: ["сок ВИЗ", "яблоко"],
    allergens: [],
    waiterScript: "Сок ВИЗ яблоко – классический сладкий вкус.",
    tags: ["сок", "виз", "яблоко", "безалкогольный"],
  },
  {
    id: "soft-juice-viz-tomato",
    name: "Сок ВИЗ, томат",
    category: "Безалкогольные напитки",
    price: 380,
    volume: "200 мл",
    description: "Пакетированный сок ВИЗ. Подача: стакан хайбол, трубочка.",
    ingredients: ["сок ВИЗ", "томат"],
    allergens: [],
    waiterScript: "Сок ВИЗ томат – насыщенный, слегка солоноватый.",
    tags: ["сок", "виз", "томат", "безалкогольный"],
  },
  {
    id: "soft-juice-viz-cherry",
    name: "Сок ВИЗ, вишня",
    category: "Безалкогольные напитки",
    price: 380,
    volume: "200 мл",
    description: "Пакетированный сок ВИЗ. Подача: стакан хайбол, трубочка.",
    ingredients: ["сок ВИЗ", "вишня"],
    allergens: [],
    waiterScript: "Сок ВИЗ вишня – ягодный, с приятной кислинкой.",
    tags: ["сок", "виз", "вишня", "безалкогольный"],
  },
  {
    id: "soft-juice-fresh-orange",
    name: "Свежевыжатый сок, апельсин",
    category: "Безалкогольные напитки",
    price: 460,
    volume: "200 мл",
    description: "Сок выжимается по заказу – максимум витаминов.",
    ingredients: ["апельсин"],
    allergens: [],
    waiterScript: "Выжимаем по заказу – максимум витаминов.",
    tags: ["сок", "свежевыжатый", "апельсин", "безалкогольный"],
  },
  {
    id: "soft-juice-fresh-grapefruit",
    name: "Свежевыжатый сок, грейпфрут",
    category: "Безалкогольные напитки",
    price: 460,
    volume: "200 мл",
    description: "Сок выжимается по заказу – максимум витаминов.",
    ingredients: ["грейпфрут"],
    allergens: [],
    waiterScript: "Выжимаем по заказу – максимум витаминов.",
    tags: ["сок", "свежевыжатый", "грейпфрут", "безалкогольный"],
  },
  {
    id: "soft-juice-fresh-apple",
    name: "Свежевыжатый сок, яблоко",
    category: "Безалкогольные напитки",
    price: 460,
    volume: "200 мл",
    description: "Сок выжимается по заказу – максимум витаминов.",
    ingredients: ["яблоко"],
    allergens: [],
    waiterScript: "Выжимаем по заказу – максимум витаминов.",
    tags: ["сок", "свежевыжатый", "яблоко", "безалкогольный"],
  },
  {
    id: "soft-juice-fresh-carrot",
    name: "Свежевыжатый сок, морковь",
    category: "Безалкогольные напитки",
    price: 460,
    volume: "200 мл",
    description: "Сок выжимается по заказу – максимум витаминов.",
    ingredients: ["морковь"],
    allergens: [],
    waiterScript: "Выжимаем по заказу – максимум витаминов.",
    tags: ["сок", "свежевыжатый", "морковь", "безалкогольный"],
  },
  {
    id: "soft-juice-fresh-celery",
    name: "Свежевыжатый сок, сельдерей",
    category: "Безалкогольные напитки",
    price: 460,
    volume: "200 мл",
    description: "Сок выжимается по заказу – максимум витаминов.",
    ingredients: ["сельдерей"],
    allergens: [],
    waiterScript: "Выжимаем по заказу – максимум витаминов.",
    tags: ["сок", "свежевыжатый", "сельдерей", "безалкогольный"],
  },
  {
    id: "soft-soda-cola",
    name: "Кока-Кола",
    category: "Безалкогольные напитки",
    price: 360,
    volume: "250 мл",
    description: "Классическая газировка.",
    ingredients: ["Кока-Кола"],
    allergens: [],
    waiterScript: "Кока-Кола – классика, хорошо утоляет жажду.",
    tags: ["газировка", "кола", "кока-кола", "безалкогольный"],
  },
  {
    id: "soft-soda-fanta",
    name: "Фанта",
    category: "Безалкогольные напитки",
    price: 360,
    volume: "250 мл",
    description: "Апельсиновая газировка.",
    ingredients: ["Фанта"],
    allergens: [],
    waiterScript: "Фанта – сочный апельсиновый вкус.",
    tags: ["газировка", "фанта", "апельсин", "безалкогольный"],
  },
  {
    id: "soft-soda-sprite",
    name: "Спрайт",
    category: "Безалкогольные напитки",
    price: 360,
    volume: "250 мл",
    description: "Лимонно-лаймовая газировка.",
    ingredients: ["Спрайт"],
    allergens: [],
    waiterScript: "Спрайт – лёгкий цитрусовый, освежающий.",
    tags: ["газировка", "спрайт", "лимон", "безалкогольный"],
  },
  {
    id: "soft-tonic-classic",
    name: "Тоник классический",
    category: "Безалкогольные напитки",
    price: 370,
    volume: "200 мл",
    description: "Классический тоник с характерной горчинкой хинина.",
    ingredients: ["тоник классический"],
    allergens: [],
    waiterScript: "Классический тоник – идеальная основа для джин-тоника.",
    tags: ["тоник", "классический", "газировка", "безалкогольный"],
  },
  {
    id: "soft-tonic-ginger",
    name: "Тоник имбирный",
    category: "Безалкогольные напитки",
    price: 370,
    volume: "200 мл",
    description: "Имбирный тоник – пикантный, с лёгкой жгучестью.",
    ingredients: ["тоник имбирный"],
    allergens: [],
    waiterScript: "Имбирный эль – пикантный, жгучий. Идеально к джину.",
    tags: ["тоник", "имбирный", "газировка", "безалкогольный"],
  },
  {
    id: "soft-mors-currant",
    name: "Морс, смородина",
    category: "Безалкогольные напитки",
    price: 300,
    volume: "200 мл",
    description: "Домашний морс из настоящих ягод.",
    ingredients: ["чёрная смородина", "сахар", "вода"],
    allergens: [],
    waiterScript: "Домашний морс из настоящих ягод.",
    tags: ["морс", "смородина", "ягоды", "домашний", "безалкогольный"],
  },
  {
    id: "soft-mors-cranberry",
    name: "Морс, клюква",
    category: "Безалкогольные напитки",
    price: 300,
    volume: "200 мл",
    description: "Домашний морс из настоящих ягод.",
    ingredients: ["клюква", "сахар", "вода"],
    allergens: [],
    waiterScript: "Домашний морс из настоящих ягод.",
    tags: ["морс", "клюква", "ягоды", "домашний", "безалкогольный"],
  },
  {
    id: "soft-mors-sea-buckthorn",
    name: "Морс, облепиха",
    category: "Безалкогольные напитки",
    price: 300,
    volume: "200 мл",
    description: "Домашний морс из настоящих ягод.",
    ingredients: ["облепиха", "сахар", "вода"],
    allergens: [],
    waiterScript: "Домашний морс из настоящих ягод.",
    tags: ["морс", "облепиха", "ягоды", "домашний", "безалкогольный"],
  },
  {
    id: "soft-kvas-house",
    name: "Квас домашний",
    category: "Безалкогольные напитки",
    price: 300,
    volume: "250 мл",
    description: "Живой нефильтрованный квас с хлебным ароматом.",
    ingredients: ["вода", "сусло (ячмень)", "сахар", "дрожжи", "изюм"],
    allergens: ["глютен"],
    waiterScript: "Наш квас – живой, нефильтрованный, с хлебным ароматом.",
    tags: ["квас", "домашний", "безалкогольный"],
  },
  {
    id: "soft-kvas-cherry",
    name: "Квас домашний вишнёвый",
    category: "Безалкогольные напитки",
    price: 300,
    volume: "250 мл",
    description: "Домашний квас с вишней – чуть слаще классического.",
    ingredients: ["сусло", "вишня", "сахар", "дрожжи"],
    allergens: ["глютен"],
    waiterScript: "Тот же квас с вишней – чуть слаще.",
    tags: ["квас", "вишня", "домашний", "безалкогольный"],
  },
  {
    id: "soft-medovukha",
    name: "Медовуха",
    category: "Безалкогольные напитки",
    price: 400,
    volume: "250 мл",
    description: "Старинный напиток на мёду – пьётся легко.",
    ingredients: ["мёд", "дрожжи", "изюм", "вода"],
    allergens: ["мёд"],
    waiterScript: "Старинный напиток на мёду – пьётся легко.",
    tags: ["медовуха", "мёд", "домашний", "безалкогольный"],
  },

  // --- Лимонады/Смузи ---
  {
    id: "lemonade-raikhon",
    name: "Райхон",
    category: "Лимонады/Смузи",
    price: 460,
    volume: "300 мл",
    description: "Домашний газированный лимонад с ароматом фиолетового базилика.",
    ingredients: [
      "настой фиолетового базилика",
      "сахар",
      "лимонная кислота",
      "газировка",
    ],
    allergens: [],
    waiterScript: "С ароматом свежего базилика.",
    tags: ["лимонад", "райхон", "базилик", "домашний", "газированный"],
  },
  {
    id: "lemonade-tarkhun",
    name: "Тархун",
    category: "Лимонады/Смузи",
    price: 460,
    volume: "300 мл",
    description: "Натуральный домашний лимонад на эстрагоне.",
    ingredients: [
      "экстракт эстрагона",
      "лимон",
      "сахар",
      "газировка",
      "лайм",
    ],
    allergens: [],
    waiterScript: "Натуральный тархун – вкус из детства.",
    tags: ["лимонад", "тархун", "эстрагон", "домашний", "газированный"],
  },
  {
    id: "lemonade-mandarin",
    name: "Мандариновый",
    category: "Лимонады/Смузи",
    price: 460,
    volume: "300 мл",
    description: "Солнечный лимонад с мандарином и юдзу.",
    ingredients: [
      "пюре мандаринов",
      "юдзу",
      "фруктозный сироп",
      "газировка",
      "мармеладные шарики",
    ],
    allergens: [],
    waiterScript: "Солнечный, с кислинкой юдзу.",
    tags: ["лимонад", "мандарин", "юдзу", "домашний", "газированный"],
  },
  {
    id: "lemonade-ginger-honey-lemon",
    name: "Имбирь мёд лимон",
    category: "Лимонады/Смузи",
    price: 460,
    volume: "300 мл",
    description: "Домашний газированный лимонад с имбирём, мёдом и лаймом.",
    ingredients: ["имбирный сок", "мёд", "лайм", "газировка"],
    allergens: ["мёд"],
    waiterScript: "Имбирный лимонад с мёдом – согревает.",
    tags: ["лимонад", "имбирь", "мёд", "лайм", "домашний", "газированный"],
  },
  {
    id: "lemonade-currant-ivan-tea",
    name: "Смородина иван-чай",
    category: "Лимонады/Смузи",
    price: 460,
    volume: "300 мл",
    description: "Таёжный лимонад: чёрная смородина и иван-чай.",
    ingredients: [
      "пюре чёрной смородины",
      "отвар иван-чая",
      "газировка",
      "свежие ягоды",
    ],
    allergens: [],
    waiterScript: "Таёжный вкус: ягоды + травы.",
    tags: ["лимонад", "смородина", "иван-чай", "домашний", "газированный"],
  },
  {
    id: "lemonade-mango-passion-coconut",
    name: "Манго маракуйя кокос",
    category: "Лимонады/Смузи",
    price: 460,
    volume: "300 мл",
    description: "Тропический домашний лимонад – один из самых популярных.",
    ingredients: [
      "пюре манго",
      "маракуйя",
      "кокосовое молоко",
      "газировка",
      "мармеладные шарики",
    ],
    allergens: ["кокос"],
    waiterScript: "Тропический взрыв – самый популярный.",
    tags: ["лимонад", "манго", "маракуйя", "кокос", "домашний", "газированный", "хит"],
    badge: "Хит",
  },
  {
    id: "lemonade-cucumber-mint",
    name: "Огурец и мята",
    category: "Лимонады/Смузи",
    price: 460,
    volume: "300 мл",
    description: "Лёгкий освежающий лимонад с огурцом и мятой.",
    ingredients: ["огуречный сок", "мята", "лайм", "газировка"],
    allergens: [],
    waiterScript: "Лёгкий, как глоток родниковой воды.",
    tags: ["лимонад", "огурец", "мята", "домашний", "газированный"],
  },
  {
    id: "lemonade-carafe",
    name: "Лимонад в графине",
    category: "Лимонады/Смузи",
    price: 1350,
    volume: "800 мл",
    description: "Домашний лимонад в графине на компанию. Любой вкус на выбор.",
    ingredients: ["домашний лимонад на выбор"],
    allergens: [],
    waiterScript: "На компанию выгоднее графин.",
    tags: ["лимонад", "графин", "компания", "домашний", "газированный"],
  },
  {
    id: "smoothie-mango-urbech",
    name: "Смузи манговый урбеч",
    category: "Лимонады/Смузи",
    price: 600,
    volume: "300 мл",
    description: "Полезный смузи с урбечом из тыквенных семечек.",
    ingredients: [
      "манго",
      "банан",
      "урбеч из тыквенных семечек",
      "мёд",
      "кокосовое молоко",
    ],
    allergens: ["мёд", "кокос", "семечки"],
    waiterScript: "Полезный заряд энергии.",
    tags: ["смузи", "манго", "урбеч", "банан", "кокос"],
  },
  {
    id: "smoothie-apple-banana",
    name: "Смузи яблоко банан",
    category: "Лимонады/Смузи",
    price: 600,
    volume: "300 мл",
    description: "Нежный фруктовый смузи с яблоком и бананом.",
    ingredients: ["яблоко", "банан", "мёд", "зелёные мармеладные шарики"],
    allergens: ["мёд"],
    waiterScript: "Банановая нежность и яблочная свежесть.",
    tags: ["смузи", "яблоко", "банан", "мёд"],
  },
  {
    id: "milkshake-vanilla",
    name: "Милкшейк ванильный",
    category: "Лимонады/Смузи",
    price: 550,
    volume: "300 мл",
    description: "Нежный воздушный милкшейк с ванилью.",
    ingredients: [
      "мороженое",
      "молоко",
      "ванильный сироп",
      "взбитые сливки",
      "банан",
    ],
    allergens: ["молоко"],
    waiterScript: "Нежный, воздушный.",
    tags: ["милкшейк", "ваниль", "молоко", "мороженое"],
  },
  {
    id: "milkshake-berry",
    name: "Милкшейк ягодный",
    category: "Лимонады/Смузи",
    price: 550,
    volume: "300 мл",
    description: "Милкшейк с ягодным топпингом и бананом.",
    ingredients: ["мороженое", "молоко", "ягодный топпинг", "банан"],
    allergens: ["молоко"],
    waiterScript: "Ягодный микс.",
    tags: ["милкшейк", "ягоды", "молоко", "мороженое"],
  },
  {
    id: "milkshake-chocolate",
    name: "Милкшейк шоколадный",
    category: "Лимонады/Смузи",
    price: 550,
    volume: "300 мл",
    description: "Шоколадный милкшейк с ореховым сиропом.",
    ingredients: [
      "мороженое",
      "молоко",
      "шоколадный топпинг",
      "банан",
      "ореховый сироп",
    ],
    allergens: ["молоко", "орехи"],
    waiterScript: "Шоколадно-ореховое удовольствие.",
    tags: ["милкшейк", "шоколад", "орехи", "молоко", "мороженое"],
  },
  {
    id: "smoothie-ice-latte-banana-caramel",
    name: "Айс латте банан карамель",
    category: "Лимонады/Смузи",
    price: 460,
    volume: "300 мл",
    description: "Холодный кофейный напиток с бананом и карамелью.",
    ingredients: [
      "эспрессо",
      "молоко",
      "банановый сироп",
      "карамель",
      "взбитые сливки",
      "лёд",
    ],
    allergens: ["молоко"],
    waiterScript: "Кофе с бананом и карамелью.",
    tags: ["айс латте", "кофе", "банан", "карамель", "молоко"],
  },
];

const CATEGORY_ALL = "Все";

const state = {
  activeCategory: CATEGORY_ALL,
  searchQuery: "",
  filteredItems: [],
  currentDrink: null,
};

const dom = {
  hero: null,
  app: null,
  openMenuBtn: null,
  backToHeroBtn: null,
  searchInput: null,
  searchClearBtn: null,
  searchHint: null,
  tabsScroll: null,
  menuGrid: null,
  menuEmpty: null,
  drinkModal: null,
  modalBackdrop: null,
  modalCloseBtn: null,
  modalCategory: null,
  modalTitle: null,
  modalMeta: null,
  modalDescription: null,
  modalIngredients: null,
  modalAllergens: null,
  modalWaiterScript: null,
  copyScriptBtn: null,
};

function formatPrice(price) {
  if (typeof price !== "number" || Number.isNaN(price)) {
    return "";
  }
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(price);
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function getUniqueCategories(menu) {
  const categories = menu.map(function (item) {
    return item.category;
  }).filter(Boolean);

  const unique = [];
  categories.forEach(function (category) {
    if (unique.indexOf(category) === -1) {
      unique.push(category);
    }
  });

  return unique.sort(function (a, b) {
    return a.localeCompare(b, "ru");
  });
}

function itemMatchesSearch(item, query) {
  if (!query) {
    return true;
  }

  const parts = [
    item.name,
    item.category,
    item.description,
    item.volume,
    item.badge,
  ];

  if (Array.isArray(item.ingredients)) {
    parts.push.apply(parts, item.ingredients);
  }

  if (Array.isArray(item.tags)) {
    parts.push.apply(parts, item.tags);
  }

  if (Array.isArray(item.allergens)) {
    parts.push.apply(parts, item.allergens);
  }

  const haystack = normalizeText(parts.join(" "));
  return haystack.indexOf(query) !== -1;
}

function filterMenuItems() {
  const query = normalizeText(state.searchQuery);

  state.filteredItems = BAR_MENU.filter(function (item) {
    const categoryMatch =
      state.activeCategory === CATEGORY_ALL ||
      item.category === state.activeCategory;

    const searchMatch = itemMatchesSearch(item, query);

    return categoryMatch && searchMatch;
  });
}

function cacheDomElements() {
  dom.hero = document.getElementById("hero");
  dom.app = document.getElementById("app");
  dom.openMenuBtn = document.getElementById("openMenuBtn");
  dom.backToHeroBtn = document.getElementById("backToHeroBtn");
  dom.searchInput = document.getElementById("searchInput");
  dom.searchClearBtn = document.getElementById("searchClearBtn");
  dom.searchHint = document.getElementById("searchHint");
  dom.tabsScroll = document.getElementById("tabsScroll");
  dom.menuGrid = document.getElementById("menuGrid");
  dom.menuEmpty = document.getElementById("menuEmpty");
  dom.drinkModal = document.getElementById("drinkModal");
  dom.modalBackdrop = document.getElementById("modalBackdrop");
  dom.modalCloseBtn = document.getElementById("modalCloseBtn");
  dom.modalCategory = document.getElementById("modalCategory");
  dom.modalTitle = document.getElementById("modalTitle");
  dom.modalMeta = document.getElementById("modalMeta");
  dom.modalDescription = document.getElementById("modalDescription");
  dom.modalIngredients = document.getElementById("modalIngredients");
  dom.modalAllergens = document.getElementById("modalAllergens");
  dom.modalWaiterScript = document.getElementById("modalWaiterScript");
  dom.copyScriptBtn = document.getElementById("copyScriptBtn");
}

function openApp() {
  dom.hero.classList.add("hero--hidden");
  dom.hero.setAttribute("aria-hidden", "true");

  dom.app.classList.remove("app--hidden");
  dom.app.setAttribute("aria-hidden", "false");

  buildCategoryTabs();
  renderMenu();
  updateSearchHint();

  window.setTimeout(function () {
    if (dom.searchInput) {
      dom.searchInput.focus();
    }
  }, 400);
}

function closeApp() {
  closeModal();

  dom.app.classList.add("app--hidden");
  dom.app.setAttribute("aria-hidden", "true");

  dom.hero.classList.remove("hero--hidden");
  dom.hero.setAttribute("aria-hidden", "false");

  state.searchQuery = "";
  state.activeCategory = CATEGORY_ALL;

  if (dom.searchInput) {
    dom.searchInput.value = "";
  }

  if (dom.searchClearBtn) {
    dom.searchClearBtn.hidden = true;
  }
}

function buildCategoryTabs() {
  const categories = getUniqueCategories(BAR_MENU);
  const tabLabels = [CATEGORY_ALL].concat(categories);

  dom.tabsScroll.innerHTML = "";

  tabLabels.forEach(function (label) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", label === state.activeCategory ? "true" : "false");
    button.dataset.category = label;
    button.textContent = label;

    if (label === state.activeCategory) {
      button.classList.add("tab--active");
    }

    button.addEventListener("click", function () {
      setActiveCategory(label);
    });

    dom.tabsScroll.appendChild(button);
  });
}

function setActiveCategory(category) {
  state.activeCategory = category;

  const tabs = dom.tabsScroll.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    const isActive = tab.dataset.category === category;
    tab.classList.toggle("tab--active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  filterMenuItems();
  renderMenu();
  updateSearchHint();
}

function createCardElement(item) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "card";
  card.setAttribute("role", "listitem");
  card.dataset.id = item.id;
  card.setAttribute("aria-label", "Открыть карточку: " + item.name);

  if (item.badge) {
    const badge = document.createElement("span");
    badge.className = "card__badge";
    badge.textContent = item.badge;
    card.appendChild(badge);
  }

  const categoryEl = document.createElement("span");
  categoryEl.className = "card__category";
  categoryEl.textContent = item.category || "";
  card.appendChild(categoryEl);

  const nameEl = document.createElement("h3");
  nameEl.className = "card__name";
  nameEl.textContent = item.name || "Без названия";
  card.appendChild(nameEl);

  if (item.description) {
    const descEl = document.createElement("p");
    descEl.className = "card__description";
    descEl.textContent = item.description;
    card.appendChild(descEl);
  }

  if (Array.isArray(item.tags) && item.tags.length > 0) {
    const tagsWrap = document.createElement("div");
    tagsWrap.className = "card__tags";

    item.tags.forEach(function (tag) {
      const tagEl = document.createElement("span");
      tagEl.className = "card__tag";
      tagEl.textContent = tag;
      tagsWrap.appendChild(tagEl);
    });

    card.appendChild(tagsWrap);
  }

  const footer = document.createElement("div");
  footer.className = "card__footer";

  const volumeEl = document.createElement("span");
  volumeEl.className = "card__volume";
  volumeEl.textContent = item.volume || "";
  footer.appendChild(volumeEl);

  const priceEl = document.createElement("span");
  priceEl.className = "card__price";
  priceEl.textContent = formatPrice(item.price);
  footer.appendChild(priceEl);

  card.appendChild(footer);

  card.addEventListener("click", function () {
    openModal(item.id);
  });

  return card;
}

function renderMenu() {
  filterMenuItems();

  dom.menuGrid.innerHTML = "";

  const hasItems = state.filteredItems.length > 0;
  const menuIsEmpty = BAR_MENU.length === 0;

  dom.menuEmpty.hidden = hasItems;

  if (menuIsEmpty) {
    dom.menuEmpty.textContent =
      "Меню пока пустое. Добавьте напитки в массив BAR_MENU в файле data.js.";
    dom.menuEmpty.hidden = false;
    return;
  }

  if (!hasItems) {
    dom.menuEmpty.textContent =
      "По вашему запросу ничего не найдено. Попробуйте изменить поиск или выбрать другую категорию.";
    return;
  }

  state.filteredItems.forEach(function (item) {
    dom.menuGrid.appendChild(createCardElement(item));
  });
}

function updateSearchHint() {
  const query = state.searchQuery.trim();
  const total = BAR_MENU.length;
  const shown = state.filteredItems.length;

  if (total === 0) {
    dom.searchHint.textContent = "Добавьте позиции в BAR_MENU для отображения меню";
    return;
  }

  if (!query && state.activeCategory === CATEGORY_ALL) {
    dom.searchHint.textContent = "Всего позиций: " + total;
    return;
  }

  if (!query) {
    dom.searchHint.textContent =
      "Категория «" + state.activeCategory + "»: " + shown + " из " + total;
    return;
  }

  dom.searchHint.textContent = "Найдено: " + shown + " из " + total;
}

function handleSearchInput(event) {
  state.searchQuery = event.target.value;
  dom.searchClearBtn.hidden = state.searchQuery.length === 0;

  if (state.searchQuery.length > 0 && state.activeCategory !== CATEGORY_ALL) {
    state.activeCategory = CATEGORY_ALL;
    buildCategoryTabs();
  }

  renderMenu();
  updateSearchHint();
}

function clearSearch() {
  state.searchQuery = "";
  dom.searchInput.value = "";
  dom.searchClearBtn.hidden = true;
  renderMenu();
  updateSearchHint();
  dom.searchInput.focus();
}

function findDrinkById(id) {
  return BAR_MENU.find(function (item) {
    return item.id === id;
  }) || null;
}

function renderIngredientsList(ingredients) {
  dom.modalIngredients.innerHTML = "";

  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Состав уточняется у бармена";
    dom.modalIngredients.appendChild(li);
    return;
  }

  ingredients.forEach(function (ingredient) {
    const li = document.createElement("li");
    li.textContent = ingredient;
    dom.modalIngredients.appendChild(li);
  });
}

function renderAllergens(allergens) {
  dom.modalAllergens.className = "modal__allergens";

  if (!Array.isArray(allergens) || allergens.length === 0) {
    dom.modalAllergens.textContent = "Аллергены не указаны";
    dom.modalAllergens.classList.add("modal__allergens--none");
    return;
  }

  dom.modalAllergens.textContent = allergens.join(", ");
  dom.modalAllergens.classList.add("modal__allergens--warning");
}

function openModal(drinkId) {
  const drink = findDrinkById(drinkId);

  if (!drink) {
    return;
  }

  state.currentDrink = drink;

  dom.modalCategory.textContent = drink.category || "";
  dom.modalTitle.textContent = drink.name || "";
  dom.modalMeta.textContent = [drink.volume, formatPrice(drink.price)]
    .filter(Boolean)
    .join(" · ");
  dom.modalDescription.textContent =
    drink.description || "Описание будет добавлено позже.";

  renderIngredientsList(drink.ingredients);
  renderAllergens(drink.allergens);

  dom.modalWaiterScript.textContent =
    drink.waiterScript ||
    "Скрипт для этой позиции пока не заполнен. Уточните детали у старшего официанта.";

  dom.copyScriptBtn.textContent = "Скопировать скрипт";
  dom.copyScriptBtn.classList.remove("modal__copy--success");

  dom.drinkModal.classList.add("modal--open");
  dom.drinkModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  dom.modalCloseBtn.focus();
}

function closeModal() {
  dom.drinkModal.classList.remove("modal--open");
  dom.drinkModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  state.currentDrink = null;
}

async function copyWaiterScript() {
  if (!state.currentDrink || !state.currentDrink.waiterScript) {
    return;
  }

  const text = state.currentDrink.waiterScript;

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    dom.copyScriptBtn.textContent = "Скопировано";
    dom.copyScriptBtn.classList.add("modal__copy--success");

    window.setTimeout(function () {
      dom.copyScriptBtn.textContent = "Скопировать скрипт";
      dom.copyScriptBtn.classList.remove("modal__copy--success");
    }, 2000);
  } catch (error) {
    dom.copyScriptBtn.textContent = "Не удалось скопировать";
    window.setTimeout(function () {
      dom.copyScriptBtn.textContent = "Скопировать скрипт";
    }, 2000);
  }
}

function handleDocumentKeydown(event) {
  if (event.key === "Escape") {
    if (dom.drinkModal.classList.contains("modal--open")) {
      closeModal();
      return;
    }

    if (!dom.app.classList.contains("app--hidden")) {
      closeApp();
    }
  }
}

function bindEvents() {
  dom.openMenuBtn.addEventListener("click", openApp);
  dom.backToHeroBtn.addEventListener("click", closeApp);

  dom.searchInput.addEventListener("input", handleSearchInput);
  dom.searchClearBtn.addEventListener("click", clearSearch);

  dom.modalCloseBtn.addEventListener("click", closeModal);
  dom.modalBackdrop.addEventListener("click", closeModal);
  dom.copyScriptBtn.addEventListener("click", copyWaiterScript);

  document.addEventListener("keydown", handleDocumentKeydown);
}

function initBarMenuApp() {
  cacheDomElements();
  bindEvents();
  buildCategoryTabs();
  renderMenu();
  updateSearchHint();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBarMenuApp);
} else {
  initBarMenuApp();
}
