// Funções utilitárias gerais

function setFocus(element) {
  if (element && typeof element.focus === 'function') {
    element.focus();
  }
}

export { setFocus };
