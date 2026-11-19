/**
 * blog.js - Blog Page Logic
 * ==========================
 * Renders blog posts in a year-grouped list with chip category filters.
 * To add a post: add an object to DATA.blog in data.js.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  renderBlogHero();
  renderBlogList();
  renderBlogChips();
  renderBlogFormatToggle();
  initScrollAnimations_blog();
});

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function renderBlogHero() {
  const el = document.getElementById('blog-hero-content');
  if (!el) return;
  el.innerHTML = `
    <a class="blog-back-link" href="index.html#blog" onclick="handleBlogBack(event)">← Back to portfolio</a>
    <div class="blog-hero-row">
      <div>
        <div class="blog-hero-eyebrow">Writing & Thinking</div>
        <div class="blog-hero-title">Blog</div>
        <div class="blog-hero-sub">Writing on AI, product strategy, engineering and society.</div>
      </div>
      <div class="blog-hero-meta">${DATA.blog.filter(p=>p.type==='Article').length} articles · ${DATA.blog.filter(p=>p.type==='Post').length} short reads · 4,100+ LinkedIn followers</div>
    </div>`;
}

function handleBlogBack(e) {
  if (history.length <= 1) {
    e.preventDefault();
    window.close();
    setTimeout(() => { window.location.href = 'index.html#blog'; }, 50);
  }
}

/* ─────────────────────────────────────────
   CHIP FILTERS
───────────────────────────────────────── */
let activeChipCat = 'all';
let activeFormat   = 'all';

function renderBlogChips() {
  const el = document.getElementById('blog-chip-filters');
  if (!el) return;
  const pool = activeFormat === 'all' ? DATA.blog : DATA.blog.filter(p => p.type === activeFormat);
  const counts = {};
  pool.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });

  // If the currently active chip has no posts in the new pool, reset it to 'all'
  if (activeChipCat !== 'all' && !counts[activeChipCat]) activeChipCat = 'all';

  el.innerHTML = DATA.blogCategories.map(c => {
    const count = c.id === 'all' ? pool.length : (counts[c.id] || 0);
    if (c.id !== 'all' && !counts[c.id]) return '';
    return `<button class="blog-chip${c.id === activeChipCat ? ' active' : ''}"
      onclick="filterBlogChip('${c.id}', this)">
      ${c.label}<span class="blog-chip-count">${count}</span>
    </button>`;
  }).join('');
}

function filterBlogChip(cat, btn) {
  activeChipCat = cat;
  document.querySelectorAll('.blog-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyBlogFilters();
}

/* ─────────────────────────────────────────
   FORMAT TOGGLE
───────────────────────────────────────── */
function renderBlogFormatToggle() {
  const el = document.getElementById('blog-format-toggle');
  if (!el) return;
  const opts = [
    { id: 'all',     label: 'All' },
    { id: 'Article', label: 'Articles' },
    { id: 'Post',    label: 'Short reads' },
  ];
  el.innerHTML = opts.map(o =>
    `<button class="blog-fmt-btn${o.id === 'all' ? ' active' : ''}"
      aria-pressed="${o.id === 'all'}"
      onclick="filterBlogFormat('${o.id}', this)">${o.label}</button>`
  ).join('');
}

function filterBlogFormat(format, btn) {
  activeFormat = format;
  document.querySelectorAll('.blog-fmt-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  renderBlogChips();   // recompute chip counts for new format pool
  applyBlogFilters();
}

function applyBlogFilters() {
  document.querySelectorAll('.blog-year-group').forEach(group => {
    const rows = group.querySelectorAll('.blog-post-row');
    let visibleCount = 0;
    rows.forEach(row => {
      const catMatch = activeChipCat === 'all' || row.dataset.cat === activeChipCat;
      const fmtMatch = activeFormat  === 'all' || row.dataset.type === activeFormat;
      const match = catMatch && fmtMatch;
      row.classList.toggle('hidden', !match);
      if (match) visibleCount++;
    });
    const countEl = group.querySelector('.byg-count');
    if (countEl) countEl.textContent = `· ${visibleCount}`;
    group.style.display = visibleCount === 0 ? 'none' : '';
  });
}

/* ─────────────────────────────────────────
   BLOG LIST (grouped by year)
───────────────────────────────────────── */
const CAT_LABEL = {
  'product-strategy':     'Product & Strategy',
  'ai-tech':              'AI & Tech',
  'engineering-industry': 'Engineering & Industry',
  'society-workplace':    'Society & Workplace',
};

const SORT_MONTHS = {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};

function parseSortDate(s) {
  const parts = s.replace(/\(.*?\)/g, '').trim().split(/\s+/);
  return new Date(+parts[2], SORT_MONTHS[parts[1]] ?? 0, +parts[0]).getTime();
}

function renderBlogList() {
  const el = document.getElementById('blog-year-list');
  if (!el) return;

  if (!DATA.blog.length) {
    el.innerHTML = `<p style="color:var(--text-light);text-align:center;padding:64px 0;">No posts yet.</p>`;
    return;
  }

  const sorted = [...DATA.blog].sort((a, b) => parseSortDate(b.sortDate) - parseSortDate(a.sortDate));

  const groups = {};
  sorted.forEach(p => {
    const y = p.date.split(' ')[1];
    if (!groups[y]) groups[y] = [];
    groups[y].push(p);
  });

  const years = Object.keys(groups).sort((a, b) => b - a);

  el.innerHTML = years.map(year => {
    const posts = groups[year];
    const postsHTML = posts.map(p => {
      const tags = (p.tags || []).slice(0, 2).map(t => `<span class="blog-tag">${t}</span>`).join('');
      const label = CAT_LABEL[p.category] || p.category;
      const timeEl = p.type === 'Article'
        ? `<div class="bpr-readtime">${p.readTime} read</div>`
        : `<span class="bpr-short-pill">Short read</span>`;
      return `
        <div class="blog-post-row fade-in" data-cat="${p.category}" data-type="${p.type}">
          <div class="bpr-date-col">
            <div class="bpr-date">${p.date}</div>
            ${timeEl}
          </div>
          <div class="bpr-middle">
            <div class="bpr-cat">${label.toUpperCase()}</div>
            <div class="bpr-title">${p.title}</div>
            <div class="bpr-excerpt">${p.excerpt}</div>
            ${tags ? `<div class="bpr-tags">${tags}</div>` : ''}
          </div>
          <div class="bpr-right">
            <a class="bpr-read" href="${p.url}" target="_blank" rel="noopener">Read on LinkedIn ↗</a>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="blog-year-group" id="byg-${year}">
        <button class="byg-header" onclick="toggleYearGroup('${year}', this)" aria-expanded="true">
          <span class="byg-year">${year}</span>
          <span class="byg-count">· ${posts.length}</span>
          <span class="byg-line"></span>
          <span class="byg-chevron">▾</span>
        </button>
        <div class="byg-body" id="byg-body-${year}">
          ${postsHTML}
        </div>
      </div>`;
  }).join('');
}

function toggleYearGroup(year, btn) {
  const body = document.getElementById(`byg-body-${year}`);
  if (!body) return;
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  btn.classList.toggle('collapsed', expanded);
  body.classList.toggle('collapsed', expanded);
}

/* ─────────────────────────────────────────
   SCROLL ANIMATIONS
───────────────────────────────────────── */
function initScrollAnimations_blog() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.05 });
  setTimeout(() => { document.querySelectorAll('.fade-in').forEach(el => observer.observe(el)); }, 100);
}
