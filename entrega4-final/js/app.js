// Aqui pode ficar código geral do site

// Exemplo: ativar navegação por teclado em botões e links

document.querySelectorAll('button, a').forEach(el => {
  el.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      el.click();
    }
  });
});
