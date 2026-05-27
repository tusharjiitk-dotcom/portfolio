/**
 * certifications.js - Certifications Page
 * =========================================
 * Renders certifications grouped by category with filter tabs.
 * To add a cert: add to DATA.certifications in data.js.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  renderCertHero();
  renderCertFilters();
  renderCertGrid('all');
  initScrollAnimations_certs();
});

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function renderCertHero() {
  const el = document.getElementById('cert-hero-content');
  if (!el) return;
  el.innerHTML = `
    <div class="cert-hero-title fade-in">Certifications</div>
    <p class="cert-hero-sub fade-in">${DATA.certifications.length}+ credentials across Management, Technical, Digital, and Professional domains.</p>`;
}

/* ─────────────────────────────────────────
   FILTERS
───────────────────────────────────────── */
const CERT_CATS = [
  { id: 'all',          label: 'All',                    icon: '📜' },
  { id: 'management',   label: 'Management & Strategy',  icon: '📋' },
  { id: 'technical',    label: 'Technical & Engineering', icon: '⚙️' },
  { id: 'digital',      label: 'Digital & Data',         icon: '💻' },
  { id: 'professional', label: 'Professional',           icon: '🎯' },
];

const CERT_ICONS = {
  management:   '📋', technical: '⚙️', digital: '💻', professional: '🎯',
};

function renderCertFilters() {
  const el = document.getElementById('cert-cat-tabs');
  if (!el) return;
  const counts = {};
  DATA.certifications.forEach(c => { counts[c.cat] = (counts[c.cat] || 0) + 1; });
  el.innerHTML = CERT_CATS.map(c => {
    const count = c.id === 'all' ? DATA.certifications.length : (counts[c.id] || 0);
    return `<div class="cert-cat-tab ${c.id === 'all' ? 'active' : ''}"
               onclick="filterCerts('${c.id}', this)">
      ${c.icon} ${c.label} <span style="opacity:0.6;font-size:11px;">(${count})</span>
    </div>`;
  }).join('');
}

function filterCerts(cat, btn) {
  document.querySelectorAll('.cert-cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderCertGrid(cat);
}

/* ─────────────────────────────────────────
   CERT GRID
───────────────────────────────────────── */
function renderCertGrid(filterCat) {
  const el = document.getElementById('cert-grid-container');
  if (!el) return;

  const catsToShow = filterCat === 'all'
    ? CERT_CATS.filter(c => c.id !== 'all')
    : CERT_CATS.filter(c => c.id === filterCat);

  el.innerHTML = catsToShow.map(cat => {
    const certs = DATA.certifications.filter(c => c.cat === cat.id);
    if (certs.length === 0) return '';
    return `
      <div class="cert-category-block fade-in">
        <div class="cert-section-title">
          ${cat.icon} ${cat.label}
          <span class="cert-section-count">${certs.length}</span>
        </div>
        <div class="cert-grid">
          ${certs.map(c => `
            <div class="cert-card fade-in">
              <div class="cert-img">
                ${c.image
                  ? `<img src="${c.image}" alt="${c.name}">`
                  : CERT_ICONS[c.cat] || '📜'}
              </div>
              <div class="cert-body">
                <div class="cert-name">${c.name}</div>
                <div class="cert-issuer">${c.issuer}</div>
                <div class="cert-year">${c.year}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }).join('');

  // Re-trigger scroll animations for new content
  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('visible');
    });
  }, 50);
}

/* ─────────────────────────────────────────
   SCROLL ANIMATIONS
───────────────────────────────────────── */
function initScrollAnimations_certs() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.06 });
  setTimeout(() => { document.querySelectorAll('.fade-in').forEach(el => observer.observe(el)); }, 150);
}
