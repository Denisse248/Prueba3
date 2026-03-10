/* ══════════════════════════════════════════
   Pétalos de Ensueño · data.js
   Datos del catálogo y flores del modal
   ══════════════════════════════════════════

   CAMPO img — tres formatos aceptados:
   ─────────────────────────────────────
   1) ID de Unsplash  →  'photo-1518895949257-7621c3c786d7'
      Se convierte en: https://images.unsplash.com/photo-...

   2) URL externa completa  →  'https://ejemplo.com/flor.jpg'
      Se usa tal cual, sin modificar.

   3) Ruta local  →  'assets/mis-fotos/rosa.jpg'
      Se usa tal cual (relativa al index.html).

   ══════════════════════════════════════════ */

/**
 * Convierte el campo `img` de cualquier producto en una URL lista para usar.
 * - Si empieza con 'http' o 'https'  → URL externa, se devuelve sin cambios.
 * - Si empieza con 'photo-'          → ID de Unsplash, se arma la URL completa.
 * - Cualquier otra cosa              → ruta local (ej: 'assets/foto.jpg').
 *
 * @param {string} img   - Valor del campo img del producto.
 * @param {number} [w]   - Ancho deseado (solo aplica a Unsplash). Default 500.
 * @returns {string}     - URL final de la imagen.
 */
function resolveImg(img, w = 500) {
  if (!img) return '';
  if (img.startsWith('http://') || img.startsWith('https://')) return img;
  if (img.startsWith('photo-')) {
    return `https://images.unsplash.com/${img}?w=${w}&auto=format&fit=crop&q=80`;
  }
  return img; // ruta local relativa al index.html
}

