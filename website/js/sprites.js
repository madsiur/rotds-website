const SPRITES_PER_PAGE = 30;
const CATEGORY_MAP = {
    full_sheets: 'full',
    npcs: 'npc',
    static_sprites: 'static',
    objects: 'object'
};
const NUM_SPRITES_MAP = {
    full_sheets: 20,
    npcs: 35,
    static_sprites: 60,
    objects: 60
};
const CATEGORY_NAMES = {
    full_sheets: 'Full Sheets',
    npcs: 'NPCs',
    static_sprites: 'Static Sprites',
    objects: 'Objects'
};

let sprites = [];

async function loadSpriteData() {
    const res = await fetch('json/sprites.json');
    sprites = await res.json();
    sprites.sort((a, b) => a.name.localeCompare(b.name));
}

function getSpritesForPage(category, page) {
    const filtered = sprites.filter(s => s.category === CATEGORY_MAP[category]);
    const start = (page - 1) * NUM_SPRITES_MAP[category];
    console.log(`Getting sprites for category: ${category}, page: ${page}, start index: ${start}, total filtered: ${filtered.length}`);
    return {
        sprites: filtered.slice(start, start + NUM_SPRITES_MAP[category]),
        total: filtered.length
    };
}

function getState() {
    return {
        category: sessionStorage.getItem('sprite_category') || 'full_sheets',
        pages: JSON.parse(sessionStorage.getItem('sprite_pages') || '{}')
    };
}

function saveState(category, page) {
    sessionStorage.setItem('sprite_category', category);
    const pages = JSON.parse(sessionStorage.getItem('sprite_pages') || '{}');
    pages[category] = page;
    sessionStorage.setItem('sprite_pages', JSON.stringify(pages));
}

function navigate(category, page) {
    saveState(category, page);
    renderPage(category, page);
}

// --- Custom dropdown logic ---
function initCustomSelect() {
    document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
        const selectBox = wrapper.querySelector('.custom-select-box');
        const optionsPanel = wrapper.querySelector('.custom-options');

        selectBox.addEventListener('click', e => {
            e.stopPropagation();
            // Close all OTHER dropdowns
            document.querySelectorAll('.custom-options').forEach(p => {
                if (p !== optionsPanel) p.classList.add('d-none');
            });
            optionsPanel.classList.toggle('d-none');
        });

        optionsPanel.querySelectorAll('.custom-option').forEach(opt => {
            opt.addEventListener('click', e => {
                e.preventDefault();
                const cat = opt.dataset.value;
                const { pages } = getState();
                navigate(cat, pages[cat] || 1);
                optionsPanel.classList.add('d-none');
            });
        });
    });

    // Close ALL dropdowns on outside click
    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-options').forEach(p => p.classList.add('d-none'));
    });
}

function renderPage(category, page) {
    const { sprites, total } = getSpritesForPage(category, page);
    const gallery = document.getElementById('sprite-page-gallery');
    const folder = CATEGORY_MAP[category];


    gallery.innerHTML = sprites.map(s => `
        <div class="d-flex flex-column align-items-center mb-2 mx-2 ${folder}-img-div">
            <div class="mt-auto">
                <img src="sprites/${folder}/${s.filename}"/>
            </div>
            <div>${s.name}</div>
        </div>
    `).join('');

    const h3 = document.querySelector('h3');
    if (sprites.length > 0) {
        const a = sprites[0].name[0].toUpperCase();
        const b = sprites[sprites.length - 1].name[0].toUpperCase();
        if (a === b) {
            h3.textContent = `${CATEGORY_NAMES[category]} Gallery (${a})`;
        } else {
            h3.textContent = `${CATEGORY_NAMES[category]} Gallery (${a} - ${b})`;
        }
    }

    const totalPages = Math.ceil(total / NUM_SPRITES_MAP[category]);
    document.querySelectorAll('[data-nav="prev"]').forEach(b =>
        b.style.display = page <= 1 ? 'none' : '');
    document.querySelectorAll('[data-nav="next"]').forEach(b =>
        b.style.display = page >= totalPages ? 'none' : '');

    document.querySelectorAll('.custom-select-box').forEach(box => {
        box.textContent = CATEGORY_NAMES[category];
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadSpriteData();
    initCustomSelect();

    const { category, pages } = getState();
    const startPage = pages[category] || 1;
    renderPage(category, startPage);

    document.querySelectorAll('[data-nav="prev"]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const { category: cat, pages: p } = getState();
            const page = p[cat] || 1;
            if (page > 1) navigate(cat, page - 1);
        });
    });

    document.querySelectorAll('[data-nav="next"]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const { category: cat, pages: p } = getState();
            const page = p[cat] || 1;
            navigate(cat, page + 1);
        });
    });

    const bottomOptions = document.querySelectorAll('[id="btns-sprites-gallery"]')[1]
    .querySelector('.custom-options');
    if (bottomOptions) {
        bottomOptions.style.top = 'auto';
        bottomOptions.style.bottom = '100%';
}

    const gallery = document.getElementById('sprite-page-gallery');
    const bottomBtns = document.querySelectorAll('[id="btns-sprites-gallery"]')[1];

    new ResizeObserver(() => {
        if (bottomBtns) {
            bottomBtns.classList.toggle('d-none', gallery.offsetHeight < 700);
        }
    }).observe(gallery);
});