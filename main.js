// main.js - логика фильтрации и отображения
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderMenu(items) {
    const container = document.getElementById('menuGrid');
    if (!items || items.length === 0) {
        container.innerHTML = '<p style="text-align:center;">😕 Ничего не найдено. Выберите другую категорию.</p>';
        return;
    }
    let html = '';
    items.forEach(item => {
        html += `
            <div class="card">
                <div class="card-header">
                    <h3>${escapeHtml(item.name)}</h3>
                    <span class="price">${item.price} ₽</span>
                </div>
                <div class="volume">${escapeHtml(item.volume)}</div>
                <div class="desc">${escapeHtml(item.description)}</div>
                ${item.tags ? `<div class="tags">${item.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
                ${item.allergens && item.allergens.length ? `<div class="allergens">⚠️ Аллергены: ${item.allergens.join(', ')}</div>` : ''}
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderCategories() {
    const nav = document.getElementById('categoriesNav');
    let btns = '';
    for (let [key, label] of Object.entries(categories)) {
        btns += `<button class="cat-btn" data-cat="${key}">${escapeHtml(label)}</button>`;
    }
    nav.innerHTML = btns;
    
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            const filtered = BAR_MENU.filter(item => item.category === cat);
            renderMenu(filtered);
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof BAR_MENU === 'undefined') {
        document.getElementById('menuGrid').innerHTML = '<p style="color:red;">Ошибка: не загружен data.js</p>';
        return;
    }
    renderCategories();
    const defaultItems = BAR_MENU.filter(item => item.category === 'beer');
    renderMenu(defaultItems);
    const firstBtn = document.querySelector('.cat-btn');
    if (firstBtn) firstBtn.classList.add('active');
});
