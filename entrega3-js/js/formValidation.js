// js/formValidation.js
export function initFormValidation() {
  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.id === 'formCadastro') {
      e.preventDefault();

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const telefone = form.telefone.value.trim();
      const tipo = form.tipo.value;

      if (!nome || !email || !telefone || !tipo) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Digite um e-mail válido.');
        return;
      }

      if (!/^[0-9]{10,11}$/.test(telefone)) {
        alert('Digite um telefone válido (somente números, com DDD).');
        return;
      }

      alert(`Cadastro enviado com sucesso! 🎉\nNome: ${nome}\nTipo: ${tipo}`);
      form.reset();
    }
  });
}
