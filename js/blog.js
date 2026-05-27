/**
 * blog.js - Blog Page Logic
 * ==========================
 * Renders all blog posts with creative category + platform filters.
 * To add a post: add an object to DATA.blog in data.js.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  renderBlogHero();
  renderBlogFilters();
  renderBlogGrid();
  initScrollAnimations_blog();
});

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function renderBlogHero() {
  const el = document.getElementById('blog-hero-content');
  if (!el) return;
  el.innerHTML = `
    <div class="blog-hero-title fade-in">Writing &amp; Thinking</div>
    <p class="blog-hero-sub fade-in">Writing on AI, product strategy, engineering, and society - 7 articles · 3,800+ LinkedIn followers.</p>`;
}

/* ─────────────────────────────────────────
   FILTERS
───────────────────────────────────────── */
let activeCategory = 'all';
let activePlatform = 'all';

function renderBlogFilters() {
  const catEl = document.getElementById('blog-cat-filters');
  const platEl = document.getElementById('blog-platform-filters');
  if (!catEl || !platEl) return;

  // Count posts per category
  const counts = {};
  DATA.blog.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
  counts['all'] = DATA.blog.length;

  const catColors = { blue: '#1e40af', navy: '#0a0f1e', gold: '#b58a1f', green: '#15803d', gray: '#4a5568' };

  // Category cards
  catEl.innerHTML = DATA.blogCategories.map(c => `
    <div class="blog-cat-card ${c.id === 'all' ? 'active' : ''}"
         onclick="filterBlog('${c.id}', this)"
         data-filter-cat="${c.id}">
      <div class="bcc-icon">${c.icon}</div>
      <div class="bcc-label">${c.label}</div>
      <div class="bcc-count">${counts[c.id] || 0} post${(counts[c.id] || 0) !== 1 ? 's' : ''}</div>
    </div>`).join('');

  // Platform pills
  const platforms = ['all', ...new Set(DATA.blog.map(p => p.platform))];
  const platLabels = { all: '🌐 All Platforms', linkedin: 'in LinkedIn', medium: 'M Medium', personal: '✎ Personal' };

  platEl.innerHTML = platforms.map(p => `
    <div class="platform-pill ${p === 'all' ? 'active' : ''}"
         onclick="filterPlatform('${p}', this)"
         data-filter-plat="${p}">
      ${platLabels[p] || p}
    </div>`).join('');
}

function filterBlog(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('[data-filter-cat]').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
  applyBlogFilters();
}

function filterPlatform(plat, btn) {
  activePlatform = plat;
  document.querySelectorAll('[data-filter-plat]').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
  applyBlogFilters();
}

function applyBlogFilters() {
  const cards = document.querySelectorAll('.blog-card');
  let visible = 0;
  cards.forEach(card => {
    const catMatch  = activeCategory === 'all' || card.dataset.cat === activeCategory;
    const platMatch = activePlatform === 'all' || card.dataset.plat === activePlatform;
    const show = catMatch && platMatch;
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  const empty = document.getElementById('blog-empty');
  if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
}

/* ─────────────────────────────────────────
   BLOG GRID
───────────────────────────────────────── */
function renderBlogGrid() {
  const el = document.getElementById('blog-grid');
  if (!el) return;

  const platformLabel = { linkedin: 'LinkedIn', medium: 'Medium', personal: 'Blog' };
  const catIcon = { product: '🧠', engineering: '⚙️', career: '💼', ai: '🤖', ideas: '💡' };

  if (DATA.blog.length === 0) {
    el.innerHTML = `<div class="blog-empty">
      <p>📝 No posts yet - add your first post in <code>js/data.js</code></p>
    </div>`;
    return;
  }

  el.innerHTML = DATA.blog.map(p => `
    <a class="blog-card fade-in" href="${p.link}" target="_blank"
       data-cat="${p.category}" data-plat="${p.platform}">
      <div class="bc-thumb">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title}">`
          : `<div class="bc-thumb-ph">${catIcon[p.category] || '📝'}</div>`}
        <div class="bc-platform">${platformLabel[p.platform] || p.platform}</div>
      </div>
      <div class="bc-body">
        <div class="bc-cat">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
        <div class="bc-title">${p.title}</div>
        <div class="bc-excerpt">${p.excerpt}</div>
        <div class="bc-tags">${(p.tags || []).map(t => `<span class="chip">${t}</span>`).join('')}</div>
        <div class="bc-footer" style="margin-top:12px;">
          <span class="bc-date">${p.date}</span>
          <span class="bc-read">Read more →</span>
        </div>
      </div>
    </a>`).join('') + `<div id="blog-empty" class="blog-empty" style="display:none;">
      No posts match the selected filters.
    </div>`;
}

/* ─────────────────────────────────────────
   SCROLL ANIMATIONS
───────────────────────────────────────── */
function initScrollAnimations_blog() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });
  setTimeout(() => { document.querySelectorAll('.fade-in').forEach(el => observer.observe(el)); }, 100);
}
