// ================= DATA =================
const BAR_MENU = [
  // МИНЕРАЛЬНАЯ ВОДА
  { id: 1, name: "Байкал Газ/Негаз", price: 390, volume: "530 мл", description: "Мягкая столовая вода", ingredients: ["Природная вода Байкала"], allergens: [], category: "water", tags: ["Освежающий"] },
  { id: 2, name: "Недра Газ/Негаз", price: 610, volume: "750 мл", description: "Премиальная артезианская вода", ingredients: ["Артезианская вода высшей категории"], allergens: [], category: "water", tags: ["Премиум"] },
  { id: 3, name: "Боржоми", price: 450, volume: "500 мл", description: "Легендарная грузинская минеральная вода", ingredients: ["Минеральная вода Боржоми"], allergens: ["Минеральные соли"], category: "water", tags: ["Классика"] },

  // БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ
  { id: 4, name: "Сок ВИЗ в ассортименте", price: 380, volume: "0.2 л", description: "Натуральный сок на выбор", ingredients: ["Апельсин", "Яблоко", "Томат"], allergens: [], category: "nonalc", tags: ["Натуральный"] },
  { id: 5, name: "Фреш Свежевыжатый", price: 460, volume: "0.2 л", description: "Свежевыжатый сок премиум качества", ingredients: ["Апельсин", "Грейпфрут", "Яблоко"], allergens: ["Цитрус"], category: "nonalc", tags: ["Витаминный"] },
  { id: 6, name: "Классические Газировки", price: 360, volume: "0.25 л", description: "Освежающие газированные напитки", ingredients: ["Кола", "Фанта", "Спрайт"], allergens: [], category: "nonalc", tags: ["Освежающий"] },
  { id: 7, name: "Тоник в ассортименте", price: 370, volume: "0.2 л", description: "Горьковато-сладкий тоник", ingredients: ["Классический тоник", "Имбирный тоник"], allergens: [], category: "nonalc", tags: ["Освежающий"] },

  // ЛИМОНАДЫ И СМУЗИ
  { id: 8, name: "Лимонады Шахерезада Фирменные", price: 540, volume: "400 мл", description: "Авторские освежающие лимонады", ingredients: ["Домашний сироп", "Свежие ягоды", "Мята", "Содовая"], allergens: [], category: "lemonades", tags: ["Хит"] },
  { id: 9, name: "Смузи Ягодный микс", price: 590, volume: "350 мл", description: "Густой витаминный напиток", ingredients: ["Клубника", "Малина", "Черника", "Банановая база"], allergens: [], category: "lemonades", tags: ["ЗОЖ"] },

  // АЛКОГОЛЬНЫЕ НАПИТКИ И НАСТОЙКИ
  { id: 10, name: "Водка Ники Пьюр (Niki Pure)", price: 420, volume: "50 мл", description: "Эксклюзивная супер-мягкая водка", ingredients: ["Спирт Альфа", "Артезианская вода", "Серебряная фильтрация"], allergens: [], category: "alcohol", tags: ["Премиум", "Эксклюзив"] },
  { id: 11, name: "Водка Царская Оригинальная", price: 350, volume: "50 мл", description: "Классическая русская водка", ingredients: ["Спирт Люкс", "Липовый цвет", "Мед натуральный"], allergens: ["Мед"], category: "alcohol", tags: ["Классика"] },
  { id: 12, name: "Фирменная Настойка Хреновуха", price: 380, volume: "50 мл", description: "Острая домашняя настойка на водки Ники Пьюр", ingredients: ["Водка Ники Пьюр", "Корень хрена", "Мед алтайский", "Лимонный сок"], allergens: ["Мед"], category: "alcohol", tags: ["Авторский", "Острый"] },
  { id: 13, name: "Фирменная Настойка Ягодная", price: 380, volume: "50 мл", description: "Сладкая настойка на лесных ягодах", ingredients: ["Водка Ники Пьюр", "Клюква", "Брусника", "Сахарный сироп"], allergens: [], category: "alcohol", tags: ["Сладкий"] },

  // КОКТЕЙЛИ
  { id: 14, name: "Авторский Коктейль Шахерезада", price: 750, volume: "250 мл", description: "Восточный пряный cocktail с плотной пеной", ingredients: ["Джин Hendrick's", "Сироп кардамона", "Лимонный сок", "Яичный белок"], allergens: ["Яйца"], category: "cocktails", tags: ["Хит", "Крепкий"] },
  { id: 15, name: "Классический Джин-Тоник", price: 650, volume: "200 мл", description: "Традиционная освежающая подача", ingredients: ["Джин Hendrick's", "Премиум Тоник", "Огурец", "Лайм"], allergens: [], category: "cocktails", tags: ["Классика"] },

  // ГОРЯЧИЕ НАПИТКИ И ЧАИ
  { id: 16, name: "Взвар Таёжный с медом", price: 480, volume: "600 мл", description: "Травяной согревающий взвар", ingredients: ["Иван-чай", "Чабрец", "Ягоды можжевельника", "Таёжный мед"], allergens: ["Мед"], category: "hot", tags: ["Традиционный"] },
  { id: 17, name: "Капучино на альтернативном молоке", price: 350, volume: "220 мл", description: "Классический кофейный напиток", ingredients: ["Эспрессо", "Миндальное или Кокосовое молоко"], allergens: ["Орехи"], category: "hot", tags: ["Кофе"] }
];

