# 🌸 Pétalos de Ensueño — Documentación del Proyecto

## Mapa de archivos y carpetas

```
petalos-de-ensueno/
│
├── index.html              ← Punto de entrada principal. Contiene toda la estructura
│                             HTML: navbar, menú, páginas (inicio, catálogo, nosotros,
│                             contacto) y el modal del catálogo completo.
│
├── css/
│   └── styles.css          ← Todos los estilos del sitio: variables CSS, reset,
│                             navbar, hero, cards, páginas, modal y responsive.
│
├── js/
│   ├── data.js             ← Arrays de datos: catalogProducts (36 arreglos con
│   │                         descripción completa) y modalFlowers (100+ variedades
│   │                         de flores individuales).
│   │
│   ├── catalog.js          ← buildCatalog(): construye la grilla del catálogo al
│   │                         visitar esa página por primera vez.
│   │                         filterCat(): filtra por categoría al presionar botones.
│   │
│   ├── modal.js            ← openModal() / closeModal(): control del modal completo.
│   │                         buildModal(): construye la grilla de flores del modal.
│   │                         filterModal(): filtra flores dentro del modal.
│   │
│   └── navigation.js       ← showPage(): cambia entre páginas (SPA).
│                             openMenu() / closeMenu(): control del menú hamburguesa.
│                             Listener de scroll para el efecto del navbar.
│                             Listener de tecla Escape para cerrar modal/menú.
│
└── assets/                 ← Carpeta reservada para recursos locales futuros
    └── (vacía por ahora)     (imágenes propias, favicon, íconos, fuentes locales)
```

---

## Orden de carga de los scripts

El orden en `index.html` es crítico para evitar errores de referencia:

```html
<script src="js/data.js"></script>       <!-- 1° Datos globales -->
<script src="js/catalog.js"></script>    <!-- 2° Usa catalogProducts -->
<script src="js/modal.js"></script>      <!-- 3° Usa modalFlowers -->
<script src="js/navigation.js"></script> <!-- 4° Usa funciones de catalog y modal -->
```

---

## Recomendaciones de mejora (sin implementar)

### 🏗️ Arquitectura y código

1. **Reemplazar el SPA manual por un framework**
   El sistema actual de páginas usa `display:none/block` con JS puro, lo que
   no actualiza la URL ni permite usar el botón "Atrás" del navegador. Migrar
   a un router (Vue Router, React Router, o incluso el nativo History API)
   mejoraría significativamente la experiencia y el SEO.

2. **Separar datos en JSON externo o API**
   Los arrays `catalogProducts` y `modalFlowers` están hardcodeados en el JS.
   Moverlos a un archivo `data/products.json` y cargarlos con `fetch()` haría
   que el contenido sea editable sin tocar código, y abriría la puerta a
   conectar un backend o CMS en el futuro.

3. **Eliminar inline styles del HTML**
   Hay varios `style="margin-top:70px"` directamente en las etiquetas HTML
   (footers de las páginas). Lo ideal es moverlos a clases en el CSS para
   mantener la separación de responsabilidades.

---

### 🎨 Diseño y UX

4. **Agregar un carrito de compras o formulario de pedido**
   Actualmente el sitio es solo informativo. Un mini-carrito donde el usuario
   pueda seleccionar productos y generar un mensaje predefinido de WhatsApp
   incrementaría las conversiones.

5. **Añadir animaciones de entrada al hacer scroll (Intersection Observer)**
   Las cards y secciones aparecen de golpe al navegar entre páginas. Con
   `IntersectionObserver` se podrían activar animaciones de `fadeUp` a medida
   que el usuario hace scroll, dando una sensación más profesional.

6. **Skeleton loaders para las imágenes del catálogo**
   Antes de que carguen las imágenes de Unsplash, aparece un espacio en blanco.
   Un placeholder con animación de shimmer mejoraría la percepción de velocidad.

7. **Buscador en el catálogo y el modal**
   Con más de 100 flores, un campo de búsqueda por nombre o tipo de flor haría
   el catálogo mucho más usable, especialmente en mobile.

---

### ⚡ Performance

8. **Lazy loading mejorado con placeholder de color**
   Las imágenes ya usan `loading="lazy"`, pero agregar un `background-color`
   o un `blur-hash` mientras cargan evitaría el salto de layout (CLS).

9. **Prefetch de fuentes de Google Fonts**
   Agregar `<link rel="preconnect" href="https://fonts.googleapis.com">` y
   `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` en
   el `<head>` para reducir el tiempo de carga de las tipografías.

10. **Favicons y meta tags de redes sociales (Open Graph)**
    Faltan `<meta property="og:title">`, `<meta property="og:image">`, y el
    favicon del sitio. Importantes si el link se comparte por WhatsApp o redes.

---

### ♿ Accesibilidad

11. **Mejorar semántica de las páginas**
    Las "páginas" del SPA son `<div>`. Cambiarlas a `<main>` o `<section>` con
    `aria-labelledby` y gestionar el foco (`focus()`) al cambiar de página
    mejoraría la experiencia para usuarios de lectores de pantalla.

12. **Atributos ARIA en el modal**
    El modal debería tener `role="dialog"`, `aria-modal="true"` y
    `aria-labelledby` apuntando al título, y el foco debería quedar atrapado
    dentro del modal mientras está abierto (focus trap).
