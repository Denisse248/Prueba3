/* ══════════════════════════════════════════
   Pétalos de Ensueño · navigation.js
   Manejo de páginas, menú y scroll
   ══════════════════════════════════════════ */

// ── REFERENCIAS DOM ──────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay    = document.getElementById('overlay');
const menuClose  = document.getElementById('menuClose');

// ── NAVEGACIÓN ENTRE PÁGINAS ─────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const el = document.getElementById(name + '-page');
  if (!el) return;

  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Marca el enlace activo en el menú
  document.querySelectorAll('.menu-links a').forEach(a => {
    a.classList.toggle('active-link', a.dataset.page === name);
  });

  // Construye el catálogo la primera vez que se visita
  if (name === 'catalogo' && !document.getElementById('catalogGrid').children.length) {
    buildCatalog();
  }

  closeMenu();
}

// ── MENÚ HAMBURGUESA ─────────────────────────────────
function openMenu() {
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
});
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// ── NAVBAR AL HACER SCROLL ───────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── TECLA ESCAPE ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeMenu();
  }
});