// ─────────────────────────────────────────────────────────────────────────────
const catalogProducts = [
  { n: 'Ramo Pasión Eterna',      cat: 'romantico', oc: 'Romántico',   p: '$25',  img: '6520-pasion-eterna-ramo-de-24-rosas-rojas-premium.jpeg', d: '12 rosas rojas premium envueltas en papel kraft con cinta satén dorada.' },
  { n: 'Corazón de Rosas',        cat: 'romantico', oc: 'Aniversario', p: '$38',  img: 'IMG_0258.jpg',    d: 'Arreglo en forma de corazón con rosas rosadas y follaje fresco.' },
  { n: 'Tulipanes del Amor',      cat: 'romantico', oc: 'Romántico',   p: '$29',  img: 'ramo-tulipanes-y-mini-rosa-2.jpg', d: '15 tulipanes en tonos coral y crema con ramas de eucalipto.' },
  { n: 'Box Garden Romance',      cat: 'romantico', oc: 'Aniversario', p: '$42',  img: 'b777bc7e-64b2-4dd6-95c7-9eeba4d5cec6-350x435.webp', d: 'Caja de jardín con rosas, peonías y flores silvestres mixtas.' },
  { n: 'Peonías Eternas',         cat: 'romantico', oc: 'Romántico',   p: '$35',  img: '601ec56cc610acf0086ad881bd526dcf.jpg', d: 'Ramo de peonías en rosa pálido con elegantes cintas blancas.' },
  { n: 'Rosa Única',              cat: 'romantico', oc: 'Especial',    p: '$18',  img: '71CPB3ZMVtL._AC_UF894,1000_QL80_.jpg', d: 'Una rosa perfecta envuelta artesanalmente con eucalipto plateado.' },
  { n: 'Alegría en Colores',      cat: 'cumple',    oc: 'Cumpleaños',  p: '$20',  img: 'wp-16781807521748375896609240017784-scaled.jpg', d: 'Mezcla vibrante de gerberas, girasoles y margaritas tropicales.' },
  { n: 'Girasoles Felices',       cat: 'cumple',    oc: 'Cumpleaños',  p: '$22',  img: 'felicitaciones-de-cumpleanos.webp', d: '12 girasoles frescos con follaje decorativo y lazo amarillo.' },
  { n: 'Caja Sorpresa Pastel',    cat: 'cumple',    oc: 'Cumpleaños',  p: '$33',  img: 'Captura-de-pantalla-2024-11-22-a-las-12.14.12 a.m.webp', d: 'Caja kraft con flores pastel y tarjeta de mensaje personalizado.' },
  { n: 'Ramo Gerberas Mix',       cat: 'cumple',    oc: 'Cumpleaños',  p: '$24',  img: 'img_8441-scaled.jpeg', d: 'Gerberas coloridas en rosa, naranja y amarillo vibrante.' },
  { n: 'Canasta Primavera',       cat: 'cumple',    oc: 'Cumpleaños',  p: '$32',  img: 'F502-7-Canasta-Floral-FONDO.webp', d: 'Canasta de mimbre con flores de temporada seleccionadas a diario.' },
  { n: 'Ramo Tropical Fest',      cat: 'cumple',    oc: 'Fiesta',      p: '$27',  img: '81+5TfoaLVL.jpg', d: 'Flores tropicales vibrantes con hojas de helecho y palmera.' },
  { n: 'Centro Mesa Nupcial',     cat: 'boda',      oc: 'Boda',        p: '$45',  img: 'centro-rodajas-madera_1_115927-157565479634631.jpeg', d: 'Peonías, eucalipto y flores silvestres en base de cristal.' },
  { n: 'Arco Floral Jardín',      cat: 'boda',      oc: 'Boda',        p: '$120', img: 'arco-de-flores-para-bodas-decoracion-floral-madrid.jpg', d: 'Arco floral completo con flores frescas y follaje para bodas.' },
  { n: 'Ramo de Novia Clásico',   cat: 'boda',      oc: 'Boda',        p: '$55',  img: 'Ramo clasico.jpg', d: 'Ramo nupcial blanco con lirios, jazmín y elegantes calas.' },
  { n: 'Mesa Corporativa',        cat: 'boda',      oc: 'Corporativo', p: '$40',  img: 'mesa arreglos.jpg', d: 'Centro de mesa elegante para reuniones y eventos empresariales.' },
  { n: 'Decoración Bautizo',      cat: 'boda',      oc: 'Bautizo',     p: '$60',  img: 'bautiso.jpg', d: 'Arreglos en azul y blanco para la celebración del bautizo.' },
  { n: 'Centro Comunión',         cat: 'boda',      oc: 'Comunión',    p: '$48',  img: 'primera comunion.jpg', d: 'Arreglo en blanco marfil con rosas y lirios frescos de temporada.' },
  { n: 'Cena Formal Premium',     cat: 'boda',      oc: 'Gala',        p: '$85',  img: 'cena premium.jpg', d: 'Centros de mesa de lujo para cenas formales y galas especiales.' },
  { n: 'Feria Empresarial',       cat: 'boda',      oc: 'Corporativo', p: '$75',  img: 'feria empresarial.webp', d: 'Decoración floral profesional para stands y eventos corporativos.' },
  { n: 'Orquídea Phalaenopsis',   cat: 'planta',    oc: 'Hogar',       p: '$30',  img: 'orquidea 2.webp', d: 'Orquídea en maceta de cerámica blanca artesanal de larga duración.' },
  { n: 'Suculentas en Caja',      cat: 'planta',    oc: 'Decoración',  p: '$18',  img: 'orquidia 3.jpg', d: 'Colección de suculentas en caja de madera rústica artesanal.' },
  { n: 'Cactus Decorativo',       cat: 'planta',    oc: 'Oficina',     p: '$15',  img: 'captus.jpg', d: 'Cactus de bajo mantenimiento presentado en maceta colorida.' },
  { n: 'Bromelias Mix',           cat: 'planta',    oc: 'Hogar',       p: '$22',  img: 'combinacion.jpg', d: 'Bromelias tropicales en maceta de barro artesanal pintada a mano.' },
  { n: 'Ficus Lyrata',            cat: 'planta',    oc: 'Hogar',       p: '$45',  img: 'palo.jpg', d: 'Planta decorativa de gran porte ideal para interiores elegantes.' },
  { n: 'Pothos Colgante',         cat: 'planta',    oc: 'Decoración',  p: '$20',  img: 'hojas.avif', d: 'Planta colgante de fácil cuidado en maceta tejida artesanal.' },
  { n: 'Protea Exótica',          cat: 'exotico',   oc: 'Único',       p: '$28',  img: '40375a59-d27d-49d5-8708-3df3c7f8b1ae.__CR0,381,2000,1237_PT0_SX970_V1___.jpg', d: 'Protea sudafricana en arreglo artístico de diseño contemporáneo.' },
  { n: 'Ave del Paraíso',         cat: 'exotico',   oc: 'Tropical',    p: '$32',  img: '12ec89a47e56adc05289782646cee5a5.jpg', d: 'La majestuosa Strelitzia en espectacular arreglo tropical.' },
  { n: 'Anthurium Rojo',          cat: 'exotico',   oc: 'Tropical',    p: '$19',  img: 'ramo-de-flores-anthurium-rojo-1.jpg', d: 'Anthuriums rojos vibrantes con follaje verde exuberante tropical.' },
  { n: 'Banksia Dorada',          cat: 'exotico',   oc: 'Único',       p: '$25',  img: 'il_570xN.2589147520_9v4w.webp', d: 'Banksia australiana con textura única y tonos dorados naturales.' },
  { n: 'Vanda Orquídea Azul',     cat: 'exotico',   oc: 'Orquídea',    p: '$35',  img: 'blossom-plant-flower-bloom-spring-botany-611601-pxhere-com.jpg', d: 'Orquídea Vanda en espectaculares tonos azules y morados.' },
  { n: 'Heliconia Tropical',      cat: 'exotico',   oc: 'Tropical',    p: '$30',  img: 'heliconias.webp', d: 'Heliconia tropical en rojo y amarillo de impacto visual único.' },
  { n: 'Corona Serenidad',        cat: 'homenaje',  oc: 'Homenaje',    p: '$55',  img: 'corono-de-condolencias-para-mujer-ecuador.jpg', d: 'Corona de flores blancas y verdes con lirios y azahares frescos.' },
  { n: 'Ramo Blanco Eterno',      cat: 'homenaje',  oc: 'Homenaje',    p: '$40',  img: 'toma-la-imagen-adjunta-como-base-y-genera-ftk48yan.jpg', d: 'Ramo solemne en tonos blancos con crisantemos y lirios selectos.' },
  { n: 'Cruz Floral',             cat: 'homenaje',  oc: 'Homenaje',    p: '$65',  img: 'Funeral_Cross_Flowers.webp', d: 'Cruz floral elaborada con flores blancas y follaje verde natural.' },
  { n: 'Corazón Blanco Homenaje', cat: 'homenaje',  oc: 'Homenaje',    p: '$48',  img: '91239_b9597f24-2b6e-4b78-bee4-31bbc029e56a.webp', d: 'Corazón de flores blancas en emotivo homenaje al ser querido.' },
];

