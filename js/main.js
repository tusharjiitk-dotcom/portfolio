/**
 * main.js - TJ Portfolio Core Logic
 * ===================================
 * Renders all content from data.js, handles interactions.
 * Shared across all pages.
 */

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();

  const page = document.body.dataset.page;
  if (page === 'index') initIndex();
});

/* ─────────────────────────────────────────
   NAV (shared across all pages)
───────────────────────────────────────── */
function renderNav() {
  const el = document.getElementById('nav-placeholder');
  if (!el) return;

  const currentPage = document.body.dataset.page;
  const links = DATA.nav.map(n => {
    const isActive = n.page === currentPage;
    const href = currentPage === n.page
      ? n.href.includes('#') ? n.href.split('index.html')[1] : n.href
      : n.href;
    return `<a href="${href}" class="${isActive ? 'active' : ''}">${n.label}</a>`;
  }).join('');

  el.innerHTML = `
    <nav class="site-nav" id="site-nav">
      <div class="nav-brand">${DATA.personal.initials}<span>.</span></div>
      <div class="nav-links">${links}</div>
      <div class="nav-cta">
        <a href="${DATA.personal.resume}" class="btn btn-outline" target="_blank">Resume ↓</a>
        <a href="${currentPage === 'index' ? '#contact' : 'index.html#contact'}" class="btn btn-primary">Let's Connect</a>
      </div>
      <div class="nav-hamburger" id="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
      ${DATA.nav.map(n => `<a href="${n.href}" onclick="closeMenu()">${n.label}</a>`).join('')}
      <div class="mobile-menu-cta">
        <a href="${DATA.personal.resume}" class="btn btn-outline" target="_blank">Resume ↓</a>
        <a href="index.html#contact" class="btn btn-primary">Let's Connect</a>
      </div>
    </div>`;

  // Sticky shadow on scroll
  window.addEventListener('scroll', () => {
    document.getElementById('site-nav')?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Active nav on scroll (index only)
  if (document.body.dataset.page === 'index') initNavHighlight();
}

function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));
}

