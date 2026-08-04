/* LEXSURE — interactividad compartida entre todas las páginas. */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  markActiveNavLinks();
  initContactForm();
});

/* ---------- Menú móvil (burger) ---------- */
function initMobileMenu(){
  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!burger || !mobileMenu) return;

  function closeMenu(){
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
  function openMenu(){
    burger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    document.body.classList.add('menu-open');
  }
  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ---------- Resaltar el link activo según la página actual ---------- */
function markActiveNavLinks(){
  const normalize = (path) => {
    path = path.replace(/index\.html$/, '');
    return path.length > 1 ? path.replace(/\/$/, '') : '/';
  };
  const current = normalize(location.pathname);
  document.querySelectorAll('nav a[href], .mobile-menu a[href]').forEach(link => {
    if (normalize(link.pathname) === current) link.classList.add('active');
  });
}

/* ---------- Formulario de contacto ----------
   El envío real todavía no está conectado a ningún servicio
   (ver CLAUDE.md). Por ahora sólo evitamos el submit por defecto
   y mostramos un aviso, dejando el formulario listo para apuntar
   a Formspree o similar el día que se habilite. */
function initContactForm(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'El envío desde este formulario todavía no está habilitado. Mientras tanto, escribinos directamente a admin@lexsure.com.ar y te respondemos a la brevedad.';
    status.classList.add('visible');
  });
}
