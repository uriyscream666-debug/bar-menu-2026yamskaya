// bar_menu_full.js
// Полная барная карта "Трактир / Шахерезада. Лето 2026"
// Без вин. Данные из PDF "Трактир Карта Бара Лето 2026" и учебного пособия.

const BAR_MENU = [
    // 1. МИНЕРАЛЬНАЯ ВОДА
    { id: 1, name: "Байкал газ.", volume: "0.53 л", price: 0, category: "mineral_water", description: "Мягкая столовая вода, отлично утоляет жажду", tags: ["вода", "газированная"], allergens: [] },
    { id: 2, name: "Байкал не газ.", volume: "0.53 л", price: 0, category: "mineral_water", description: "Негазированная столовая вода", tags: ["вода", "негазированная"], allergens: [] },
    { id: 3, name: "Недра газ.", volume: "0.75 л", price: 0, category: "mineral_water", description: "Премиальная российская вода из Новгородской области", tags: ["вода", "газированная"], allergens: [] },
    { id: 4, name: "Недра не газ.", volume: "0.75 л", price: 0, category: "mineral_water", description: "Негазированная премиум-вода", tags: ["вода", "негазированная"], allergens: [] },
    { id: 5, name: "Боржоми", volume: "0.5 л", price: 0, category: "mineral_water", description: "Легендарная грузинская вода, помогает пищеварению", tags: ["вода", "газированная"], allergens: [] },

    // 2. БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ (соки, газировка, морсы, квас, медовуха)
    { id: 6, name: "Сок ВИЗ апельсин", volume: "0.2 л", price: 0, category: "soft", description: "Пастеризованный апельсиновый сок", tags: ["сок"], allergens: [] },
    { id: 7, name: "Сок ВИЗ яблоко", volume: "0.2 л", price: 0, category: "soft", description: "Яблочный сок прямого отжима", tags: ["сок"], allergens: [] },
    { id: 8, name: "Сок ВИЗ томат", volume: "0.2 л", price: 0, category: "soft", description: "Томатный сок с солью", tags: ["сок"], allergens: [] },
    { id: 9, name: "Сок ВИЗ вишня", volume: "0.2 л", price: 0, category: "soft", description: "Вишнёвый сок", tags: ["сок"], allergens: [] },
    { id: 10, name: "Свежевыжатый апельсин", volume: "0.2 л", price: 0, category: "fresh_juices", description: "Фреш из апельсина – максимум витаминов", tags: ["фреш"], allergens: [] },
    { id: 11, name: "Свежевыжатый грейпфрут", volume: "0.2 л", price: 0, category: "fresh_juices", description: "Свежевыжатый грейпфрутовый сок", tags: ["фреш"], allergens: [] },
    { id: 12, name: "Свежевыжатое яблоко", volume: "0.2 л", price: 0, category: "fresh_juices", description: "Яблочный фреш", tags: ["фреш"], allergens: [] },
    { id: 13, name: "Свежевыжатая морковь", volume: "0.2 л", price: 0, category: "fresh_juices", description: "Морковный фреш", tags: ["фреш"], allergens: [] },
    { id: 14, name: "Кока-Кола", volume: "0.25 л", price: 0, category: "soft", description: "Классическая газировка", tags: ["газировка"], allergens: [] },
    { id: 15, name: "Фанта", volume: "0.25 л", price: 0, category: "soft", description: "Апельсиновая газировка", tags: ["газировка"], allergens: [] },
    { id: 16, name: "Спрайт", volume: "0.25 л", price: 0, category: "soft", description: "Лимонно-лаймовая газировка", tags: ["газировка"], allergens: [] },
    { id: 17, name: "Тоник классический", volume: "0.25 л", price: 0, category: "tonic", description: "Хинный тоник", tags: ["тоник"], allergens: [] },
    { id: 18, name: "Тоник имбирный", volume: "0.25 л", price: 0, category: "tonic", description: "Пикантный имбирный эль", tags: ["тоник"], allergens: [] },
    { id: 19, name: "Морс смородина", volume: "0.25 л", price: 0, category: "mors", description: "Домашний морс из чёрной смородины", tags: ["морс"], allergens: [] },
    { id: 20, name: "Морс клюква", volume: "0.25 л", price: 0, category: "mors", description: "Клюквенный морс", tags: ["морс"], allergens: [] },
    { id: 21, name: "Морс облепиха", volume: "0.25 л", price: 0, category: "mors", description: "Облепиховый морс – витаминная бомба", tags: ["морс"], allergens: [] },
    { id: 22, name: "Квас домашний", volume: "0.25 л", price: 0, category: "kvass", description: "Живой, нефильтрованный, с хлебным ароматом", tags: ["квас"], allergens: ["глютен"] },
    { id: 23, name: "Квас домашний вишнёвый", volume: "0.25 л", price: 0, category: "kvass", description: "Квас с вишней – чуть слаще", tags: ["квас"], allergens: ["глютен"] },
    { id: 24, name: "Медовуха", volume: "0.25 л", price: 0, category: "mead", description: "Старинный напиток на мёду, пьётся легко", tags: ["медовуха"], allergens: ["мёд"] },

    // 3. ДОМАШНИЕ ЛИМОНАДЫ (цены из PDF: 460 руб.)
    { id: 25, name: "Райхон", volume: "300 мл", price: 460, category: "lemonades", description: "Настой фиолетового базилика + сахар + лимонная кислота + газировка. С ароматом свежего базилика", tags: ["лимонад"], allergens: [] },
    { id: 26, name: "Тархун", volume: "300 мл", price: 460, category: "lemonades", description: "Экстракт эстрагона + лимон + лайм + газировка. Натуральный тархун – вкус из детства", tags: ["лимонад"], allergens: [] },
    { id: 27, name: "Мандариновый", volume: "300 мл", price: 460, category: "lemonades", description: "Пюре мандаринов + юдзу + фруктозный сироп + газировка + мармеладные шарики. Солнечный, с кислинкой", tags: ["лимонад"], allergens: [] },
    { id: 28, name: "Имбирь мёд лимон", volume: "300 мл", price: 460, category: "lemonades", description: "Имбирный сок + мёд + лайм + газировка. Согревающий лимонад", tags: ["лимонад"], allergens: ["мёд"] },
    { id: 29, name: "Смородина иван-чай", volume: "300 мл", price: 460, category: "lemonades", description: "Пюре чёрной смородины + отвар иван-чая + газировка + свежие ягоды. Таёжный вкус", tags: ["лимонад"], allergens: [] },
    { id: 30, name: "Манго маракуйя кокос", volume: "300 мл", price: 460, category: "lemonades", description: "Пюре манго + маракуйя + кокосовое молоко + газировка + мармеладные шарики. Тропический взрыв – самый популярный", tags: ["лимонад"], allergens: ["кокос"] },
    { id: 31, name: "Огурец и мята", volume: "300 мл", price: 460, category: "lemonades", description: "Огуречный сок + мята + лайм + газировка. Лёгкий, как глоток родниковой воды", tags: ["лимонад"], allergens: [] },
    { id: 32, name: "Лимонад в графине", volume: "800 мл", price: 0, category: "lemonades", description: "Любой вкус на выбор, на компанию выгоднее", tags: ["лимонад"], allergens: [] },

    // 4. СМУЗИ / МИЛКШЕЙКИ (цены из PDF: смузи 380/460, милкшейки 360-460, айс латте 370)
    { id: 33, name: "Смузи манговый урбеч", volume: "300 мл", price: 460, category: "smoothies", description: "Манго + банан + урбеч из тыквенных семечек + мёд + кокосовое молоко. Полезный заряд энергии", tags: ["смузи"], allergens: ["мёд", "кокос", "семечки"] },
    { id: 34, name: "Смузи яблоко банан", volume: "300 мл", price: 380, category: "smoothies", description: "Яблоко + банан + мёд + зелёные мармеладные шарики. Банановая нежность и яблочная свежесть", tags: ["смузи"], allergens: ["мёд"] },
    { id: 35, name: "Милкшейк ванильный", volume: "290 мл", price: 360, category: "milkshakes", description: "Мороженое + молоко + ванильный сироп + взбитые сливки + банан. Нежный, воздушный", tags: ["милкшейк"], allergens: ["молоко"] },
    { id: 36, name: "Милкшейк ягодный", volume: "290 мл", price: 370, category: "milkshakes", description: "Мороженое + молоко + ягодный топпинг + банан. Ягодный микс", tags: ["милкшейк"], allergens: ["молоко"] },
    { id: 37, name: "Милкшейк шоколадный", volume: "290 мл", price: 400, category: "milkshakes", description: "Мороженое + молоко + шоколадный топпинг + банан + ореховый сироп. Шоколадно-ореховое удовольствие", tags: ["милкшейк"], allergens: ["молоко", "орехи"] },
    { id: 38, name: "Айс латте банан карамель", volume: "290 мл", price: 370, category: "coffee", description: "Эспрессо + молоко + банановый сироп + карамель + взбитые сливки + лёд. Кофе с бананом и карамелью", tags: ["кофе"], allergens: ["молоко"] },

    // 5. ВЗВАРЫ (горячие безалкогольные) – цены из PDF: 650 руб.
    { id: 39, name: "Мандарин белый кардамон", volume: "500 мл", price: 650, category: "herbal_tea", description: "Мандариновый сок + цедра + кардамон + кипяток. Пряный, согревающий", tags: ["взвар", "согревающий"], allergens: [] },
    { id: 40, name: "Яблоко корица османтус", volume: "500 мл", price: 650, category: "herbal_tea", description: "Яблоко + корица + чай османтус + мёд + кипяток. Аромат яблочного пирога", tags: ["взвар"], allergens: ["мёд"] },
    { id: 41, name: "Смородина иван-чай", volume: "500 мл", price: 650, category: "herbal_tea", description: "Пюре чёрной смородины + лимон + иван-чай + мята + кипяток. Ягодно-травяной", tags: ["взвар"], allergens: [] },
    { id: 42, name: "Груша имбирь мёд", volume: "500 мл", price: 650, category: "herbal_tea", description: "Груша + имбирь + лайм + мята + мёд + кипяток. Имбирно-грушевый, согревающий", tags: ["взвар"], allergens: ["мёд"] },
    { id: 43, name: "Облепиха корица", volume: "500 мл", price: 650, category: "herbal_tea", description: "Облепиха + корица + ванильный сироп + лимон + кипяток. Витаминная бомба", tags: ["взвар"], allergens: [] },
    { id: 44, name: "Глинтвейн безалкогольный", volume: "500 мл", price: 650, category: "herbal_tea", description: "Пряный сироп на виноградном соке + корица + апельсин + яблоко + кипяток. Пряная альтернатива кофе", tags: ["взвар"], allergens: [] },

    // 6. КЛАССИЧЕСКИЙ ЧАЙ (800 мл) и добавки
    { id: 45, name: "Чай Ассам", volume: "800 мл", price: 600, category: "black_tea", description: "Крепкий, медовый чёрный чай", tags: ["чай", "чёрный"], allergens: [] },
    { id: 46, name: "Чай Эрл Грей", volume: "800 мл", price: 600, category: "black_tea", description: "Чёрный чай с бергамотом", tags: ["чай", "чёрный"], allergens: [] },
    { id: 47, name: "Чай Сенча", volume: "800 мл", price: 600, category: "green_tea", description: "Зелёный чай с травянистой горчинкой", tags: ["чай", "зелёный"], allergens: [] },
    { id: 48, name: "Молочный Улун", volume: "800 мл", price: 600, category: "oolong_tea", description: "Зелёный улун с натуральным сливочным ароматом, наш бестселлер", tags: ["чай", "улун"], allergens: [] },
    // Добавки к чаю (отдельные позиции, цена 160 руб. за 10 г)
    { id: 49, name: "Мята (добавка к чаю)", volume: "10 г", price: 160, category: "tea_addons", description: "Свежая мята", tags: ["добавка"], allergens: [] },
    { id: 50, name: "Чабрец (добавка к чаю)", volume: "10 г", price: 160, category: "tea_addons", description: "Тимьян", tags: ["добавка"], allergens: [] },
    { id: 51, name: "Липа (добавка к чаю)", volume: "10 г", price: 160, category: "tea_addons", description: "Цветки липы", tags: ["добавка"], allergens: [] },
    { id: 52, name: "Корень имбиря (добавка)", volume: "10 г", price: 160, category: "tea_addons", description: "Свежий имбирь", tags: ["добавка"], allergens: [] },
    { id: 53, name: "Лимон (добавка к чаю)", volume: "10 г", price: 160, category: "tea_addons", description: "Долька лимона", tags: ["добавка"], allergens: [] },
    { id: 54, name: "Мёд (добавка к чаю)", volume: "10 г", price: 160, category: "tea_addons", description: "Натуральный мёд", tags: ["добавка"], allergens: ["мёд"] },

    // 7. ТРАВЯНЫЕ И АВТОРСКИЕ ЧАИ (800 мл, цена 600 руб.)
    { id: 55, name: "Полевой сбор алтайских трав", volume: "800 мл", price: 600, category: "herbal_tea", description: "Иван-чай, таволга, лист берёзы, эхинацея, душица. Успокаивающий", tags: ["травяной чай"], allergens: [] },
    { id: 56, name: "Таёжный сбор с молодыми шишками", volume: "800 мл", price: 600, category: "herbal_tea", description: "Иван-чай, душица, кедровая хвоя, шиповник, шишки. Согревающий, смолистый", tags: ["травяной чай"], allergens: [] },
    { id: 57, name: "Горный сбор кавказских трав", volume: "800 мл", price: 600, category: "herbal_tea", description: "Чабрец, зверобой, душица, мята. Тонизирующий", tags: ["травяной чай"], allergens: [] },
    { id: 58, name: "Иван-чай", volume: "800 мл", price: 600, category: "herbal_tea", description: "Только кипрей. Мягкий, слегка сладковатый", tags: ["травяной чай"], allergens: [] },
    { id: 59, name: "Саган-дайля (шаманский чай)", volume: "800 мл", price: 600, category: "herbal_tea", description: "Рододендрон Адамса. Очень бодрит, сильнее кофе", tags: ["травяной чай"], allergens: [] },
    { id: 60, name: "Ромашка с мятой", volume: "800 мл", price: 600, category: "herbal_tea", description: "Цветки ромашки + листья мяты. Спокойный, успокаивающий", tags: ["травяной чай"], allergens: [] },
    { id: 61, name: "Липовый с османтусом и апельсином", volume: "800 мл", price: 600, category: "herbal_tea", description: "Липа, османтус, цедра апельсина. Медово-цитрусовый", tags: ["травяной чай"], allergens: [] },

    // 8. КОФЕ (цены из PDF)
    { id: 62, name: "Эспрессо", volume: "30 мл", price: 300, category: "coffee", description: "Чистый кофе на 100% арабике", tags: ["кофе"], allergens: [] },
    { id: 63, name: "Двойной эспрессо", volume: "60 мл", price: 350, category: "coffee", description: "Двойная порция эспрессо", tags: ["кофе"], allergens: [] },
    { id: 64, name: "Американо", volume: "200 мл", price: 300, category: "coffee", description: "Эспрессо + вода", tags: ["кофе"], allergens: [] },
    { id: 65, name: "Капучино", volume: "200 мл", price: 360, category: "coffee", description: "Кофе с молочной пеной", tags: ["кофе"], allergens: ["молоко"] },
    { id: 66, name: "Двойной капучино", volume: "350 мл", price: 400, category: "coffee", description: "Увеличенная порция капучино", tags: ["кофе"], allergens: ["молоко"] },
    { id: 67, name: "Латте макиато", volume: "350 мл", price: 370, category: "coffee", description: "Слоёный кофе с молоком", tags: ["кофе"], allergens: ["молоко"] },
    { id: 68, name: "Раф с карамелью", volume: "350 мл", price: 460, category: "coffee", description: "Кофе со сливками и карамелью", tags: ["кофе"], allergens: ["молоко", "сливки"] },
    { id: 69, name: "Флэт уайт", volume: "200 мл", price: 360, category: "coffee", description: "Двойной эспрессо с микропеной", tags: ["кофе"], allergens: ["молоко"] },
    { id: 70, name: "Капучино на альтернативном молоке", volume: "200 мл", price: 450, category: "coffee", description: "На кокосовом, миндальном или банановом молоке", tags: ["кофе"], allergens: ["кокос", "орехи"] },
    { id: 71, name: "Латте на альтернативном молоке", volume: "350 мл", price: 450, category: "coffee", description: "На кокосовом, миндальном или банановом молоке", tags: ["кофе"], allergens: ["кокос", "орехи"] },
    { id: 72, name: "Матча латте", volume: "350 мл", price: 600, category: "coffee", description: "Чай матча с молоком", tags: ["матча"], allergens: ["молоко"] },
    { id: 73, name: "Какао с маршмеллоу", volume: "270 мл", price: 600, category: "coffee", description: "Горячее какао с зефиром", tags: ["какао"], allergens: ["молоко"] },
    { id: 74, name: "Сироп в ассортименте", volume: "10 мл", price: 120, category: "coffee_addons", description: "Любой сироп: ваниль, карамель, лесной орех и др.", tags: ["добавка"], allergens: [] },

    // 9. ПИВО / СИДР (бутылочное и разливное) – цены не указаны, ставим 0
    { id: 75, name: "Peroni (Италия)", volume: "330 мл", price: 0, category: "beer", description: "Светлый пилснер", tags: ["пиво"], allergens: ["глютен"] },
    { id: 76, name: "Corona Extra (Мексика)", volume: "335 мл", price: 0, category: "beer", description: "Светлое фильтрованное, подаётся с лаймом", tags: ["пиво"], allergens: ["глютен"] },
    { id: 77, name: "Циндао Витбир (Китай)", volume: "330 мл", price: 0, category: "beer", description: "Пшеничное нефильтрованное", tags: ["пиво"], allergens: ["глютен"] },
    { id: 78, name: "Clausthaler б/а (Германия)", volume: "330 мл", price: 0, category: "beer", description: "Безалкогольное светлое", tags: ["пиво", "безалкогольное"], allergens: ["глютен"] },
    { id: 79, name: "Radeberger Pilsner (Германия)", volume: "330 мл", price: 0, category: "beer", description: "Классический немецкий пилснер", tags: ["пиво"], allergens: ["глютен"] },
    { id: 80, name: "Сидр Дальняя Дача сухой (Россия)", volume: "500 мл", price: 0, category: "cider", description: "Яблочный сухой сидр", tags: ["сидр"], allergens: ["глютен", "сульфиты"] },
    { id: 81, name: "Сидр Дальняя Дача полусухой (Россия)", volume: "500 мл", price: 0, category: "cider", description: "Яблочный полусухой сидр", tags: ["сидр"], allergens: ["сульфиты"] },
    { id: 82, name: "Бланш Де Брюселль (Бельгия) разливное", volume: "0.5 л", price: 0, category: "draft_beer", description: "Пшеничное светлое нефильтрованное", tags: ["пиво", "разливное"], allergens: ["глютен"] },
    { id: 83, name: "Штигль Гольдбразу (Австрия) разливное", volume: "0.5 л", price: 0, category: "draft_beer", description: "Светлый лагер", tags: ["пиво", "разливное"], allergens: ["глютен"] },

    // 10. КОКТЕЙЛИ (без винных) – составы из учебного пособия
    { id: 84, name: "Лавандовый джин-тоник", volume: "250 мл", price: 0, category: "cocktails", description: "Джин + лавандовый сироп + тоник + мармеладные шарики. Фиолетовый, с ароматом лаванды", tags: ["коктейль"], allergens: [] },
    { id: 85, name: "Дайкири банан", volume: "200 мл", price: 0, category: "cocktails", description: "Белый ром + банановый сироп + лайм + свежий банан + карамелизованный банан. Кисло-сладкий сбалансированный коктейль", tags: ["коктейль"], allergens: [] },
    { id: 86, name: "Абрикосовый сауэр", volume: "200 мл", price: 0, category: "cocktails", description: "Абрикосовый ликёр + водка + лимон + яичный белок + персик. Кисло-сладкий с пеной. Без трубочки", tags: ["коктейль"], allergens: ["яйцо"] },
    { id: 87, name: "Базиликовый джин", volume: "250 мл", price: 0, category: "cocktails", description: "Джин + молочно-кислый сироп + свежий базилик. Очень зелёный, свежий", tags: ["коктейль"], allergens: [] },
    { id: 88, name: "Берёзовый виски коллинз", volume: "300 мл", price: 0, category: "cocktails", description: "Бурбон + берёзово-душицево-квасной сироп + розмарин + содовая. Наша гордость", tags: ["коктейль"], allergens: [] },
    { id: 89, name: "Негрони", volume: "100 мл", price: 0, category: "cocktails", description: "Джин + горький ликёр Кампари + сладкий красный вермут + апельсиновая цедра. Для ценителей горького баланса", tags: ["коктейль"], allergens: ["сульфиты"] },
    { id: 90, name: "Манго маракуйя", volume: "200 мл", price: 0, category: "cocktails", description: "Смесь манго и маракуйи + лайм + яичный белок + свежая маракуйя. Тропический сауэр. Без трубочки", tags: ["коктейль"], allergens: ["яйцо"] },
    { id: 91, name: "Смородиновый мул", volume: "300 мл", price: 0, category: "cocktails", description: "Настойка чёрной смородины + имбирный эль + лайм + свежие ягоды + мята. Русский Moscow Mule", tags: ["коктейль"], allergens: [] },
    { id: 92, name: "Киви крыжовник смэш", volume: "200 мл", price: 0, category: "cocktails", description: "Крыжовник + киви + лайм + яичный белок + порошок матча. Кисло-зелёный. Без трубочки", tags: ["коктейль"], allergens: ["яйцо"] },
    { id: 93, name: "Огурец женевер лайм", volume: "250 мл", price: 0, category: "cocktails", description: "Можжевеловая настойка + огурец + лайм + содовая", tags: ["коктейль"], allergens: [] },
    { id: 94, name: "Кампari спритц (без игристого вина? но в PDF есть – убираем, оставляем только безалкогольные варианты? По условию вино не трогаем, значит коктейли с игристым исключаем. Я уже исключил Апероль, Кампари спритц, Гранат смородина розовый брют. Остаётся чистый Негрони – без вина, вермут есть, но вермут – вино? Вермут – креплёное вино, но обычно его относят к алкоголю. По условию "винную карту не трогаем" – я оставлю Негрони, так как это классический коктейль без игристого вина. Если нужно строго без виноградных вин – удалим Негрони. Но для обучения официантов он важен. Оставлю с пометкой "аллергены: сульфиты". }

    // 11. АВТОРСКИЕ НАСТОЙКИ (50 мл) – цены нет, ставим 0
    { id: 95, name: "Сливянка", volume: "50 мл", price: 0, category: "infusions", description: "На тёмном роме: слива + кизил + пряности. Кисло-сладкая, согревающая", tags: ["настойка"], allergens: [] },
    { id: 96, name: "Гранатовая", volume: "50 мл", price: 0, category: "infusions", description: "На водке: гранат + пряности", tags: ["настойка"], allergens: [] },
    { id: 97, name: "Жимолость", volume: "50 мл", price: 0, category: "infusions", description: "На водке: ягоды жимолости", tags: ["настойка"], allergens: [] },
    { id: 98, name: "Пряная груша", volume: "50 мл", price: 0, category: "infusions", description: "На водке: груша + корица + гвоздика. Сладкая, пряная", tags: ["настойка"], allergens: [] },
    { id: 99, name: "Малина тархун", volume: "50 мл", price: 0, category: "infusions", description: "На роме: малина + эстрагон. Фруктово-травяная", tags: ["настойка"], allergens: [] },
    { id: 100, name: "Грейпфрут и роза", volume: "50 мл", price: 0, category: "infusions", description: "На водке: грейпфрут + розовые лепестки", tags: ["настойка"], allergens: [] },
    { id: 101, name: "Лимончелло", volume: "50 мл", price: 0, category: "infusions", description: "На водке: лимонная цедра + сахар. Освежающая цитрусовая", tags: ["настойка"], allergens: [] },
    { id: 102, name: "Клюквенная", volume: "50 мл", price: 0, category: "infusions", description: "На водке: клюква", tags: ["настойка"], allergens: [] },
    { id: 103, name: "Крыжовник сезонный", volume: "50 мл", price: 0, category: "infusions", description: "На водке: крыжовник", tags: ["настойка"], allergens: [] },
    { id: 104, name: "Клубника лемонграсс", volume: "50 мл", price: 0, category: "infusions", description: "На роме: клубника + лимонное сорго", tags: ["настойка"], allergens: [] },
    { id: 105, name: "Красная смородина перец", volume: "50 мл", price: 0, category: "infusions", description: "На водке: смородина + розовый перец. Фруктово-пряная, с перчинкой", tags: ["настойка"], allergens: [] },
    { id: 106, name: "Хреновуха", volume: "50 мл", price: 0, category: "infusions", description: "На водке: хрен + дижонская горчица + специи. Острая, пряная", tags: ["настойка"], allergens: [] },
    { id: 107, name: "Перцовка", volume: "50 мл", price: 0, category: "infusions", description: "На водке: стручковый перец", tags: ["настойка"], allergens: [] },
    { id: 108, name: "Вишнёвая на джине", volume: "50 мл", price: 0, category: "infusions", description: "На джине: вишня. С можжевеловым оттенком", tags: ["настойка"], allergens: [] },
    { id: 109, name: "Черноплодная рябина", volume: "50 мл", price: 0, category: "infusions", description: "На водке: черноплодная рябина. Терпкая, с горчинкой", tags: ["настойка"], allergens: [] },
    { id: 110, name: "Сет настоек Топ 8", volume: "8*50 мл", price: 0, category: "infusions", description: "8 разных настоек (состав обновляется еженедельно). Выгоднее и интереснее", tags: ["настойка", "сет"], allergens: [] },

    // 12. НАСТОЙКИ НА УЛЬТРАПРЕМИАЛЬНОЙ ВОДКЕ NIKI PURE
    { id: 111, name: "Кавказский кизил (Niki Pure)", volume: "50 мл", price: 0, category: "premium_infusions", description: "Водка Niki Pure + кизил + чёрная смородина + красный вермут. Густой кизил с терпкостью", tags: ["настойка", "премиум"], allergens: [] },
    { id: 112, name: "Брусника саган-дайля (Niki Pure)", volume: "50 мл", price: 0, category: "premium_infusions", description: "Водка Niki Pure + брусника + саган-дайля + розовый перец + аперитивный ликёр. Кисло-сладкая, с хвойно-цветочным оттенком", tags: ["настойка", "премиум"], allergens: [] },

    // 13. КРЕПКИЙ АЛКОГОЛЬ (водка, ром, джин, текила, виски, ликёры) – описания из российских источников
    { id: 113, name: "Водка Niki Pure", volume: "50 мл", price: 0, category: "spirits", description: "Солодовый спирт Альфа, очень мягкая, кристально чистая", tags: ["водка"], allergens: ["глютен"] },
    { id: 114, name: "Водка Царская Золотая", volume: "50 мл", price: 0, category: "spirits", description: "С нотками липового мёда и кедровых орешков", tags: ["водка"], allergens: ["глютен"] },
    { id: 115, name: "Водка Арктика", volume: "50 мл", price: 0, category: "spirits", description: "Органическая из пшеницы и ржи, гладкий вкус", tags: ["водка"], allergens: ["глютен"] },
    { id: 116, name: "Водка Онегин", volume: "50 мл", price: 0, category: "spirits", description: "Первая органик-водка России, мягкий вкус", tags: ["водка"], allergens: ["глютен"] },
    { id: 117, name: "Ром Matusalem Wine Kask", volume: "50 мл", price: 0, category: "spirits", description: "Травянистый, для коктейлей", tags: ["ром"], allergens: [] },
    { id: 118, name: "Ром Matusalem Gran Reserva 12 YO", volume: "50 мл", price: 0, category: "spirits", description: "12-летний, с нотами карамели и изюма", tags: ["ром"], allergens: [] },
    { id: 119, name: "Ром Santo Domingo Reserva", volume: "50 мл", price: 0, category: "spirits", description: "Золотой, ванильно-фруктовый", tags: ["ром"], allergens: [] },
    { id: 120, name: "Джин Bobbis Shidam", volume: "50 мл", price: 0, category: "spirits", description: "Классический с ванилью и кардамоном", tags: ["джин"], allergens: ["глютен"] },
    { id: 121, name: "Джин Hoppers", volume: "50 мл", price: 0, category: "spirits", description: "Средиземноморский с мандарином", tags: ["джин"], allergens: ["глютен"] },
    { id: 122, name: "Текила Ley 925 Blanco", volume: "50 мл", price: 0, category: "spirits", description: "Невыдержанная, дымная, подаётся с сангритой", tags: ["текила"], allergens: [] },
    { id: 123, name: "Текила Ley 925 Reposado", volume: "50 мл", price: 0, category: "spirits", description: "Премиальная выдержанная текила", tags: ["текила"], allergens: [] },
    { id: 124, name: "Виски Glen Moray 12", volume: "50 мл", price: 0, category: "spirits", description: "Односолодовый, цветочно-фруктовый (Спейсайд)", tags: ["виски"], allergens: ["глютен"] },
    { id: 125, name: "Виски Glen Moray 18", volume: "50 мл", price: 0, category: "spirits", description: "18-летний, богатый вкус", tags: ["виски"], allergens: ["глютен"] },
    { id: 126, name: "Виски Omar", volume: "50 мл", price: 0, category: "spirits", description: "Ноты изюма и апельсина", tags: ["виски"], allergens: ["глютен"] },
    { id: 127, name: "Виски Chivas Regal 12", volume: "50 мл", price: 0, category: "spirits", description: "Купажированный, мёд и яблоко", tags: ["виски"], allergens: ["глютен"] },
    { id: 128, name: "Виски Jack Daniel's Old No.7", volume: "50 мл", price: 0, category: "spirits", description: "Бурбон с карамелью и дубом", tags: ["виски"], allergens: ["глютен"] },
    { id: 129, name: "Ликёр Campari", volume: "50 мл", price: 0, category: "liqueurs", description: "Цитрусовый, сладкий", tags: ["ликёр"], allergens: ["сульфиты"] },
    { id: 130, name: "Ликёр Fernet Branca", volume: "50 мл", price: 0, category: "liqueurs", description: "Мятно-пряный биттер", tags: ["ликёр"], allergens: [] },
    { id: 131, name: "Ликёр Jägermeister", volume: "50 мл", price: 0, category: "liqueurs", description: "Травяной биттер", tags: ["ликёр"], allergens: [] },
    { id: 132, name: "Ликёр Chiyomusubi Ultra Yuzu (6%)", volume: "50 мл", price: 0, category: "liqueurs", description: "Юдзу-ликёр на саке", tags: ["ликёр"], allergens: [] }
];

// КАТЕГОРИИ для навигации (именно в таком порядке)
const categories = {
    mineral_water: "💧 Минеральная вода",
    soft: "🥤 Безалкогольные напитки",
    fresh_juices: "🍊 Свежевыжатые соки",
    tonic: "🍹 Тоники",
    mors: "🍒 Морсы",
    kvass: "🍞 Квас",
    mead: "🍯 Медовуха",
    lemonades: "🍋 Домашние лимонады",
    smoothies: "🍌 Смузи",
    milkshakes: "🥛 Милкшейки",
    herbal_tea: "🌿 Взвары (горячие безалкогольные)",
    black_tea: "🖤 Чёрный чай",
    green_tea: "💚 Зелёный чай",
    oolong_tea: "🍃 Молочный улун",
    tea_addons: "🌱 Добавки к чаю",
    coffee: "☕ Кофе",
    coffee_addons: "🍬 Сиропы",
    beer: "🍺 Пиво бутылочное",
    draft_beer: "🍻 Пиво разливное",
    cider: "🍎 Сидр",
    cocktails: "🍸 Коктейли",
    infusions: "🏺 Авторские настойки",
    premium_infusions: "✨ Настойки Niki Pure",
    spirits: "🥃 Крепкий алкоголь",
    liqueurs: "🍾 Ликёры"
};
