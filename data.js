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
  { id: 14, name: "Авторский Коктейль Шахерезада", price: 750, volume: "250 мл", description: "Восточный пряный коктейль с плотной пеной", ingredients: ["Джин Hendrick's", "Сироп кардамона", "Лимонный сок", "Яичный белок"], allergens: ["Яйца"], category: "cocktails", tags: ["Хит", "Крепкий"] },
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

function initApp() {
  renderTabs();
  renderMenu(BAR_MENU.filter(item => item.category === currentCategory));
  setupSearch();
  setupModal();
  setupTest();
  
  // Кнопка главного меню на стартовом экране
  document.getElementById('startBtn')?.addEventListener('click', () => {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('app').style.removeAttribute ? document.getElementById('app').removeAttribute('style') : document.getElementById('app').style.display = 'block';
  });
}

function renderTabs() {
  const tabsScroll = document.getElementById('tabs_scroll') || document.getElementById('tabsScroll') || document.getElementById('tabsNav') || document.getElementById('tabs');
  if (!tabsScroll) return;
  tabsScroll.innerHTML = "";
  
  Object.keys(categories).forEach(key => {
    const btn = document.createElement('button');
    btn.className = `nav-btn ${key === currentCategory ? 'active' : ''}`;
    btn.textContent = categories[key];
    btn.onclick = () => {
      currentCategory = key;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(BAR_MENU.filter(item => item.category === currentCategory));
    };
    tabsScroll.appendChild(btn);
  });
}

function renderMenu(items) {
    const menuGrid = document.getElementById('menuGrid') || document.getElementById('menu-grid') || document.querySelector('.grid') || document.querySelector('.menu-grid');
  const menuEmpty = document.getElementById('menuEmpty') || document.getElementById('menu-empty') || document.querySelector('.empty-message') || document.querySelector('.menu-empty');
  if (!menuGrid) return;
  
  menuGrid.innerHTML = "";
  
  if (items.length === 0) {
    if (menuEmpty) menuEmpty.hidden = false;
    return;
  }
  if (menuEmpty) menuEmpty.hidden = true;
  
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = "card";
    card.setAttribute('role', 'listitem');
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
  
  searchInput?.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val === "") {
      if (searchClearBtn) searchClearBtn.hidden = true;
      renderMenu(BAR_MENU.filter(item => item.category === currentCategory));
      return;
    }
    if (searchClearBtn) searchClearBtn.hidden = false;
    
    const filtered = BAR_MENU.filter(item => 
      item.name.toLowerCase().includes(val) || 
      item.description.toLowerCase().includes(val) ||
      item.ingredients.some(i => i.toLowerCase().includes(val))
    );
    renderMenu(filtered);
  });
  
  searchClearBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = "";
    if (searchClearBtn) searchClearBtn.hidden = true;
    renderMenu(BAR_MENU.filter(item => item.category === currentCategory));
  });
}

function setupModal() {
  const modal = document.getElementById('drinkModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const backdrop = document.getElementById('modalBackdrop');
  
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);
}

function openModal(item) {
  const modal = document.getElementById('drinkModal');
  if (!modal) return;
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalVolume = document.getElementById('modalVolume');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const ingContainer = document.getElementById('modalIngredients');
  const algContainer = document.getElementById('modalAllergens');
  const scriptContainer = document.getElementById('modalWaiterScript');

  if (modalCategory) modalCategory.textContent = categories[item.category] || "";
  if (modalTitle) modalTitle.textContent = item.name;
  if (modalVolume) modalVolume.textContent = item.volume;
  if (modalPrice) modalPrice.textContent = `${item.price} ₽`;
  if (modalDesc) modalDesc.textContent = item.description;
  
  if (ingContainer) ingContainer.innerHTML = item.ingredients.map(i => `<span class="tag">${i}</span>`).join('');
  
  if (algContainer) {
    if (item.allergens.length > 0) {
      algContainer.innerHTML = `<p style="color: #ff6b6b; font-weight: bold;">Аллергены: ${item.allergens.join(', ')}</p>`;
    } else {
      algContainer.innerHTML = `<p style="color: #6bff6b;">Аллергенов не обнаружено</p>`;
    }
  }
  
  if (scriptContainer) {
    scriptContainer.innerHTML = `<p style="font-style: italic; color: #ced4da;">💡 <strong>Подсказка официанту:</strong> Предложите данный напиток в качестве идеального дополнения к основным летним блюдам заведения.</p>`;
  }

  modal.removeAttribute('aria-hidden');
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById('drinkModal');
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  modal.style.display = "none";
}

