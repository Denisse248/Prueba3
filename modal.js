/* ══════════════════════════════════════════
   Pétalos de Ensueño · modal.js
   Catálogo completo en modal
   ══════════════════════════════════════════ */

// ── REFERENCIAS DOM ──────────────────────────────────
const modalOverlay  = document.getElementById('modalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// Flag para construir el modal solo una vez
let modalBuilt = false;

// ── ABRIR MODAL ──────────────────────────────────────
function openModal() {
  if (!modalBuilt) {
    buildModal();
    modalBuilt = true;
  }
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── CERRAR MODAL ─────────────────────────────────────
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── CONSTRUIR GRILLA DEL MODAL ───────────────────────
function buildModal() {
  document.getElementById('modalGrid').innerHTML = modalFlowers.map(f => {
    const src = resolveImg(f.img, 320);
    const imgHtml = src
      ? `<img src="${src}" alt="${f.n}" loading="lazy" />`
      : `<div class="img-placeholder"><span>🌸</span><small>${f.n}</small></div>`;

    return `
    <div class="modal-card mc-item" data-cat="${f.cat}">
      ${imgHtml}
      <div class="mc-body">
        <div class="mc-cat">${f.oc}</div>
        <div class="mc-name">${f.n}</div>
        <div class="mc-price">${f.p}</div>
      </div>
    </div>
  `;
  }).join('');
}

// ── FILTRAR MODAL POR CATEGORÍA ──────────────────────
function filterModal(btn, cat) {
  document.querySelectorAll('.mf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.mc-item').forEach(item => {
    item.classList.toggle('m-hidden', cat !== 'all' && item.dataset.cat !== cat);
  });
}

// ── EVENTOS ──────────────────────────────────────────
modalCloseBtn.addEventListener('click', closeModal);

// Cerrar al hacer clic fuera del cuadro
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});