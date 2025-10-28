import { template as homeTemplate } from './templates/home.js';
import { template as projetosTemplate } from './templates/projetos.js';
import { template as cadastroTemplate } from './templates/cadastro.js';

export function router() {
  const content = document.getElementById('content');

  const routes = {
    '/': homeTemplate,
    '/projetos': projetosTemplate,
    '/cadastro': cadastroTemplate,
  };

  function navigate() {
    const path = location.hash.replace('#', '') || '/';
    const page = routes[path];
    if (page) {
      content.innerHTML = page;
    } else {
      content.innerHTML = `<p style="text-align:center; color:red;">Erro ao carregar a página.</p>`;
    }
  }

  window.addEventListener('hashchange', navigate);
  navigate();
}