const modalFlowers = [
  { n: 'Rosa Roja Clásica',     cat: 'romantico', oc: 'Romántico',  p: '$15', img: 'ramo-6-rosas-rojas.jpg' },
  { n: 'Rosa Blanca Pureza',    cat: 'boda',      oc: 'Nupcial',    p: '$15', img: 'elegante-bouquet-de-rosas-blancas-y-respiración-del-bebé-sobre-la-ia-tela-blanca-un-impresionante-armario-ramo-novias-cremosas-382991867.webp' },
  { n: 'Rosa Amarilla Sol',     cat: 'cumple',    oc: 'Alegría',    p: '$14', img: 'Rosa Amarilla Sol.jpg' },
  { n: 'Rosa Rosa Delicada',    cat: 'romantico', oc: 'Especial',   p: '$15', img: 'Rosa Rosa Delicada.webp' },
  { n: 'Girasol Alegre',        cat: 'cumple',    oc: 'Felicidad',  p: '$12', img: 'Girasol Alegre.jpg' },
  { n: 'Girasol Mini',          cat: 'cumple',    oc: 'Jardín',     p: '$9',  img: 'Girasol Mini.jpg' },
  { n: 'Lirio Blanco',          cat: 'boda',      oc: 'Elegancia',  p: '$18', img: 'Lirio Blanco.jpg' },
  { n: 'Lirio Rosa Perfumado',  cat: 'romantico', oc: 'Perfumado',  p: '$20', img: 'Lirio Rosa Perfumado.jpg' },
  { n: 'Tulipán Rojo',          cat: 'romantico', oc: 'Pasión',     p: '$14', img: 'Tulipán Rojo.jpg' },
  { n: 'Tulipán Violeta',       cat: 'romantico', oc: 'Especial',   p: '$16', img: 'Tulipán Violeta.jpg' },
  { n: 'Tulipán Blanco',        cat: 'boda',      oc: 'Nupcial',    p: '$14', img: 'Tulipán Blanco.jpg' },
  { n: 'Tulipán Rosado',        cat: 'romantico', oc: 'Delicado',   p: '$15', img: 'tulipan rosado.webp' },
  { n: 'Gerbera Naranja',       cat: 'cumple',    oc: 'Festivo',    p: '$10', img: 'Gerbera Naranja.webp' },
  { n: 'Gerbera Amarilla',      cat: 'cumple',    oc: 'Soleado',    p: '$10', img: 'Gerbera Rosa.webp' },
  { n: 'Gerbera Roja',          cat: 'cumple',    oc: 'Festivo',    p: '$10', img: 'Gerbera Roja.webp' },
  { n: 'Peonía Rosada',         cat: 'boda',      oc: 'Boda',       p: '$22', img: 'Peonía Rosada.jpg' },
  { n: 'Peonía Blanca',         cat: 'boda',      oc: 'Nupcial',    p: '$22', img: 'Peonía Blanca.jpg' },
  { n: 'Lavanda Provenzal',     cat: 'romantico', oc: 'Aromático',  p: '$14', img: 'Lavanda Provenzal.webp' },
  { n: 'Dalia Amarilla',        cat: 'cumple',    oc: 'Jardín',     p: '$13', img: 'Dalia Amarilla.webp' },
  { n: 'Dalia Roja',            cat: 'romantico', oc: 'Apasionado', p: '$14', img: 'Dalia Roja.webp' },
  { n:  'Dalia Violeta',         cat: 'romantico', oc: 'Especial',   p: '$14', img: 'Dalia violeta.png' },
  { n: 'Crisantemo Blanco',     cat: 'homenaje',  oc: 'Serenidad',  p: '$11', img: 'Serenidad.webp' },
  { n: 'Crisantemo Amarillo',   cat: 'cumple',    oc: 'Festivo',    p: '$11', img: 'Festivo.jpg' },
  { n: 'Freesia Blanca',        cat: 'boda',      oc: 'Nupcial',    p: '$12', img: 'Nupcial.webp' },
  { n: 'Freesia Amarilla',      cat: 'cumple',    oc: 'Alegría',    p: '$12', img: 'Alegría.webp' },
  { n: 'Ranúnculo Rosa',        cat: 'romantico', oc: 'Delicado',   p: '$17', img: 'Delicado.webp' },
  { n: 'Ranúnculo Naranja',     cat: 'cumple',    oc: 'Vibrante',   p: '$16', img: 'Vibrante.png' },
  { n: 'Alstroemeria Mixta',    cat: 'cumple',    oc: 'Colorido',   p: '$10', img: 'Colorido.jpg' },
  { n: 'Camélia Roja',          cat: 'romantico', oc: 'Pasión',     p: '$19', img: 'Pasión.jpg' },
  { n: 'Clavel Rojo',           cat: 'romantico', oc: 'Clásico',    p: '$9',  img: 'Clásico.webp' },
  { n: 'Clavel Blanco',         cat: 'boda',      oc: 'Nupcial',    p: '$9',  img: 'Clavel Blanco.webp' },
  { n: 'Clavel Rosa',           cat: 'cumple',    oc: 'Festivo',    p: '$9',  img: 'Clavel Rosa.webp ' },
  { n: 'Magnolia Blanca',       cat: 'boda',      oc: 'Elegante',   p: '$24', img: 'Festivo 2.webp' },
  { n: 'Iris Azul',             cat: 'romantico', oc: 'Único',      p: '$15', img: 'Único.webp' },
  { n: 'Hortensia Azul',        cat: 'boda',      oc: 'Boda',       p: '$20', img: 'Boda 5.webp' },
  { n: 'Hortensia Rosa',        cat: 'boda',      oc: 'Boda',       p: '$20', img: 'Boda 6.webp' },
  { n: 'Hortensia Blanca',      cat: 'boda',      oc: 'Nupcial',    p: '$20', img: 'Hortensia Blanca.webp'},
  { n: 'Amarilis Roja',         cat: 'romantico', oc: 'Navidad',    p: '$17', img: 'Amarilis Roja 2.webp' },
  { n: 'Flor de Cerezo',        cat: 'romantico', oc: 'Delicado',   p: '$22', img: 'Flor de Cerezo.webp' },
  { n: 'Protea Exótica',        cat: 'exotico',   oc: 'Único',      p: '$28', img: 'Protea Exótica.webp' },
  { n: 'Anthurium Rojo',        cat: 'exotico',   oc: 'Tropical',   p: '$19', img: 'Anthurium Rojo.webp' },
  { n: 'Cala Blanca',           cat: 'boda',      oc: 'Nupcial',    p: '$23', img: 'Cala Blanca.webp' },
  { n: 'Lisianthus Lila',       cat: 'boda',      oc: 'Refinado',   p: '$16', img: 'Lisianthus Lila.webp' },
  { n: 'Lisianthus Blanco',     cat: 'boda',      oc: 'Nupcial',    p: '$16', img: 'Lisianthus Blanco.webp' },
  { n: 'Eustoma Blanca',        cat: 'boda',      oc: 'Delicado',   p: '$15', img: 'Eustoma Blanca.webp' },
  { n: 'Astilbe Rosada',        cat: 'boda',      oc: 'Novia',      p: '$17', img: 'Astilbe Rosada.webp' },
  { n: 'Stephanotis Blanca',    cat: 'boda',      oc: 'Boda',       p: '$20', img: 'Stephanotis Blanca.webp' },
  { n: 'Bouvardia Blanca',      cat: 'boda',      oc: 'Novia',      p: '$14', img: 'Bouvardia Blanca.webp' },
  { n: 'Kangaroo Paw Roja',     cat: 'exotico',   oc: 'Exótico',    p: '$21', img: 'Kangaroo Paw Roja.webp' },
  { n: 'Banksia Dorada',        cat: 'exotico',   oc: 'Exótico',    p: '$25', img: 'Banksia Dorada.jpg' },
  { n: 'Vanda Azul',            cat: 'exotico',   oc: 'Orquídea',   p: '$35', img: 'Vanda Azul.webp' },
  { n: 'Leucadendron Rojo',     cat: 'exotico',   oc: 'Exótico',    p: '$22', img: 'Leucadendron Rojo.webp' },
  { n: 'Corona Blanca',         cat: 'homenaje',  oc: 'Homenaje',   p: '$55', img: 'Corona Blanca.jpg' },
  { n: 'Ramo Serenidad',        cat: 'homenaje',  oc: 'Homenaje',   p: '$40', img: 'Ramo Serenidad.webp' },
  { n: 'Cruz Floral Blanca',    cat: 'homenaje',  oc: 'Homenaje',   p: '$65', img: 'Cruz Floral Blanca.jpg' },
  { n: 'Corazón Blanco',        cat: 'homenaje',  oc: 'Homenaje',   p: '$48', img: 'Corazón Blanco.webp' },
  { n: 'Arreglo Fúnebre Mix',   cat: 'homenaje',  oc: 'Homenaje',   p: '$70', img: 'Arreglo Fúnebre Mix.jpg' },
  { n: 'Lirio Homenaje',        cat: 'homenaje',  oc: 'Homenaje',   p: '$35', img: 'Lirio Homenaje.jpg' },
  { n: 'Orquídea Phalaenopsis', cat: 'planta',    oc: 'Planta',     p: '$30', img: 'Orquídea Phalaenopsis.webp' },
  { n: 'Suculentas Mini',       cat: 'planta',    oc: 'Planta',     p: '$18', img: 'Suculentas Mini.webp' },
  { n: 'Cactus Bola Verde',     cat: 'planta',    oc: 'Planta',     p: '$12', img: 'Cactus Bola Verde.webp' },
  { n: 'Cactus Columnar',       cat: 'planta',    oc: 'Planta',     p: '$20', img: 'Cactus Columnar.jpg' },
  { n: 'Bromelia Roja',         cat: 'planta',    oc: 'Planta',     p: '$22', img: 'Bromelia Roja.jpg' },
  { n: 'Pothos Verde',          cat: 'planta',    oc: 'Hogar',      p: '$18', img: 'Pothos Verde.webp' },
  { n: 'Aglaonema Rosa',        cat: 'planta',    oc: 'Hogar',      p: '$25', img: 'Aglaonema Rosa.webp' },
  { n: 'Calathea Ornata',       cat: 'planta',    oc: 'Decoración', p: '$28', img: 'Calathea Ornata.jpg' },
  { n: 'Dracaena Tricolor',     cat: 'planta',    oc: 'Oficina',    p: '$35', img: 'Dracaena Tricolor.webp' },
  { n: 'Sansevieria Gold',      cat: 'planta',    oc: 'Oficina',    p: '$22', img: 'Sansevieria Gold.jpg' },
  { n: 'Narciso Amarillo',      cat: 'cumple',    oc: 'Primavera',  p: '$11', img: 'Narciso Amarillo.webp' },
  { n: 'Flor de Lis',           cat: 'boda',      oc: 'Nupcial',    p: '$16', img: 'Flor de Lis.jpg' },
  { n: 'Agapanto Azul',         cat: 'romantico', oc: 'Único',      p: '$13', img: 'Agapanto Azul.webp' },
  { n: 'Mimosa Amarilla',       cat: 'romantico', oc: 'San Valentín', p: '$16', img: 'Mimosa Amarilla.webp' },
  { n: 'Scabiosa Lila',         cat: 'romantico', oc: 'Delicado',   p: '$14', img: 'Scabiosa Lila.webp' },
  { n: 'Matthiola Fragante',    cat: 'romantico', oc: 'Aromático',  p: '$12', img: 'Matthiola Fragante.webp' },
  { n: 'Echinacea Rosada',      cat: 'romantico', oc: 'Natural',    p: '$12', img: 'Echinacea Rosada.webp' },
  { n: 'Aquilegia Azul',        cat: 'romantico', oc: 'Silvestre',  p: '$13', img: 'Aquilegia Azul.webp' },
  { n: 'Cosmos Silvestre',      cat: 'romantico', oc: 'Jardín',     p: '$10', img: 'Cosmos Silvestre.jpg' },
  { n: 'Zinnia Fucsia',         cat: 'cumple',    oc: 'Festivo',    p: '$10', img: 'Zinnia Fucsia.webp' },
  { n: 'Zinnia Naranja',        cat: 'cumple',    oc: 'Festivo',    p: '$10', img: 'Zinnia Naranja.webp' },
  { n: 'Zinnia Amarilla',       cat: 'cumple',    oc: 'Soleado',    p: '$10', img: 'Zinnia Amarilla.webp' },
  { n: 'Pentas Roja',           cat: 'cumple',    oc: 'Jardín',     p: '$9',  img: 'Pentas Roja.webp' },
  { n: 'Digitalis Morada',      cat: 'romantico', oc: 'Silvestre',  p: '$13', img: 'Digitalis Morada.webp' },
  { n: 'Verbena Colorida',      cat: 'cumple',    oc: 'Colorido',   p: '$9',  img: 'Verbena Colorida.webp' },
  { n: 'Salvia Azul',           cat: 'romantico', oc: 'Aromático',  p: '$8',  img: 'Salvia Azul.webp' },
  { n: 'Gallardia Bicolor',     cat: 'cumple',    oc: 'Sol',        p: '$10', img: 'Gallardia Bicolor.webp' },
  { n: 'Liatris Lila',          cat: 'boda',      oc: 'Complemento', p: '$11', img: 'OIP.webp' },
  { n: 'Ruscus Verde',          cat: 'boda',      oc: 'Follaje',    p: '$6',  img: 'Ruscus Verde.jpg' },
  { n: 'Heliconia Lobster',     cat: 'exotico',   oc: 'Tropical',   p: '$26', img: 'Heliconia Lobster.jpg' },
  { n: 'Ópera Orquídea Blanca', cat: 'exotico',   oc: 'Orquídea',   p: '$30', img: 'Ópera Orquídea Blanca.jpg' },
];