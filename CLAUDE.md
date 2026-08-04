
# Proyecto: Sitio web Lexsure — Derecho & Seguros

## Qué es Lexsure
Estudio jurídico especializado en derecho del seguro. Trabaja en alianza
con brokers y productores de seguros: ellos reciben la consulta/siniestro
de su cliente, Lexsure evalúa/asesora/gestiona el reclamo, y el cliente
final resuelve su caso sin costo legal adicional (salvo que el broker
indique lo contrario). Es un modelo B2B2C — el público del sitio son
brokers y productores en primer lugar, y clientes asegurados en segundo.

Fuente de verdad para todo el copy: `reference/brochure-lexsure-2026.pdf`.
No inventar servicios, cifras, testimonios ni datos de contacto que no
estén en ese archivo o en instrucciones explícitas mías.

## Identidad de marca
Fuente: `reference/brand-guide-lexsure-2026.pdf`. Reglas clave:
- Colores web: navy #1a2841, negro #010101, dorado #cda26a, dorado oscuro
  #977b51. Secundarios: negro #000000, gris #777777.
- Tipografía: Titillium Web (Google Fonts). Cuerpo de texto en Light,
  títulos en SemiBold o combinando con Italic. Nunca usar Extra Light
  (muy fina para lectura).
- Títulos siempre en MAYÚSCULAS. Alineación siempre a la izquierda
  (títulos y cuerpo).
- El isotipo "LS" está partido en diagonal (navy/dorado) — ese corte
  diagonal es el motivo visual recurrente del sitio (hero, tarjetas, CTA).

## Stack técnico
- HTML5 + CSS3 + JS vanilla. Sin frameworks, sin build step.
- Multi-página real (no SPA): index.html, servicios.html, nosotros.html,
  alianza.html, contacto.html — navegación compartida entre todas.
- Un solo archivo de estilos: /css/styles.css. Un solo archivo de
  interactividad: /js/main.js. Nada de CSS/JS inline salvo casos puntuales.
- Responsive mobile-first. Breakpoint principal a 900px.
- Sin backend por ahora. El formulario de contacto debe quedar listo
  para conectar a un servicio externo (Formspree o similar) pero no
  implementar el envío real todavía — avisame antes de agregar dependencias.

## Convenciones
- Nombrar clases en kebab-case, en español cuando describen contenido
  (ej: `.tarjeta-servicio`), en inglés cuando son utilitarias (ej: `.btn`).
- Accesibilidad: contraste AA mínimo, foco de teclado visible, atributos
  alt descriptivos, jerarquía de encabezados correcta (un solo h1 por página).
- Imágenes reales todavía no existen. Usar placeholders con degradé de
  marca + ícono + etiqueta indicando qué foto va ahí (ya definido en
  home-mockup.html) — no usar imágenes de bancos externos sin avisarme.

## Antes de tocar código
Para cualquier pedido grande (una página nueva, un rediseño de sección),
primero mostrame el plan (estructura de secciones, qué vas a reutilizar
del CSS existente) y esperá mi ok antes de escribir el archivo completo.
