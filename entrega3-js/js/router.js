// js/router.js
export function router() {
  const routes = {
    '/': '/js/templates/home.js',
    '/projetos': '/js/templates/projetos.js',
    '/cadastro': '/js/templates/cadastro.js'
  };

  async function handleRoute(path) {
    const route = routes[path] || routes['/'];
    const { template } = await import(route);
    document.querySelector('#content').innerHTML = template;
    window.scrollTo(0, 0); // volta pro topo ao trocar de página
  }

  // evento para links internos
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
      e.preventDefault();
      const path = link.getAttribute('href');
      history.pushState({}, '', path);
      handleRoute(path);
    }
  });

  // navegação pelo histórico
  window.addEventListener('popstate', () => handleRoute(location.pathname));

  // carregar rota inicial
  handleRoute(location.pathname);
}
