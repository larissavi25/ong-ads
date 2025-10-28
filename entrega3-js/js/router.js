export function router() {
  const basePath = '/entrega3-js'; // pasta base no GitHub Pages

  const routes = {
    [`${basePath}/`]: `${basePath}/js/templates/home.js`,
    [`${basePath}/projetos`]: `${basePath}/js/templates/projetos.js`,
    [`${basePath}/cadastro`]: `${basePath}/js/templates/cadastro.js`
  };

  async function handleRoute(path) {
    const route = routes[path] || routes[`${basePath}/`];
    try {
      const { template } = await import(route);
      document.querySelector('#content').innerHTML = template;
      window.scrollTo(0, 0);
    } catch (error) {
      document.querySelector('#content').innerHTML = `<p style="text-align:center;color:red;">Erro ao carregar a página.</p>`;
      console.error('Erro ao importar o template:', error);
    }
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
      e.preventDefault();
      const path = link.getAttribute('href');
      history.pushState({}, '', path);
      handleRoute(path);
    }
  });

  window.addEventListener('popstate', () => handleRoute(location.pathname));

  handleRoute(location.pathname);
}