/* ─────────────────────────────────────────
   FOOTER (shared)
───────────────────────────────────────── */
function renderFooter() {
  const el = document.getElementById('footer-placeholder');
  if (!el) return;
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <span class="footer-copy">${DATA.footer.copy}</span>
        <div class="footer-links">
          ${DATA.footer.links.map(l => `<a href="${l.href}" target="_blank">${l.label}</a>`).join('')}
        </div>
      </div>
    </footer>`;
}

/* ─────────────────────────────────────────
   INDEX PAGE INIT
───────────────────────────────────────── */
function initIndex() {
  renderHero();
  typeHeroName('Tushar Joshi');
  renderAbout();
  renderExperience();
  renderEducation();
  renderProjects();
  renderSkills();
  renderResearch();
  renderMore();
  renderAwards();
  renderBlogPreview();
  initDetailPanel();
  initScrollAnimations();
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function renderHero() {
  const el = document.getElementById('hero-content');
  if (!el) return;
  const p = DATA.personal;
  const a = DATA.about;
  el.innerHTML = `
    <div class="hero-about-label fade-in">About Me</div>
    <div class="hero-eyebrow fade-in">${p.tagline}</div>
    <div class="hero-left fade-in">
      <h1 class="hero-name">Hi, I'm <em class="hero-typed"></em><span class="hero-cursor"></span></h1>
      <p class="hero-sub">${p.bio}</p>
      <p class="hero-sub hero-sub-2">${a.body}</p>
      <div class="hero-actions">
        <a href="blog.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
  Blog &amp; Writing ✦ </a>
        <a href="#projects" class="btn btn-outline">Explore Projects</a>
      </div>
    </div>
    <div class="hero-photo-wrap fade-in fade-in-delay-2">
      <div class="hero-photo">
        ${p.photo
          ? `<img src="${p.photo}" alt="${p.name}"
               onerror="this.outerHTML='<div class=\\'hero-photo-placeholder\\'><div class=\\'ph-icon\\'>👤</div><span>Drop your photo at assets/images/headshot.jpg</span></div>'">`
          : `<div class="hero-photo-placeholder"><div class="ph-icon">👤</div><span>Drop your photo at assets/images/headshot.jpg</span></div>`
        }
      </div>
      ${p.available ? `<div class="hero-available"><div class="hero-available-dot"></div>Open to opportunities</div>` : ''}
    </div>`;
}

/* ─────────────────────────────────────────
   HERO TYPING EFFECT
───────────────────────────────────────── */
function typeHeroName(text) {
  const em     = document.querySelector('.hero-typed');
  const cursor = document.querySelector('.hero-cursor');
  if (!em) return;
  em.textContent = '';
  let i = 0;
  // slight delay so page paints first
  setTimeout(() => {
    const tick = setInterval(() => {
      em.textContent += text[i++];
      if (i >= text.length) {
        clearInterval(tick);
        // stop blinking after 2s - leaves cursor as solid line
        setTimeout(() => { if (cursor) cursor.classList.add('cursor-done'); }, 2000);
      }
    }, 72);
  }, 400);
}

/* ─────────────────────────────────────────
   HIGHLIGHTS GRID (replaces stats + bento)
───────────────────────────────────────── */
function renderAbout() {
  const el = document.getElementById('about-content');
  if (!el) return;

  // Unique scatter position for each of the 8 cards
  const scatter = [
    'translate(-160px,-100px) scale(0.52) rotate(-9deg)',
    'translate(-50px,-160px)  scale(0.48) rotate(7deg)',
    'translate(60px,-130px)   scale(0.52) rotate(-6deg)',
    'translate(160px,-100px)  scale(0.48) rotate(9deg)',
    'translate(-150px,110px)  scale(0.52) rotate(8deg)',
    'translate(-55px,160px)   scale(0.48) rotate(-7deg)',
    'translate(65px,140px)    scale(0.52) rotate(6deg)',
    'translate(155px,110px)   scale(0.48) rotate(-9deg)',
  ];
  const stagger = [0, 60, 120, 60, 60, 120, 60, 0]; // ms delay per card

  const cards = DATA.about.highlights.map((h, i) => `
    <div class="hl-card" style="background-color:${h.color}">
      <div class="hl-img" style="background-image:url('${h.image}')"></div>
      <div class="hl-overlay"></div>
      <div class="hl-body">
        ${h.num ? `<div class="hl-num">${h.num}</div>` : ''}
        <div class="hl-title">${h.title}</div>
        <div class="hl-desc">${h.desc}</div>
      </div>
    </div>`).join('');

  el.innerHTML = `<div class="hl-grid">${cards}</div>`;

  // Step 1: kill transitions, apply scatter positions immediately
  const cardEls = Array.from(el.querySelectorAll('.hl-card'));
  cardEls.forEach((card, i) => {
    card.style.transition = 'none';
    card.style.transform  = scatter[i];
    card.style.opacity    = '0';
    card.style.filter     = 'blur(4px)';
  });

  // Step 2: force browser to paint the scattered state
  el.getBoundingClientRect();

  // Step 3: re-enable CSS transitions
  cardEls.forEach(card => { card.style.transition = ''; });

  // Step 4: when section enters viewport, animate each card home
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      cardEls.forEach((card, i) => {
        setTimeout(() => {
          card.style.transform = '';
          card.style.opacity   = '';
          card.style.filter    = '';
        }, stagger[i]);
      });
      observer.unobserve(e.target);
    });
  }, { threshold: 0.08 });
  observer.observe(el);
}

/* ─────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────── */
function formatTlDate(period) {
  const parts = period.split(' - ');
  if (parts.length === 2) {
    return `<span class="tl-date-start">${parts[0]}</span><span class="tl-date-end">${parts[1]}</span>`;
  }
  const words = period.split(' ');
  return words.length >= 2
    ? `<span class="tl-date-start">${words[0]}</span><span class="tl-date-end">${words.slice(1).join(' ')}</span>`
    : `<span class="tl-date-start">${period}</span>`;
}

function renderExperience() {
  const el = document.getElementById('experience-content');
  if (!el) return;

  const timelineHTML = DATA.experience.map((e, i) => `
    <div class="tl-item">
      <div class="tl-date-label">${formatTlDate(e.period)}</div>
      <div class="tl-dot ${i > 0 ? 'dim' : ''}"></div>
      <div class="exp-card fade-in ${e.duration === 'Current' ? 'exp-card-current' : ''}"
           id="exp-card-${e.id}"
           onclick="openExpPanel('${e.id}')">
        <div class="exp-card-top">
          <div class="exp-logo">${e.icon}</div>
          <div class="exp-info">
            <div class="exp-role">${e.role}${e.duration === 'Current' ? ' <span class="exp-current-badge">● Current</span>' : ''}</div>
            <div class="exp-company">${e.company}</div>
            <div class="exp-summary-line">${e.summary}</div>
            <div class="exp-mini-period">${e.period}</div>
          </div>
          <div class="exp-arrow">↗</div>
        </div>
        <div class="exp-tags">${e.tags.map(t => `<span class="chip chip-blue">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');

  el.innerHTML = `
    <div class="exp-layout" id="exp-layout">
      <div class="exp-timeline-col">
        <button class="exp-tl-close" onclick="closeExpPanel()">← Close panel</button>
        <div class="timeline">${timelineHTML}</div>
      </div>
      <div class="exp-detail-col" id="exp-detail-col">
        <div class="exp-panel" id="exp-panel"></div>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────
   EXPERIENCE INLINE PANEL
───────────────────────────────────────── */
let _activeExpId = null;

function openExpPanel(id) {
  const exp = DATA.experience.find(e => e.id === id);
  if (!exp) return;

  _activeExpId = id;

  // Build panel content
  const focusHTML = (exp.focusAreas || []).map(fa =>
    `<div class="ep-focus-item"><div class="ep-focus-icon">${fa.icon}</div><div class="ep-focus-label">${fa.label}</div></div>`
  ).join('');


  const impactHTML = (exp.impactMetrics || []).map(m =>
    `<div class="ep-impact-stat"><div class="ep-impact-val">${m.val}</div><div class="ep-impact-label">${m.label}</div></div>`
  ).join('');

  const achHTML = exp.achievements.map(a =>
    `<div class="ep-ach-item">
      <span class="ep-ach-icon">${a.icon}</span>
      <span class="ep-ach-text">${a.text}</span>
    </div>`
  ).join('');

  const tagsHTML = exp.tags.map(t => `<span class="chip chip-blue">${t}</span>`).join('');

  const typeLabel = exp.type === 'internship' ? 'Internship' : exp.type === 'other' ? 'Experience' : 'Work Experience';

  document.getElementById('exp-panel').innerHTML = `
    <div class="ep-header">
      <div class="ep-header-logo">${exp.icon}</div>
      <div class="ep-header-text">
        <div class="ep-header-meta">${typeLabel} · ${exp.period.toUpperCase()}</div>
        <h2 class="ep-header-role">${exp.role}</h2>
        <div class="ep-header-company">${exp.company}</div>
      </div>
    </div>
    <div class="ep-body">
      <div class="ep-section">
        <div class="ep-section-header">
          <div class="ep-section-icon">👤</div>
          <div class="ep-section-title">About the Role</div>
        </div>
        <p class="ep-about">${exp.summary}</p>
      </div>

      ${focusHTML ? `
      <div class="ep-section">
        <div class="ep-section-header">
          <div class="ep-section-icon">⚙️</div>
          <div class="ep-section-title">Key Focus Areas</div>
        </div>
        <div class="ep-focus-grid">${focusHTML}</div>
      </div>` : ''}

      ${impactHTML ? `
      <div class="ep-section">
        <div class="ep-section-header">
          <div class="ep-section-icon">📈</div>
          <div class="ep-section-title">Impact Snapshot</div>
        </div>
        <div class="ep-impact-grid">${impactHTML}</div>
      </div>` : ''}

      <div class="ep-section">
        <div class="ep-section-header">
          <div class="ep-section-icon">🏆</div>
          <div class="ep-section-title">Key Achievements</div>
        </div>
        <div class="ep-achievements">${achHTML}</div>
      </div>

      <div class="ep-section">
        <div class="ep-section-header">
          <div class="ep-section-icon">🏷️</div>
          <div class="ep-section-title">Tags &amp; Tools</div>
        </div>
        <div class="ep-tags">${tagsHTML}</div>
      </div>
    </div>
    <div class="ep-footer">
      <button class="ep-close-btn" onclick="closeExpPanel()">← Return to Journey</button>
    </div>`;

  // Open layout
  document.getElementById('exp-layout').classList.add('panel-open');

  // Highlight active card
  document.querySelectorAll('.exp-card').forEach(c => c.classList.remove('active'));
  document.getElementById(`exp-card-${id}`)?.classList.add('active');

  // Scroll: desktop → section top (panel is sticky); mobile → panel itself
  setTimeout(() => {
    if (window.innerWidth >= 900) {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      document.getElementById('exp-detail-col')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 80);
}

function closeExpPanel() {
  _activeExpId = null;
  document.getElementById('exp-layout')?.classList.remove('panel-open');
  document.querySelectorAll('.exp-card').forEach(c => c.classList.remove('active'));
}

/* ─────────────────────────────────────────
   EDUCATION
───────────────────────────────────────── */
function renderEducation() {
  const el = document.getElementById('education-content');
  if (!el) return;
  el.innerHTML = `<div class="edu-grid">${DATA.education.map(e => `
    <div class="edu-card fade-in" onclick="openPanel('edu-${e.id}')">
      <div class="edu-badge edu-badge-${e.theme}">${e.badge}</div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-school edu-school-${e.theme}">${e.school}</div>
      <div class="edu-meta">${e.score}</div>
      ${e.medal ? `<div class="edu-medal edu-medal-${e.theme}">${e.medal}</div>` : ''}
      <div class="edu-click-hint">Click for details →</div>
    </div>`).join('')}</div>`;
}

/* ─────────────────────────────────────────
   PROJECTS
───────────────────────────────────────── */
let currentFilter = 'all';

function renderProjects() {
  const el = document.getElementById('projects-content');
  if (!el) return;

  const featured = DATA.projects.find(p => p.featured && p.category === 'competition');
  const rest = DATA.projects.filter(p => !p.featured);

  const featuredHTML = featured ? `
    <div class="proj-featured fade-in" data-cat="${featured.category}" onclick="openPanel('proj-${featured.id}')">
      <div>
        <div class="feat-badge">${featured.result} · Featured</div>
        <div class="feat-title">${featured.title}</div>
        <div class="feat-desc">${featured.summary}</div>
        <div class="feat-chips">${featured.tags.map(t => `<span class="feat-chip">${t}</span>`).join('')}</div>
      </div>
      <div class="feat-thumb">
        ${featured.image ? `<img src="${featured.image}" alt="${featured.title}">` : 'Project cover / deck'}
      </div>
    </div>` : '';

  const cardsHTML = rest.map(p => `
    <div class="proj-card fade-in" data-cat="${p.category}" onclick="openPanel('proj-${p.id}')">
      <div class="proj-thumb">
        ${p.image ? `<img src="${p.image}" alt="${p.title}">` : p.title.charAt(0)}
        <div class="proj-thumb-cat">${p.category.toUpperCase()}</div>
        ${p.result ? `<div class="proj-result">${p.result}</div>` : ''}
      </div>
      <div class="proj-body">
        <div class="proj-cat">${p.category.replace('self','Self Work').replace('mba','MBA').replace('engineering','Engineering').replace('competition','Competition')}</div>
        <div class="proj-name">${p.title}</div>
        <div class="proj-desc">${p.summary}</div>
        <div class="proj-tags">${p.tags.slice(0,3).map(t => `<span class="chip">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');

  el.innerHTML = `<div class="proj-grid" id="proj-grid">${featuredHTML}${cardsHTML}</div>`;
}

function filterProjects(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-bar .ftab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('#proj-grid [data-cat]').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.classList.toggle('hidden', !show);
    if (show) {
      // re-trigger fade
      card.classList.remove('visible');
      setTimeout(() => card.classList.add('visible'), 30);
    }
  });
}

/* ─────────────────────────────────────────
   SKILLS
───────────────────────────────────────── */
function renderSkills() {
  const el = document.getElementById('skills-content');
  if (!el) return;

  const groups = DATA.skills.groups.map(g => `
    <div class="skill-group fade-in">
      <div class="sg-title"><span>${g.icon}</span>${g.title}</div>
      <div class="sg-chips">${g.chips.map(c => `<span class="sg-chip">${c}</span>`).join('')}</div>
    </div>`).join('');

  const bars = DATA.skills.bars.map(b => `
    <div class="skill-bar">
      <div class="sb-row">
        <span>${b.name}</span>
        <span class="sb-level">${b.level}</span>
      </div>
      <div class="sb-track"><div class="sb-fill" data-pct="${b.pct}"></div></div>
    </div>`).join('');

  el.innerHTML = `
    <div class="skills-wrap">
      <div class="skill-groups">${groups}</div>
      <div class="skill-bars-panel fade-in">
        <div class="sbp-title">Key Proficiencies</div>
        ${bars}
      </div>
    </div>`;

  // Animate bars on scroll
  const barsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.sb-fill').forEach(fill => {
          fill.style.width = fill.dataset.pct + '%';
        });
        barsObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const barsPanel = el.querySelector('.skill-bars-panel');
  if (barsPanel) barsObserver.observe(barsPanel);
}

/* ─────────────────────────────────────────
   RESEARCH
───────────────────────────────────────── */
function renderResearch() {
  const el = document.getElementById('research-content');
  if (!el) return;
  const r = DATA.research;

  const patentHTML = `
    <div class="patent-card fade-in" onclick="openPanel('patent-main')">
      <div class="patent-icon">📜</div>
      <div>
        <div class="patent-type">Patent · Filed ${r.patent.filed} · Published ${r.patent.pub} · ${r.patent.status}</div>
        <div class="patent-title">${r.patent.title}</div>
        <div class="patent-meta">${r.patent.body} · ${r.patent.office}</div>
        <div class="patent-pills">
          <span class="patent-pill">Filed ${r.patent.filed}</span>
          <span class="patent-pill">Published ${r.patent.pub}</span>
          <span class="patent-pill">${r.patent.status}</span>
        </div>
      </div>
    </div>`;

  const pubsHTML = `<div class="pub-list">
    ${r.publications.map(p => `
      <div class="pub-item fade-in" onclick="openPanel('pub-${p.id}')">
        <div class="pub-icon">📄</div>
        <div>
          <div class="pub-type">${p.type} · ${p.pub}</div>
          <div class="pub-title">${p.title}</div>
          <div class="pub-venue">${p.venue}</div>
          <div class="pub-tags">${p.tags.map(t => `<span class="chip chip-blue">${t}</span>`).join('')}</div>
        </div>
      </div>`).join('')}
  </div>`;

  el.innerHTML = patentHTML + pubsHTML;
}

/* ─────────────────────────────────────────
   MORE SECTION - Tabs
───────────────────────────────────────── */
function renderMore() {
  const el = document.getElementById('more-content');
  if (!el) return;
  const m = DATA.more;

  // Scores
  const scoresHTML = m.scores.map(s => `
    <div class="score-card fade-in">
      <div class="score-icon">${s.icon}</div>
      <div class="score-name">${s.name}</div>
      <div class="score-num">${s.score}<span class="score-total"> /${s.total}</span></div>
      <div class="score-year">${s.year}</div>
    </div>`).join('');

  // PoR
  const porHTML = m.por.map(p => `
    <div class="por-item fade-in">
      <div class="por-icon">${p.icon}</div>
      <div>
        <div class="por-role">${p.role}</div>
        <div class="por-org">${p.org}</div>
      </div>
    </div>`).join('');

  // Co-curricular
  const ccHTML = m.cocurricular.map(c => `
    <div class="cc-item fade-in">
      <div class="cc-name">${c.name}</div>
      <div class="cc-result">${c.result}</div>
      <div class="cc-org">${c.org}</div>
    </div>`).join('');

  // School
  const schoolHTML = m.school.map(s => `
    <div class="school-item fade-in">
      <div class="school-text">
        <div class="school-name">${s.name}</div>
        <div class="school-result">${s.result}</div>
        <div class="school-context">${s.context}</div>
      </div>
    </div>`).join('');

  el.innerHTML = `
    <div class="more-tabs">
      <div class="more-tab active" onclick="switchMoreTab('scores', this)">📊 Test Scores</div>
      <div class="more-tab" onclick="switchMoreTab('por', this)">👑 Positions of Responsibility</div>
      <div class="more-tab" onclick="switchMoreTab('cc', this)">🏆 Co-Curricular</div>
      <div class="more-tab" onclick="switchMoreTab('school', this)">🏫 School Honors</div>
    </div>
    <div class="more-panel active" id="more-scores">
      <div class="scores-grid">${scoresHTML}</div>
    </div>
    <div class="more-panel" id="more-por">
      <div class="por-list">${porHTML}</div>
    </div>
    <div class="more-panel" id="more-cc">
      <div class="cc-grid">${ccHTML}</div>
    </div>
    <div class="more-panel" id="more-school">
      <div class="school-list">${schoolHTML}</div>
    </div>`;
}

function switchMoreTab(id, btn) {
  document.querySelectorAll('.more-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.more-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('more-' + id)?.classList.add('active');
}

/* ─────────────────────────────────────────
   AWARDS
───────────────────────────────────────── */
function renderAwards() {
  const el = document.getElementById('awards-content');
  if (!el) return;
  const certs = DATA.certifications;

  const awardsHTML = DATA.awards.map(a => `
    <div class="award-card fade-in">
      <div class="award-icon">${a.icon}</div>
      <div>
        <div class="award-name">${a.name}</div>
        <div class="award-from">${a.from}</div>
      </div>
    </div>`).join('');

  const certChips = certs.map(c => `
    <span class="chip ${c.cat === 'management' ? 'chip-blue' : ''}">${c.name}</span>`).join('');

  el.innerHTML = `
    <div class="awards-grid">${awardsHTML}</div>
    <div class="cert-toggle-btn" id="cert-toggle" onclick="toggleCerts()">
      <span>📜</span>
      <span>View All ${certs.length} Certifications</span>
      <span class="cert-toggle-arrow">↓</span>
    </div>
    <div class="cert-chips-wrap" id="cert-wrap">
      <div class="cert-chips-inner">${certChips}</div>
    </div>
    <div style="margin-top:14px;">
      <a href="certifications.html" class="btn btn-outline">View Certificate Gallery →</a>
    </div>`;
}

function toggleCerts() {
  document.getElementById('cert-wrap').classList.toggle('open');
  document.getElementById('cert-toggle').classList.toggle('open');
}

/* ─────────────────────────────────────────
   BLOG PREVIEW
───────────────────────────────────────── */
function renderBlogPreview() {
  const el = document.getElementById('blog-preview-content');
  if (!el) return;

  const platformLabel = { linkedin: 'LinkedIn', medium: 'Medium', personal: 'Blog' };
  const catIcon = { product: '🧠', engineering: '⚙️', career: '💼', ai: '🤖', ideas: '💡' };

  const cards = DATA.blog.map(p => `
    <a class="blog-preview-card" href="${p.link}" target="_blank">
      <div class="bp-thumb">
        ${p.image ? `<img src="${p.image}" alt="${p.title}">` : `<div class="bp-thumb-placeholder">${catIcon[p.category] || '📝'}</div>`}
        <div class="bp-platform">${platformLabel[p.platform] || p.platform}</div>
      </div>
      <div class="bp-body">
        <div class="bp-cat">${p.category}</div>
        <div class="bp-title">${p.title}</div>
        <div class="bp-excerpt">${p.excerpt}</div>
        <div class="bp-meta">
          <span class="bp-date">${p.date}</span>
          <span class="bp-read">Read →</span>
        </div>
      </div>
    </a>`).join('');

  el.innerHTML = `
    <div class="blog-preview-header fade-in">
      <div class="sec-head" style="margin:0;">
        <div class="sec-label">Writing & Thinking</div>
        <div class="sec-title">From the Blog</div>
      </div>
      <a href="blog.html" class="blog-view-all">View all posts →</a>
    </div>
    <div class="blog-scroll-wrap fade-in">
      <div class="blog-row">${cards}</div>
    </div>`;
}

/* ─────────────────────────────────────────
   DETAIL PANEL
───────────────────────────────────────── */
function initDetailPanel() {
  // overlay click closes panel
  document.getElementById('panel-overlay')?.addEventListener('click', closePanel);
}

function openPanel(id) {
  const data = getPanelData(id);
  if (!data) return;

  document.getElementById('dp-type').textContent        = data.type;
  document.getElementById('dp-title-sm').textContent    = data.title;
  document.getElementById('dp-badge-wrap').innerHTML    = data.badge || '';
  document.getElementById('dp-main-title').textContent  = data.title;
  document.getElementById('dp-desc').textContent        = data.desc;
  document.getElementById('dp-outcome').innerHTML       = data.outcome
    ? `<strong>Outcome:</strong> ${data.outcome}` : '';
  document.getElementById('dp-outcome').style.display  = data.outcome ? '' : 'none';
  document.getElementById('dp-highlights').innerHTML   = (data.highlights || []).map(h =>
    `<div class="dp-hl"><div class="dp-hl-label">${h.label}</div><div class="dp-hl-val">${h.val}</div></div>`
  ).join('');
  document.getElementById('dp-achievements').innerHTML = (data.achievements || []).map(a =>
    `<div class="dp-ach"><div class="dp-ach-icon">${a.icon || '•'}</div><div class="dp-ach-text">${a.text}</div></div>`
  ).join('');
  document.getElementById('dp-chips').innerHTML = (data.chips || []).map(c =>
    `<span class="chip chip-blue">${c}</span>`).join('');

  document.getElementById('detail-panel').classList.add('open');
  document.getElementById('panel-overlay').classList.add('open');

  // Highlight active card
  document.querySelectorAll('.exp-card, .proj-card, .edu-card, .pub-item, .patent-card').forEach(c => c.classList.remove('active'));
  const card = document.querySelector(`[onclick="openPanel('${id}')"]`);
  if (card) card.classList.add('active');
}

function closePanel() {
  document.getElementById('detail-panel').classList.remove('open');
  document.getElementById('panel-overlay').classList.remove('open');
  document.querySelectorAll('.exp-card, .proj-card, .edu-card').forEach(c => c.classList.remove('active'));
}

function getPanelData(id) {
  // Experience
  if (id.startsWith('exp-')) {
    const key = id.replace('exp-', '');
    const exp = DATA.experience.find(e => e.id === key);
    if (!exp) return null;
    return {
      type: `${exp.type === 'internship' ? 'Internship' : 'Work Experience'} · ${exp.period}`,
      title: exp.role,
      badge: `<span class="badge badge-blue">${exp.company}</span>`,
      desc: exp.summary,
      outcome: null,
      highlights: [
        { label: 'Company',  val: exp.company  },
        { label: 'Duration', val: exp.duration },
        { label: 'Period',   val: exp.period   },
      ],
      achievements: exp.achievements,
      chips: exp.tags,
    };
  }

  // Education
  if (id.startsWith('edu-')) {
    const key = id.replace('edu-', '');
    const edu = DATA.education.find(e => e.id === key);
    if (!edu) return null;
    return {
      type: `Education · ${edu.period}`,
      title: `${edu.degree} - ${edu.school}`,
      badge: edu.medal ? `<span class="badge badge-gold">${edu.medal}</span>` : '',
      desc: `${edu.degree} from ${edu.school} (${edu.period}). ${edu.score}.`,
      outcome: edu.medal || null,
      highlights: [
        { label: 'Degree',  val: edu.degree  },
        { label: 'School',  val: edu.school  },
        { label: 'Score',   val: edu.score   },
        { label: 'Period',  val: edu.period  },
      ],
      achievements: edu.details.map(d => ({ icon: '→', text: d })),
      chips: [],
    };
  }

  // Projects
  if (id.startsWith('proj-')) {
    const key = id.replace('proj-', '');
    const proj = DATA.projects.find(p => p.id === key);
    if (!proj) return null;
    const d = proj.detail;
    return {
      type: `${proj.category.charAt(0).toUpperCase() + proj.category.slice(1).replace('mba','MBA')} Project`,
      title: proj.title,
      badge: proj.result ? `<span class="badge badge-gold">${proj.result}</span>` : '',
      desc: d.desc,
      outcome: d.outcome,
      highlights: d.highlights || [],
      achievements: (d.achievements || []).map(a => ({ icon: '→', text: a })),
      chips: proj.tags,
    };
  }

  // Patent
  if (id === 'patent-main') {
    const p = DATA.research.patent;
    return {
      type: `Patent · Filed ${p.filed} · Published ${p.pub}`,
      title: p.title,
      badge: `<span class="badge badge-gold">📜 ${p.status}</span>`,
      desc: `${p.body} Filed at the ${p.office} in ${p.filed}. Published ${p.pub}. Currently under examination.`,
      outcome: `Published ${p.pub} - Under Examination at ${p.office}`,
      highlights: [
        { label: 'Filed',     val: p.filed  },
        { label: 'Published', val: p.pub    },
        { label: 'Status',    val: p.status },
        { label: 'Office',    val: p.office },
      ],
      achievements: [],
      chips: ['Automotive Safety', 'Utility Patent', 'R&D Innovation'],
    };
  }

  // Publications
  if (id.startsWith('pub-')) {
    const key = id.replace('pub-', '');
    const pub = DATA.research.publications.find(p => p.id === key);
    if (!pub) return null;
    return {
      type: `${pub.type} Publication`,
      title: pub.title,
      badge: `<span class="badge badge-blue">${pub.type}</span>`,
      desc: `Published in ${pub.venue} (${pub.pub}).`,
      outcome: `Published - ${pub.venue}`,
      highlights: [
        { label: 'Type',    val: pub.type  },
        { label: 'Journal', val: pub.venue },
        { label: 'Publisher', val: pub.pub },
      ],
      achievements: [],
      chips: pub.tags,
    };
  }

  return null;
}

/* ─────────────────────────────────────────
   SCROLL ANIMATIONS
───────────────────────────────────────── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  // Observe all fade-in elements (including dynamically rendered ones)
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, 100);
}