const BAR_TEST = [
  { id: 1, question: "Какая водка используется в качестве основы для фирменных настоек заведения?", options: ["Водка Царская Оригинальная", "Водка Ники Пьюр (Niki Pure)", "Водка Белуга", "Водка Абсолют"], correctAnswerIndex: 1, explanation: "В соответствии с методичкой 2026 года, все фирменные настойки (включая Хреновуху) готовятся строго на премиальной водке Ники Пьюр." },
  { id: 2, question: "Какой опасный аллерген присутствует в составе Авторского коктейля 'Шахерезада'?", options: ["Глютен", "Орехи", "Яичный белок", "Лактоза"], correctAnswerIndex: 2, explanation: "Для создания плотной текстуры и красивой пены в коктейль добавляется натуральный яичный белок. Официант обязан уточнять наличие аллергии на яйца." },
  { id: 3, question: "Какой важный аллерген содержится в водке 'Царская Оригинальная'?", options: ["Натуральный мед", "Глютен", "Цитрусовые экстракты", "Молочный белок"], correctAnswerIndex: 0, explanation: "В рецептуру водки 'Царская Оригинальная' входит натуральный мед для смягчения вкуса. Это критично для гостей с аллергией на продукты пчеловодства." },
  { id: 4, question: "Какое правило подачи установлено для пива 'Corona Extra' по методичке?", options: ["Подается в теплом виде", "Подается строго охлажденным с долькой лайма в горлышке", "Подается со льдом в бокале хайбол", "Подается без добавок"], correctAnswerIndex: 1, explanation: "По правилам сервировки заведения, Corona Extra подается строго охлажденной с долькой свежего лайма." },
  { id: 5, question: "Какой аллерген содержится во взваре 'Таёжный'?", options: ["Орехи", "Лактоза", "Мед", "Яйца"], correctAnswerIndex: 2, explanation: "Взвар 'Таёжный' подслащивается натуральным таёжным медом, о чем необходимо предупреждать гостей." }
];

// ================= ENGINE LOGIC =================
const categories = {
  water: "Минеральная вода",
  nonalc: "Безалкогольные",
  lemonades: "Лимонады и смузи",
  alcohol: "Крепкий алкоголь и настойки",
  cocktails: "Коктейли",
  hot: "Горячие напитки и чаи"
};

let currentCategory = "water";

function renderMenu(items) {
  const menuGrid = document.getElementById('menuGrid') || document.getElementById('menu-grid') || document.querySelector('.grid');
  const menuEmpty = document.getElementById('menuEmpty') || document.getElementById('menu-empty');
  
  if (!menuGrid) return;
  menuGrid.innerHTML = "";
  
  if (items.length === 0) {
    if (menuEmpty) menuEmpty.style.display = 'block';
    return;
  }
  if (menuEmpty) menuEmpty.style.display = 'none';
  
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = "card";
    card.onclick = () => openModal(item);
    
    const tagsHtml = item.tags.map(t => `<span class="tag">${t}</span>`).join('');
    
    card.innerHTML = `
      <div class="card-content">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-sub">${item.description}</p>
        <div class="card-tags">${tagsHtml}</div>
        <div class="volume">${item.volume}</div>
      </div>
      <div class="price">${item.price} ₽</div>
    `;
    menuGrid.appendChild(card);
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val === "") {
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      renderMenu(BAR_MENU.filter(item => item.category === currentCategory));
      return;
    }
    if (searchClearBtn) searchClearBtn.style.display = 'block';
    
    const filtered = BAR_MENU.filter(item => 
      item.name.toLowerCase().includes(val) || 
      item.description.toLowerCase().includes(val) ||
      item.ingredients.some(i => i.toLowerCase().includes(val))
    );
    renderMenu(filtered);
  });
}

function setupModal() {
  const closeBtn = document.getElementById('modalCloseBtn');
  closeBtn?.addEventListener('click', closeModal);
}

function openModal(item) {
  const modal = document.getElementById('drinkModal');
  if (!modal) return;
  
  document.getElementById('modalCategory').textContent = categories[item.category] || "";
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalVolume').textContent = item.volume;
  document.getElementById('modalPrice').textContent = `${item.price} ₽`;
  document.getElementById('modalDesc').textContent = item.description;
  
  document.getElementById('modalIngredients').innerHTML = item.ingredients.map(i => `<span class="tag">${i}</span>`).join('');
  
  const algContainer = document.getElementById('modalAllergens');
  if (algContainer) {
    algContainer.innerHTML = item.allergens.length > 0 
      ? `<p style="color: #ff6b6b; font-weight: bold;">Аллергены: ${item.allergens.join(', ')}</p>`
      : `<p style="color: #6bff6b;">Аллергенов не обнаружено</p>`;
  }

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById('drinkModal');
  if (modal) modal.style.display = "none";
}

function setupTest() {
  const testBtn = document.getElementById('testBtn');
  testBtn?.addEventListener('click', () => {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    document.getElementById('tabsNav').style.display = "none";
    document.querySelector('.search-bar-wrapper').style.display = "none";
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function renderQuestion() {
