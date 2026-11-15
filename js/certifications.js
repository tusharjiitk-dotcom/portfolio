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
    <a class="cert-back-link" href="index.html#recognition" onclick="handleCertBack(event)">← Back to portfolio</a>
    <div class="cert-hero-row">
      <div>
        <div class="cert-hero-eyebrow">Credentials</div>
        <div class="cert-hero-title fade-in">Certifications</div>
      </div>
      <div class="cert-hero-meta">${DATA.certifications.length} certifications</div>
    </div>`;
}

function handleCertBack(e) {
  if (history.length <= 1) {
    e.preventDefault();
    window.close();
    window.location.href = 'index.html#recognition';
  }
}

/* ─────────────────────────────────────────
   FILTERS
───────────────────────────────────────── */
const CERT_CATS = [
  { id: 'all',           label: 'All'             },
  { id: 'product-agile', label: 'Product & Agile' },
  { id: 'data-ai',       label: 'Data & AI'       },
  { id: 'quality',       label: 'Quality'         },
  { id: 'security',      label: 'Security'        },
  { id: 'engineering',   label: 'Engineering'     },
  { id: 'management',    label: 'Management'      },
];

function renderCertFilters() {
  const el = document.getElementById('cert-cat-tabs');
  if (!el) return;
  const counts = {};
  DATA.certifications.forEach(c => { counts[c.cat] = (counts[c.cat] || 0) + 1; });
  el.innerHTML = CERT_CATS.map(c => {
    const count = c.id === 'all' ? DATA.certifications.length : (counts[c.id] || 0);
    return `<div class="cert-cat-tab ${c.id === 'all' ? 'active' : ''}"
               onclick="filterCerts('${c.id}', this)">
      ${c.label}<span class="cert-tab-count">${count}</span>
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
        <div class="cert-cat-header">
          <span class="cert-cat-label">${cat.label.toUpperCase()}</span>
          <span class="cert-cat-count">${certs.length}</span>
        </div>
        <div class="cert-grid">
          ${certs.map(c => {
            const tag = c.url ? `a` : `div`;
            const attrs = c.url ? ` href="${c.url}" target="_blank" rel="noopener"` : ``;
            return `<${tag} class="cert-card fade-in"${attrs}>
              <div class="cert-name">${c.name}${c.url ? ' <span class="cert-link-mark">↗</span>' : ''}</div>
              <div class="cert-issuer">${c.issuer}</div>
            </${tag}>`;
          }).join('')}
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
