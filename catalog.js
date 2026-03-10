/* ══════════════════════════════════════════
   Pétalos de Ensueño · catalog.js
   Construcción y filtrado del catálogo
   ══════════════════════════════════════════ */

// ── CONSTRUIR GRILLA DEL CATÁLOGO ────────────────────
function buildCatalog() {
  const grid = document.getElementById('catalogGrid');

  grid.innerHTML = catalogProducts.map(p => {
    const src = resolveImg(p.img, 500);
    const imgHtml = src
      ? `<img src="${src}" alt="${p.n}" loading="lazy" />`
      : `<div class="img-placeholder"><span>🌸</span><small>${p.n}</small></div>`;

    return `
    <div class="flower-card c-item" data-cat="${p.cat}">
      <div class="card-img">
        ${imgHtml}
      </div>
      <div class="card-body">
        <span class="card-cat">${p.oc}</span>
        <div class="card-name">${p.n}</div>
        <div class="card-desc">${p.d}</div>
        <div class="card-footer">
          <span class="card-price">${p.p}</span>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

// ── FILTRAR POR CATEGORÍA ────────────────────────────
function filterCat(btn, cat) {
  // Actualiza estado activo de los botones
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Muestra / oculta tarjetas
  document.querySelectorAll('.c-item').forEach(item => {
    item.classList.toggle('hidden', cat !== 'all' && item.dataset.cat !== cat);
  });
}