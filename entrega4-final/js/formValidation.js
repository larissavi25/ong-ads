// Validação simples do formulário

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-cadastro');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const senha = form.senha.value.trim();

    let errors = [];

    if (nome === '') errors.push('O nome é obrigatório.');
    if (email === '' || !validateEmail(email)) errors.push('Email inválido.');
    if (senha.length < 6) errors.push('Senha deve ter ao menos 6 caracteres.');

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return false;
    }

    alert('Cadastro válido! Enviando dados...');
    form.submit();
  });

  function validateEmail(email) {
    // Regex simples para email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