function setupTest() {
  const testBtn = document.getElementById('testBtn');
  if (!testBtn) return;
  
  testBtn.addEventListener('click', () => {
    const menuGrid = document.getElementById('menuGrid') || document.getElementById('menuGrid1');
    if (!menuGrid) return;
    
    const tabsNav = document.getElementById('tabsNav') || document.getElementById('tabs_scroll') || document.getElementById('tabs');
    if (tabsNav) tabsNav.style.display = "none";
    
    const searchWrapper = document.querySelector('.search-bar-wrapper') || document.querySelector('.search-box') || document.getElementById('searchInput');
    if (searchWrapper) searchWrapper.style.display = "none";
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function renderQuestion() {
      if (currentQuestionIndex >= BAR_TEST.length) {
        let rating = score === BAR_TEST.length ? "Отлично! Аттестация пройдена." : "Нужно повторить методичку.";
        menuGrid.innerHTML = `
          <div style="text-align: center; width: 100%; padding: 2rem; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--gold);">
            <h2 style="color: var(--gold); margin-bottom: 1rem;">Тестирование завершено</h2>
            <p style="font-size: 1.5rem; margin-bottom: 1rem;">Ваш результат: <strong>${score} из ${BAR_TEST.length}</strong></p>
            <p style="font-style: italic; color: var(--text-muted); margin-bottom: 2rem;">${rating}</p>
            <button onclick="window.location.reload()" class="btn-gold" style="font-size: 1rem; padding: 0.5rem 1.5rem; border-radius:20px; cursor:pointer;">Вернуться в меню</button>
          </div>
        `;
        return;
      }
      
      const q = BAR_TEST[currentQuestionIndex];
      menuGrid.innerHTML = `
        <div style="width: 100%; max-width: 600px; margin: 0 auto; background: var(--bg-card); padding: 2rem; border-radius: 12px; border: 1px solid rgba(214,175,55,0.3);">
          <p style="color: var(--gold); font-size: 0.9rem; margin-bottom: 0.5rem;">Вопрос ${currentQuestionIndex + 1} из ${BAR_TEST.length}</p>
          <h3 style="margin-bottom: 1.5rem; font-family: 'Cormorant Garamond', serif; font-size: 1.6rem;">${q.question}</h3>
          <div id="optionsBlock" style="display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 1.5rem;"></div>
          <div id="explanationBlock" style="display: none; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 8px; margin-bottom: 1.5rem; border-left: 3px solid var(--gold);">
            <p style="font-size: 0.9rem; line-height: 1.4;">${q.explanation}</p>
          </div>
          <button id="nextQBtn" class="btn-gold" style="display: none; font-size: 1rem; padding: 0.5rem 1.5rem; margin-left: auto; border-radius:20px; cursor:pointer;">Следующий вопрос</button>
        </div>
      `;
      
      const optionsBlock = document.getElementById('optionsBlock');
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.style.width = "100%";
        btn.style.padding = "0.8rem 1.2rem";
        btn.style.textAlign = "left";
        btn.style.background = "rgba(255,255,255,0.02)";
        btn.style.border = "1px solid rgba(214,175,55,0.2)";
        btn.style.color = "var(--text-main)";
        btn.style.borderRadius = "8px";
        btn.style.cursor = "pointer";
        btn.style.transition = "0.2s";
        btn.textContent = opt;
        
        btn.onclick = () => {
          document.querySelectorAll('#optionsBlock button').forEach(b => b.disabled = true);
          if (idx === q.correctAnswerIndex) {
            btn.style.background = "rgba(107,255,107,0.2)";
            btn.style.borderColor = "#6bff6b";
            score++;
          } else {
            btn.style.background = "rgba(255,107,107,0.2)";
            btn.style.borderColor = "#ff6b6b";
            const correctBtn = optionsBlock.children[q.correctAnswerIndex];
            if (correctBtn) {
              correctBtn.style.background = "rgba(107,255,107,0.2)";
              correctBtn.style.borderColor = "#6bff6b";
            }
          }
          document.getElementById('explanationBlock').style.display = "block";
          const nextBtn = document.getElementById('nextQBtn');
          nextBtn.style.display = "block";
          nextBtn.onclick = () => {
            currentQuestionIndex++;
            renderQuestion();
          };
        };
        optionsBlock.appendChild(btn);
      });
    }
    
    renderQuestion();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
